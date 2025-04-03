"use client"

import { useEffect, useState } from "react"
import LiveMatch from "./live-match"
import PointsTable from "./points-table"
import MatchSchedule from "./match-schedule"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Table, Calendar } from "lucide-react"
import { fetchIPLData } from "../lib/api"
import type { IPLData } from "../lib/types"
import { useToast } from "../hooks/use-toast"

export default function Dashboard() {
  const [data, setData] = useState<IPLData | null>(null)
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const iplData = await fetchIPLData()
        setData(iplData)
      } catch (error) {
        toast({
          title: "Error loading data",
          description: "Could not fetch the latest IPL data. Using cached data instead.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    loadData()

    // Refresh data every 5 minutes
    const intervalId = setInterval(loadData, 5 * 60 * 1000)
    
    return () => clearInterval(intervalId)
  }, [toast])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">IPL T20 Dashboard</h1>
            <div className="flex items-center space-x-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-300">Live Updates</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <>
            {/* Live/Upcoming Match Section */}
            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                {data?.liveMatch ? "Live Match" : "Upcoming Match"}
              </h2>
              <LiveMatch match={data?.liveMatch || data?.upcomingMatches?.[0]} />
            </section>

            {/* Tabs for Points Table and Schedule */}
            <Tabs defaultValue="points" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="points" className="flex items-center gap-2">
                  <Table className="h-4 w-4" />
                  <span className="hidden sm:inline">Points Table</span>
                </TabsTrigger>
                <TabsTrigger value="schedule" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="hidden sm:inline">Match Schedule</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="points">
                <PointsTable teams={data?.pointsTable || []} />
              </TabsContent>
              <TabsContent value="schedule">
                <MatchSchedule matches={data?.schedule || []} />
              </TabsContent>
            </Tabs>
          </>
        )}
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow-inner py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>Data refreshes automatically every 5 minutes</p>
        </div>
      </footer>
    </div>
  )
}


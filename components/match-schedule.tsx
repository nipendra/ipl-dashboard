import { Card, CardContent } from "./ui/card"
import type { MatchType } from "../lib/types"
import { formatDate } from "../lib/utils"
import { MapPin, Calendar, Clock } from "lucide-react"
import Image from "next/image"

interface MatchScheduleProps {
  matches: MatchType[]
}

export default function MatchSchedule({ matches }: MatchScheduleProps) {
  if (!matches.length) {
    return <div className="text-center py-8">No schedule data available</div>
  }

  // Group matches by date
  const groupedMatches: Record<string, MatchType[]> = {}

  matches.forEach((match) => {
    const dateKey = new Date(match.date).toDateString()
    if (!groupedMatches[dateKey]) {
      groupedMatches[dateKey] = []
    }
    groupedMatches[dateKey].push(match)
  })

  return (
    <div className="space-y-6">
      {Object.entries(groupedMatches).map(([date, dayMatches]) => (
        <div key={date} className="space-y-3">
          <h3 className="text-md font-semibold sticky top-16 bg-gray-50 py-2 z-10 flex items-center gap-2">
            <Calendar className="h-4 w-4 text-purple-500" />
            {new Date(date).toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </h3>
          <div className="space-y-3">
            {dayMatches.map((match) => (
              <Card key={match.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gray-200  p-2 text-xs font-medium flex justify-between">
                    <span>
                      {match.matchNumber} • {match.matchType}
                    </span>
                    <span>{match.status === "completed" ? "Completed" : "Upcoming"}</span>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex flex-col items-center space-y-2 w-2/5">
                        <div className="relative h-12 w-12 rounded-full bg-gray-100 p-1">
                          <Image
                            src={`/${match.team1.id}.svg?height=48&width=48&text=${match.team1.shortName}`}
                            alt={match.team1.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <h3 className="text-sm font-medium text-center">{match.team1.name}</h3>
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-gray-400">VS</span>
                      </div>

                      <div className="flex flex-col items-center space-y-2 w-2/5">
                        <div className="relative h-12 w-12 rounded-full bg-gray-100 p-1">
                          <Image
                            src={`/${match.team2.id}.svg?height=48&width=48&text=${match.team2.shortName}`}
                            alt={match.team2.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <h3 className="text-sm font-medium text-center">{match.team2.name}</h3>
                      </div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-600 ">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{formatDate(match.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{match.venue}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}


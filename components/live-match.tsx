import { Card, CardContent } from "./ui/card"
import { Progress } from "./ui/progress"
import type { LiveMatchType } from "../lib/types"
import { formatDate } from "../lib/utils"
import Image from "next/image"
import { Clock, MapPin } from "lucide-react"

interface LiveMatchProps {
  match: LiveMatchType | undefined
}

export default function LiveMatch({ match }: LiveMatchProps) {
  if (!match) {
    return (
      <Card className="border-2 border-dashed border-gray-200 dark:border-gray-700">
        <CardContent className="p-6 text-center">
          <p className="text-gray-500 dark:text-gray-400">No match information available</p>
        </CardContent>
      </Card>
    )
  }

  const isLive = match.status === "live"

  return (
    <Card className="overflow-hidden border border-gray-300 rounded-lg">
      <CardContent className="p-0">
        {/* Header */}
        <div className="bg-blue-900 text-white p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              {isLive ?
                <>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <span className="text-sm font-medium">LIVE</span>
                </>
              :
                <>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">{formatDate(match.date)}</span>
                </div>
                </>
              }
            </div>
            <div className="text-sm font-medium">{match.matchNumber}</div>
          </div>

          {/* Teams and Scores */}
          <div className="flex justify-between items-center mt-4 p-4 text-white rounded-2xl 
                bg-gradient-to-r from-blue-500 via-blue-700 via-50% to-blue-900 
                to-75% via-blue-700 via-100%">
            <div className="flex flex-col items-center">
              <div className="relative h-16 w-16 rounded-full bg-amber-400 p-1 overflow-hidden">
                <Image
                  src={`/${match.team1.id}.svg?height=64&width=64&text=${match.team1.shortName}`}
                  alt={match.team1.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mt-2">{match.team1.shortName}</h3>
              {isLive && <p className="text-lg">{match.team1.score}</p>}
            </div>

            <div className="text-2xl font-bold">VS</div>

            <div className="flex flex-col items-center">
              <div className="relative h-16 w-16 rounded-full bg-amber-400 p-1 overflow-hidden">
                <Image
                  src={`/${match.team2.id}.svg?height=64&width=64&text=${match.team2.shortName}`}
                  alt={match.team2.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mt-2">{match.team2.shortName}</h3>
              {isLive && <p className="text-lg">{match.team2.score || "Yet to bat"}</p>}
            </div>
          </div>
        </div>

        {/* Match Details */}
        {isLive && (
          <div className="p-4">
            <div className="flex justify-between mb-2">
              <div>
                <p className="text-sm text-gray-500">Required Run Rate</p>
                <p className="text-2xl font-bold">8.5</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Current Run Rate</p>
                <p className="text-2xl font-bold">7.8</p>
              </div>
            </div>

            <Progress value={75} className="h-2 mb-6" />

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bat"
                  >
                    <path d="M4.5 10.5 10 5m8 14 .5-.5m-10-10 10 10M7 21l3.5-3.5M5 11l1-1 1-1 9 9 1 1 1 1" />
                  </svg>
                  Batting
                </h4>
                <p className="font-bold">{"Dhoni"}</p>
                <p className="text-sm text-gray-500">On Strike</p>
                <p className="text-xl font-bold mt-1">
                  45 <span className="text-sm font-normal text-gray-500">(32 balls)</span>
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bowling-pin"
                  >
                    <path d="M12 3a4 4 0 0 0-4 4v5a4 4 0 0 0 8 0V7a4 4 0 0 0-4-4Z" />
                    <path d="M12 3v5" />
                    <path d="M12 16v5" />
                    <path d="M10 18a1.66 1.66 0 0 0 4 0" />
                  </svg>
                  Bowling
                </h4>
                <p className="font-bold">Bumrah</p>
                <p className="text-sm text-gray-500">Current Bowler</p>
                <p className="text-xl font-bold mt-1">
                  2/24 <span className="text-sm font-normal text-gray-500">(3.2 overs)</span>
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-6 text-sm text-gray-500">
              <div>
                <p className="mb-1">Last ball</p>
                <div className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs mr-2">
                    6
                  </span>
                  <span className="font-bold">FOUR!</span>
                </div>
              </div>
              <div className="text-right">
                <p className="mb-1">Match Progress</p>
                <p className="font-bold text-lg">{match.currentOver} overs</p>
              </div>
            </div>
          </div>
        )}

        {!isLive && (
          <div className="p-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md text-center">
              <p className="text-sm font-medium">{match.matchType}</p>
              <p className="text-sm text-gray-500 mt-2">{match.status_text || "Match starts soon"}</p>
            </div>
          </div>
        )}

        <div className="p-3 text-center text-sm text-gray-500 border-t">
          <MapPin className="h-3 w-3 inline mr-1" />
          {match.venue}
        </div>
      </CardContent>
    </Card>
  )
}


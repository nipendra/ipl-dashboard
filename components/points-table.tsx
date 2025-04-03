import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import type { TeamStanding } from "../lib/types"
import { ArrowUp, ArrowDown } from "lucide-react"
import Image from "next/image"

interface PointsTableProps {
  teams: TeamStanding[]
}

export default function PointsTable({ teams }: PointsTableProps) {
  if (!teams.length) {
    return <div className="text-center py-8">No points table data available</div>
  }

  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12 text-center">#</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-center">M</TableHead>
            <TableHead className="text-center">W</TableHead>
            <TableHead className="text-center">L</TableHead>
            <TableHead className="text-center">NR</TableHead>
            <TableHead className="text-center">Pts</TableHead>
            <TableHead className="text-center hidden md:table-cell">NRR</TableHead>
            <TableHead className="text-center hidden md:table-cell">Last 5</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team, index) => (
            <TableRow key={team.id} className={index < 4 ? "bg-green-50 dark:bg-green-950/20" : ""}>
              <TableCell className="text-center font-medium">{index + 1}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs">
                    <Image
                        src={`/${team.id}.svg?height=64&width=64&text=${team.shortName}`}
                        alt={team.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                    />
                  </div>
                  <span className="hidden sm:inline">{team.name}</span>
                  <span className="sm:hidden">{team.shortName}</span>
                  {team.positionDiff > 0 && <ArrowUp className="h-4 w-4 text-green-500" />}
                  {team.positionDiff < 0 && <ArrowDown className="h-4 w-4 text-red-500" />}
                </div>
              </TableCell>
              <TableCell className="text-center">{team.played}</TableCell>
              <TableCell className="text-center">{team.won}</TableCell>
              <TableCell className="text-center">{team.lost}</TableCell>
              <TableCell className="text-center">{team.noResult}</TableCell>
              <TableCell className="text-center font-bold">{team.points}</TableCell>
              <TableCell
                className={`text-center hidden md:table-cell ${team.netRunRate > 0 ? "text-green-600" : "text-red-600"}`}
              >
                {team.netRunRate > 0 ? "+" : ""}
                {team.netRunRate.toFixed(3)}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <div className="flex space-x-1 justify-center">
                  {team.form.map((result, i) => (
                    <span
                      key={i}
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white
                        ${result === "W" ? "bg-green-500" : result === "L" ? "bg-red-500" : "bg-gray-400"}`}
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}


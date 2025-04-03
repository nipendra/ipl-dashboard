export interface TeamInfo {
  id: string
  name: string
  shortName: string
  score?: string
}

export interface LiveMatchType {
  id: string
  team1: TeamInfo
  team2: TeamInfo
  date: string
  venue: string
  matchNumber: string
  matchType: string
  status: "live" | "upcoming" | "completed"
  status_text?: string
  currentOver?: string
  matchProgress?: number
}

export interface MatchType {
  id: string
  team1: TeamInfo
  team2: TeamInfo
  date: string
  venue: string
  matchNumber: string
  matchType: string
  status: "upcoming" | "completed"
  result?: string
}

export interface TeamStanding {
  id: string
  name: string
  shortName: string
  played: number
  won: number
  lost: number
  noResult: number
  points: number
  netRunRate: number
  positionDiff: number
  form: Array<"W" | "L" | "N">
}

export interface IPLData {
  liveMatch: LiveMatchType | null
  upcomingMatches: LiveMatchType[]
  pointsTable: TeamStanding[]
  schedule: MatchType[]
  lastUpdated: string
}


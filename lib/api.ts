import type { IPLData } from "./types"
import { dummyData } from "./dummy-data"

export async function fetchIPLData(): Promise<IPLData> {
  try {
    // In a real implementation, you would call your API endpoint
    // const response = await fetch('/api/scrape')
    // if (!response.ok) throw new Error('Failed to fetch data')
    // return await response.json()

    // For now, return dummy data with a slight delay to simulate network request
    await new Promise((resolve) => setTimeout(resolve, 800))
    return dummyData
  } catch (error) {
    console.error("Error fetching IPL data:", error)
    return dummyData
  }
}


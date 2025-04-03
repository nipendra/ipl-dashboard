import { NextResponse } from "next/server"
import { dummyData } from "../../../lib/dummy-data"


export async function GET() {
  try {
    // Simulating a delay to mimic network request
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(dummyData)
  } catch (error) {
    console.error("Error scraping IPL data:", error)
    return NextResponse.json({ error: "Failed to scrape IPL data" }, { status: 500 })
  }
}


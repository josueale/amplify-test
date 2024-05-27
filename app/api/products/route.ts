import { NextResponse } from "next/server"

export async function GET() {
  const res: any[] = []

  const data = { products: res }

  return NextResponse.json({ data })
}
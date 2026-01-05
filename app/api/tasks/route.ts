import { getDatabase } from "@/app/lib/mongoDb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const db = await getDatabase();
    const users = await db.collection("TaskCollection").find().toArray();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try{
       return NextResponse.json({massege: 'True'})

    }
    catch{
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
};
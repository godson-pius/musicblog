import Song from "@/app/models/song";
import connectMongoDB from "@/app/utils/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { country } = params

    await connectMongoDB()
    const songs = await Song.find({ country: country});
    return NextResponse.json({ songs }, { status: 200 })
}
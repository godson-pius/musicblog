import Song from "@/app/models/song"
import connectMongoDB from "@/app/utils/mongodb"
import { NextResponse } from "next/server"

/**
 * Used to create a new song
 * @param {*} request 
 * @returns NextResponse
 */
export async function POST(request) {
    const body = await request.json()

    await connectMongoDB()
    await Song.create(body)
    return NextResponse.json({ message: "Song created" }, { status: 201 })
}

// /**
//  * Used to get all the songs
//  * @returns NextResponse
//  */
// export async function GET() {
//     const songs = await Song.find();
//     return NextResponse.json({ songs }, { status: 200 })
// }

/**
 * Used to get all the songs & single song
 * @param {id?} request 
 * @returns NextResponse
 */
export async function GET(request) {
    const id = request.nextUrl.searchParams.get('id')

    await connectMongoDB()

    if (id == null) {
        const songs = await Song.find();
        return NextResponse.json({ songs }, { status: 200 })
    }

    const song = await Song.findById(id);
    return NextResponse.json({ song }, { status: 200 })
}

/**
 * Used to update a song
 * @param {id} request 
 * @returns NextResponse
 */
export async function PUT(request) {
    const body = await request.json()
    const id = request.nextUrl.searchParams.get('id')

    await connectMongoDB()
    await Song.findByIdAndUpdate(id, body, { new: true })
    return NextResponse.json({ message: "Song Updated" }, { status: 200 })
}

/**
 * Used to delete a song
 * @param {id} request 
 * @returns NextResponse
 */
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id')

    await connectMongoDB()
    await Song.findByIdAndDelete(id)
    return NextResponse.json({ message: "Song deleted" }, { status: 200 })
}
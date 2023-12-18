import connectDatabase from '../../../../libs/mongodb'
import Coins from '../../../../models/coins'
import { NextResponse } from 'next/server'

export interface iCoin {
  _id: string
  name: string
  target: number
}

export async function GET() {
  try {
    await connectDatabase()
    const coins = await Coins.find()
    return NextResponse.json({coins}, {status:200})
  } catch (error) {
    return NextResponse.json({message:"Error", error}, {status:500})
  }
}

export async function POST(request:any) {
  try {
    const {name, target} = await request.json()
    await connectDatabase()
    await Coins.create({name, target})
    return NextResponse.json({message:"Coin added"}, {status:201})
  } catch (error) {
    return NextResponse.json({message:"Error", error}, {status:500})
  }
}

export async function DELETE(request:any) {
  try {
    const id = request.nextUrl.searchParams.get("id")
    await connectDatabase()
    await Coins.findByIdAndDelete(id)
    return NextResponse.json({message:"Coin deleted"}, {status:200})
  } catch (error) {
    return NextResponse.json({message:"Error", error}, {status:500})
  }
}
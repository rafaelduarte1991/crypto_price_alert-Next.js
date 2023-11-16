import connectDatabase from '../../../../libs/mongodb'
import Coins from '../../../../models/coins'
import { NextResponse } from 'next/server'

export interface iCoin {
  _id: string
  name: string
  target: number
}

export async function GET() {
  await connectDatabase()
  const coins = await Coins.find()
  return NextResponse.json({coins})
}

export async function POST(request:any) {
  const {name, target} = await request.json()
  await connectDatabase()
  await Coins.create({name, target})
  return NextResponse.json({message:"Coin added"}, {status:201})
}

// export async function PUT(request:any) {
//   const { _id, name, target } = await request.json()
//   await connectDatabase()
//   await Coins.findByIdAndUpdate(_id, {name, target})
//   return NextResponse.json({message:"Coin updated"}, {status:200})
// }

export async function DELETE(request:any) {
  const id = request.nextUrl.searchParams.get("id")
  await connectDatabase()
  await Coins.findByIdAndDelete(id)
  return NextResponse.json({message:"Coin deleted"}, {status:200})
}


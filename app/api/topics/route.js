import connectMongodb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongodb();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic created" }, { status: 201 });
}

export async function GET() {
  await connectMongodb();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}
export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongodb();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Topic is removed from the list" },
    { status: 200 }
  );
}

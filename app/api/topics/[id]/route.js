import connectMongodb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await req.json();
  await connectMongodb();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic is updated" }, { status: 200 });
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongodb();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}

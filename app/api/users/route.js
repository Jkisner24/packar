import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function POST(req, res) {
  try {
    const { username, email } = await req.json();
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
      }
    });
    return NextResponse.json(newUser);
  } catch (error) {
    console.error("Error creating a new user:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

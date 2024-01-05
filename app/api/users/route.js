import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const users = await prisma.user.findMany({
      include:{
        createdTrips: true,
        takenTrips: true,
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function POST(req, res) {
  try {
    const { username, email, password } = await req.json();
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingUser) {
      return NextResponse.json({ message: 'The mail is already registered' });
    }

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password
      }
    });
    return NextResponse.json(newUser);
  } catch (error) {
    console.error("Error creating a new user:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
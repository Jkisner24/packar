import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function PUT(req, { params }) {
  try {
    const data = await req.json();
    const userUpdated = await prisma.user.update({
      where: {
        id: Number(params.id),
      },
      data: data,
    });
    return NextResponse.json(userUpdated);
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function DELETE(req, { params }) {
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const trip = await prisma.trip.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(trip);
  } catch (error) {
    console.error("Error fetching trips:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
export async function PUT(req, { params }) {
  try {
    const data = await req.json();
    const tripUpdated = await prisma.trip.update({
      where: {
        id: Number(params.id),
      },
      data: data,
    });

    return NextResponse.json(tripUpdated);
  } catch (error) {
    console.error("Error fetching trips:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function DELETE(req, { params }) {
  try {
    const trips = await prisma.trip.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(trips);
  } catch (error) {
    console.error("Error fetching trips:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

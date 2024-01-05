import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const trips = await prisma.trip.findMany({
      include: {
        createdBy: true,  
        takenBy: true,    
      },
    });
    return NextResponse.json(trips);
  } catch (error) {
    console.error("Error fetching trips:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function POST(req, res) {
    try {
        const { title, description, status, createdBy, origin, destination } = await req.json();
        const newTrip = await prisma.trip.create({
          data: {
            title,
            description,
            status,
            createdBy: {
              connect: { id: createdBy.id } 
            },
            origin,
            destination
          }
        });
        return NextResponse.json(newTrip);
    } catch (error) {
    console.error("Error creating a new trip:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
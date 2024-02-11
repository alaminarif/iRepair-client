import { NextResponse } from "next/server";

const services = [
  {
    _id: "65c0e608e07664ca0ab64c46",
    name: "Screen Replacement",
    description: "Replace broken screens",
    devices: ["Smartphone", "Laptop", "Tablet"],
    price: 100,
  },
  {
    _id: "65c104a926db1259e537cf76",
    name: "Battery Replacement",
    description: "Replace weak Battery",
    devices: ["Smartphone", "Laptop", "Tablet"],
    price: 200,
  },
  {
    _id: "65c104c826db1259e537cf78",
    name: "Motherboard Replacement",
    description: "Replace damaged Motherboard",
    devices: ["Smartphone", "Laptop", "Tablet"],
    price: 200,
  },
];

export async function GET(request: Request) {
  return NextResponse.json({ success: "true", data: services });
}

export async function POST(request: Request) {
  return NextResponse.json({ success: "true", data: services });
}

export async function PUT(request: Request) {
  return NextResponse.json({ success: "true", data: services });
}


import { PrismaClient } from "@prisma/client";
import { NextRequest,NextResponse } from "next/server";
import client from "@/db";


export async function POST(request: NextRequest) {
    // console.log({ name, email, message });
    const body = await request.json();
    try{
        await client.user.create({
            data: {
                name: body.name,
                email: body.email,
                message: body.message,
            },
        });
        return NextResponse.json({ message: "Thank you for contacting us! We'll get back to you soon." });
    }
    catch(e){

       return NextResponse.json({ message: "Error" },{
            status: 500,
        });
    }

}
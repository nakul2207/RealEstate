"use server"

import client from "@/db";


export async function contact(name: string, email: string, message: string) {
    // console.log({ name, email, message });
    try{
        await client.user.create({
            data: {
                name: name,
                email:email,
                message: message,
            },
        });
        return true;
    }
    catch(e){

       return false;
    }

}
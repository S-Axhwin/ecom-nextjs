import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
// import { NextResponse } from 'next/server'

export async function middleware (request: NextRequest) {
    const {isAuthenticated, getUser} = getKindeServerSession();
    // const {picture} = await getUser() as any;
    // console.log(picture);

    const isUserAuthenticated = await isAuthenticated();
    console.log("here you go middleware", isUserAuthenticated);

    if (isUserAuthenticated){
        console.log("Authed");
        return NextResponse.next();
    }
    else {
        console.log("not Authed");
        return ;
    }
}



export const config = {
    matcher: ['/welcome', '/products'],
}

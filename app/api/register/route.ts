import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const GET = async () => {
    const {getUser} = getKindeServerSession();
    const {email} = await getUser() as any;
    console.log(await getUser());

    redirect("/welcome");
}

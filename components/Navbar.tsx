import { getKindeServerSession, LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const userRoute = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/products",
        name: "Products"
    },
    {
        path: "/cart",
        name: "Cart"
    },

]

const Navbar = async () => {

  const {isAuthenticated} = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if(!isUserAuthenticated) {
    return (
        <div className="flex justify-end relative h-10 w-full z-10 bg-black">
        <nav className="flex list-none gap-3 fixed px-6 w-screen bg-black p-3">
            <li>
                <Link href={"/"} className="capitalize" >Home</Link>
            </li>
            <LoginLink postLoginRedirectURL={"/"}>Sign in</LoginLink>
            <RegisterLink postLoginRedirectURL={"/api/register"}>Sign up</RegisterLink>
        </nav>
        </div>
    )
  }
  return (
    <div className="flex justify-end relative h-10 w-full z-10 bg-black ">
        <nav className="flex list-none gap-3 fixed px-6 w-screen bg-black p-3">
        <LogoutLink>Logout</LogoutLink>
        </nav>
    </div>
  )
}

export default Navbar

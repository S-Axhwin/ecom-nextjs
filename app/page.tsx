/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hEulC3mNPFM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

import {MenuIcon, Timer} from "lucide-react"

export default function Component() {
  return (
    <section className="w-full relative overflow-hidden">
      <img src="https://www.bhmpics.com/downloads/alien-computer/50.dell-alienware-e1595026515296.jpg" alt="Hero Image" className="w-full h-[80vh] object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center mt-20 md:justify-center text-center px-4 md:px-6 lg:px-8">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Discover the Latest PC Spec
          </h1>
          <p className="text-lg text-white md:text-xl lg:text-2xl">
            Explore our curated pre-build PC of stylish and affordable apparel for every SetUp.
          </p>
          <Link
            href="/products"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring z-10"

          >
            Shop Now
          </Link>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4 md:px-6 lg:px-8">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Timer className="w-20 h-20"/>
            <h3 className="text-lg font-semibold">Speed</h3>
            <p className="text-muted-foreground text-sm">Discover the latest fashion trends in clothing.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <FootprintsIcon className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold">Footwear</h3>
            <p className="text-muted-foreground text-sm">Find the perfect shoes to complete your look.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <AccessibilityIcon className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold">Accessories</h3>
            <p className="text-muted-foreground text-sm">Explore our collection of stylish accessories.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function AccessibilityIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  )
}


function FootprintsIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </svg>
  )
}


function ShirtIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}

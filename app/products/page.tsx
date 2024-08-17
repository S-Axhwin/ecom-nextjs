/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9fsJRTB6be7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import CardComp from "./Card"
import {ImageCard, ImageCard2} from "./ImageCard"



export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh bg[#021526] no-scrollbar border-b-2">
      <header className="bg-black px-4 md:px-6 py-8 md:py-12 lg:py-16 no-scrollbar border-b-2">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 no-scrollbar">
          <h1 className="text-3xl md:text-5xl font-bold text-purple-500 justify-self-start">
            POWERFULLY PREBUILT
          </h1>
          <p className="text-primary/50 text-lg md:text-xl text-left">
            Explore our vast collection of the latest and greatest films and TV shows.
          </p>

        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Featured</h2>
              <Link href="#" className="text-sm md:text-base font-medium text-primary hover:underline" prefetch={false}>
                See all
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {[...Array(10)].map((_, i) => (
                <CardComp key={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="">
            <ImageCard img={"https://nzxt.com/assets/cms/34299/1693555803-player-two-prime_black_cyan-accent_gamingbundle-082323.png?ar64=MTox&auto=format&dpr=2&fit=max&h=464&w=464"}/>
            <ImageCard2 img={"https://nzxt.com/assets/cms/34299/1677913547-prebuilt-category-latest-components-primary.png?auto=format&dpr=2&fit=max&h=900&w=672"}/>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Popular</h2>
              <Link href="#" className="text-sm md:text-base font-medium text-primary hover:underline" prefetch={false}>
                See all
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="group relative rounded-lg overflow-hidden">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt="Movie Thumbnail"
                    width="200"
                    height="300"
                    className="w-full h-auto object-cover group-hover:opacity-80 transition-opacity"
                    style={{ aspectRatio: "200/300", objectFit: "cover" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-lg md:text-xl font-bold text-primary-foreground line-clamp-2">
                      Movie Title {i + 1}
                    </h3>
                    <div className="flex items-center gap-2 text-primary-foreground/80">
                      <StarIcon className="w-4 h-4" />
                      <span>8.5</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">New Releases</h2>
              <Link href="#" className="text-sm md:text-base font-medium text-primary hover:underline" prefetch={false}>
                See all
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="group relative rounded-lg overflow-hidden">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt="Movie Thumbnail"
                    width="200"
                    height="300"
                    className="w-full h-auto object-cover group-hover:opacity-80 transition-opacity"
                    style={{ aspectRatio: "200/300", objectFit: "cover" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-lg md:text-xl font-bold text-primary-foreground line-clamp-2">
                      Movie Title {i + 1}
                    </h3>
                    <div className="flex items-center gap-2 text-primary-foreground/80">
                      <StarIcon className="w-4 h-4" />
                      <span>8.5</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Trending</h2>
              <Link href="#" className="text-sm md:text-base font-medium text-primary hover:underline" prefetch={false}>
                See all
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="group relative rounded-lg overflow-hidden">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt="Movie Thumbnail"
                    width="200"
                    height="300"
                    className="w-full h-auto object-cover group-hover:opacity-80 transition-opacity"
                    style={{ aspectRatio: "200/300", objectFit: "cover" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-lg md:text-xl font-bold text-primary-foreground line-clamp-2">
                      Movie Title {i + 1}
                    </h3>
                    <div className="flex items-center gap-2 text-primary-foreground/80">
                      <StarIcon className="w-4 h-4" />
                      <span>8.5</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">User Reviews</h2>
              <Link href="#" className="text-sm md:text-base font-medium text-primary hover:underline" prefetch={false}>
                See all
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="w-10 h-10 border">
                      <AvatarImage src="/placeholder-user.jpg" alt={`User ${i + 1}`} />
                      <AvatarFallback>U{i + 1}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">User {i + 1}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <StarIcon className="w-4 h-4" />
                        <span>4.5</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacus, nisl
                    nec ultricies lacus, nisl nec ultricies lacus.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 md:py-8">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <MountainIcon className="w-6 h-6" />
            <span className="font-bold text-lg">Streamify</span>
          </div>
          <nav className="flex items-center gap-4 md:gap-6">
            <Link href="#" className="text-sm md:text-base hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm md:text-base hover:underline" prefetch={false}>
              Movies
            </Link>
            <Link href="#" className="text-sm md:text-base hover:underline" prefetch={false}>
              Series
            </Link>
            <Link href="#" className="text-sm md:text-base hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm md:text-base hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(props:any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SearchIcon(props:any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function StarIcon(props:any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/io0TNhvb66y
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export  function ImageCard({img}:any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Explore the Beauty of Nature</h2>
        <p className="text-muted-foreground">
          Immerse yourself in the breathtaking landscapes of our national parks. From towering mountains to serene
          forests, discover the wonders of the natural world and reconnect with the great outdoors.
        </p>
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Plan Your Adventure
        </Link>
      </div>
      <img
        src={img}
        alt="Breathtaking nature landscape"
        width={800}
        height={600}
        className="rounded-xl object-cover aspect-[4/3]"
      />
    </div>
  )
}
export  function ImageCard2({img}:any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto py-12 px-4 md:px-6">
           <img
        src={img}
        alt="Breathtaking nature landscape"
        width={800}
        height={600}
        className="rounded-xl object-cover aspect-[4/3]"
      />
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Explore the Beauty of Nature</h2>
        <p className="text-muted-foreground">
          Immerse yourself in the breathtaking landscapes of our national parks. From towering mountains to serene
          forests, discover the wonders of the natural world and reconnect with the great outdoors.
        </p>
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Plan Your Adventure
        </Link>
      </div>

    </div>
  )
}

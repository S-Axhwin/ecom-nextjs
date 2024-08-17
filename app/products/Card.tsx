import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function CardComp() {
  return (
    <Card className="bg-black text-white p-4 max-w-md">
      <div className="relative">
        <Badge variant="secondary" className="absolute top-2 left-2">
          Best Seller<Star className="size-3 mx-1" fill="white"/>
        </Badge>
        <img
          src="https://nzxt.com/assets/cms/34299/1712131826-player-two-base-ww-03-22-24-hero-white-badge.png?ar64=MTox&auto=format&dpr=2&fit=crop&h=400&w=400"
          alt="Gaming PC"
          className="w-full h-auto"
          width="400"
          height="300"
          style={{ aspectRatio: "400/300", objectFit: "cover" }}
        />

      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">PC Name</h2>
        <p className="text-muted-foreground text-sm hidden lg:block">H5 Flow Gaming PC with RTX 3050 or RTX 4060 GPU</p>
      </div>
      <div className="mt-4 border-t-2">
        <h3 className="text-md font-bold">Key Specs</h3>
        <ul className="text-xs">
          <li>Windows 11 Home</li>
          <li>Intel® Core™ i5-13400F</li>
          ...
        </ul>
      </div>
      <div className="mt-4 text-2xl font-bold border-t-2 text-center py-2">₹82900.00</div>
      <Button className="mt-4 w-full bg-purple-500 hover:bg-purple-800 text-white">Shop</Button>
    </Card>
  )
}


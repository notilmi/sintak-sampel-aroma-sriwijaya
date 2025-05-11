import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {/* Featured Product 1 */}
      <Card className="bg-amber-800 border-amber-700 overflow-hidden">
        <div className="relative h-48">
          <Image src="/images/sumatra-mandheling-alt.png" alt="Sumatra Mandheling" fill className="object-cover" />
          <Badge className="absolute top-2 right-2 bg-amber-900">Arabica</Badge>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-white">Sumatra Mandheling</CardTitle>
          <CardDescription className="text-amber-200">Aceh, North Sumatra</CardDescription>
        </CardHeader>
        <CardContent className="text-amber-100">
          <p>Bold, earthy, and full-bodied with notes of dark chocolate, cedar, and a subtle spice finish.</p>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full border-amber-200 text-white hover:bg-amber-700">
            <Link href="/products">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      {/* Featured Product 2 */}
      <Card className="bg-amber-800 border-amber-700 overflow-hidden">
        <div className="relative h-48">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Toraja Kalosi"
            fill
            className="object-cover bg-amber-700"
          />
          <Badge className="absolute top-2 right-2 bg-amber-900">Arabica</Badge>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-white">Toraja Kalosi</CardTitle>
          <CardDescription className="text-amber-200">South Sulawesi</CardDescription>
        </CardHeader>
        <CardContent className="text-amber-100">
          <p>Complex and well-balanced with notes of dark chocolate, spices, and a clean, syrupy body.</p>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full border-amber-200 text-white hover:bg-amber-700">
            <Link href="/products">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      {/* Featured Product 3 */}
      <Card className="bg-amber-800 border-amber-700 overflow-hidden">
        <div className="relative h-48">
          <Image src="/images/java-robusta-alt.png" alt="Java Robusta" fill className="object-cover" />
          <Badge className="absolute top-2 right-2 bg-amber-900">Robusta</Badge>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-white">Java Robusta</CardTitle>
          <CardDescription className="text-amber-200">East Java</CardDescription>
        </CardHeader>
        <CardContent className="text-amber-100">
          <p>Strong and bold with woody notes, a hint of dark chocolate, and a smooth, lingering finish.</p>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full border-amber-200 text-white hover:bg-amber-700">
            <Link href="/products">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

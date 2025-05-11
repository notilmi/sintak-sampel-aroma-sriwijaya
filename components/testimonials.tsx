import { Quote } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {/* Testimonial 1 */}
      <Card>
        <CardHeader>
          <Quote className="h-8 w-8 text-amber-800 opacity-50" />
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            "Aroma Sriwijaya has been our trusted supplier for Sumatra Mandheling for over three years. Their consistent
            quality and reliable shipping have made them an invaluable partner for our roastery."
          </p>
        </CardContent>
        <CardFooter className="flex items-center gap-4 pt-4 border-t">
          <Avatar>
            <AvatarImage src="/images/testimonial-1.jpg" alt="Client" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">James Donovan</p>
            <p className="text-sm text-gray-500">Altitude Roasters, USA</p>
          </div>
        </CardFooter>
      </Card>

      {/* Testimonial 2 */}
      <Card>
        <CardHeader>
          <Quote className="h-8 w-8 text-amber-800 opacity-50" />
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            "The Toraja beans we source from Aroma Sriwijaya have become a customer favorite at our cafes. Their
            commitment to quality and sustainability aligns perfectly with our brand values."
          </p>
        </CardContent>
        <CardFooter className="flex items-center gap-4 pt-4 border-t">
          <Avatar>
            <AvatarImage src="/images/testimonial-2.jpg" alt="Client" />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Sophie Laurent</p>
            <p className="text-sm text-gray-500">Café Lumière, France</p>
          </div>
        </CardFooter>
      </Card>

      {/* Testimonial 3 */}
      <Card>
        <CardHeader>
          <Quote className="h-8 w-8 text-amber-800 opacity-50" />
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            "As a specialty coffee importer, we value partners who understand quality. Aroma Sriwijaya consistently
            delivers exceptional Indonesian beans with complete transparency about their sourcing practices."
          </p>
        </CardContent>
        <CardFooter className="flex items-center gap-4 pt-4 border-t">
          <Avatar>
            <AvatarImage src="/images/testimonial-3.jpg" alt="Client" />
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Marcus Kim</p>
            <p className="text-sm text-gray-500">Bean Voyagers, South Korea</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

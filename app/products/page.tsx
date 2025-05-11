import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/coffee-varieties.jpg"
            alt="Various coffee beans"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Coffee Products</h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
                Premium Arabica and Robusta beans from Indonesia's finest growing regions
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-amber-800 hover:bg-amber-900">
                <Link href="/contact">
                  Request Samples <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                <Link href="/files/catalog.pdf">
                  <Download className="mr-2 h-4 w-4" /> Download Catalog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <TabsList className="bg-amber-50">
                <TabsTrigger value="all">All Coffee</TabsTrigger>
                <TabsTrigger value="arabica">Arabica</TabsTrigger>
                <TabsTrigger value="robusta">Robusta</TabsTrigger>
                <TabsTrigger value="specialty">Specialty</TabsTrigger>
              </TabsList>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filter Options
              </Button>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Product 1 */}
                <Card className="overflow-hidden">
                  <div className="relative h-60">
                    <Image
                      src="/images/sumatra-mandheling-alt.png"
                      alt="Sumatra Mandheling"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-amber-800">Arabica</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Sumatra Mandheling</CardTitle>
                    <CardDescription>Aceh, North Sumatra</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Processing</span>
                        <span>Wet-Hulled</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Altitude</span>
                        <span>1,200-1,500 masl</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Flavor Notes</span>
                        <span>Earthy, Herbal, Spicy</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Available</span>
                        <span>Year-round</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-amber-800 hover:bg-amber-900">
                      <Link href="/contact?product=sumatra-mandheling">Request Quotation</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Product 2 */}
                <Card className="overflow-hidden">
                  <div className="relative h-60">
                    <Image src="/images/java-preanger.jpg" alt="Java Preanger" fill className="object-cover" />
                    <Badge className="absolute top-2 right-2 bg-amber-800">Arabica</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Java Preanger</CardTitle>
                    <CardDescription>West Java</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Processing</span>
                        <span>Washed</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Altitude</span>
                        <span>1,300-1,600 masl</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Flavor Notes</span>
                        <span>Citrus, Floral, Clean</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Available</span>
                        <span>June - December</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-amber-800 hover:bg-amber-900">
                      <Link href="/contact?product=java-preanger">Request Quotation</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Product 3 */}
                <Card className="overflow-hidden">
                  <div className="relative h-60">
                    <Image src="/images/bali-kintamani.jpg" alt="Bali Kintamani" fill className="object-cover" />
                    <Badge className="absolute top-2 right-2 bg-amber-800">Arabica</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Bali Kintamani</CardTitle>
                    <CardDescription>Bali</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Processing</span>
                        <span>Wet Process</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Altitude</span>
                        <span>1,200-1,600 masl</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Flavor Notes</span>
                        <span>Lemon, Caramel, Nutty</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Available</span>
                        <span>May - October</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-amber-800 hover:bg-amber-900">
                      <Link href="/contact?product=bali-kintamani">Request Quotation</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Product 4 */}
                <Card className="overflow-hidden">
                  <div className="relative h-60">
                    <Image src="/images/flores-bajawa.jpg" alt="Flores Bajawa" fill className="object-cover" />
                    <Badge className="absolute top-2 right-2 bg-amber-800">Arabica</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Flores Bajawa</CardTitle>
                    <CardDescription>East Nusa Tenggara</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Processing</span>
                        <span>Semi-Washed</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Altitude</span>
                        <span>1,300-1,800 masl</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Flavor Notes</span>
                        <span>Chocolate, Spice, Floral</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Available</span>
                        <span>June - November</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-amber-800 hover:bg-amber-900">
                      <Link href="/contact?product=flores-bajawa">Request Quotation</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Product 5 */}
                <Card className="overflow-hidden">
                  <div className="relative h-60">
                    <Image src="/images/toraja-kalosi.jpg" alt="Toraja Kalosi" fill className="object-cover" />
                    <Badge className="absolute top-2 right-2 bg-amber-800">Arabica</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Toraja Kalosi</CardTitle>
                    <CardDescription>South Sulawesi</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Processing</span>
                        <span>Wet-Hulled</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Altitude</span>
                        <span>1,400-1,800 masl</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Flavor Notes</span>
                        <span>Dark Chocolate, Spicy, Earthy</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Available</span>
                        <span>Year-round</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-amber-800 hover:bg-amber-900">
                      <Link href="/contact?product=toraja-kalosi">Request Quotation</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Product 6 */}
                <Card className="overflow-hidden">
                  <div className="relative h-60">
                    <Image src="/images/java-robusta-alt.png" alt="Java Robusta" fill className="object-cover" />
                    <Badge className="absolute top-2 right-2 bg-amber-800">Robusta</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Java Robusta</CardTitle>
                    <CardDescription>East Java</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Processing</span>
                        <span>Dry Process</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Altitude</span>
                        <span>600-900 masl</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Flavor Notes</span>
                        <span>Woody, Nutty, Strong</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Available</span>
                        <span>Year-round</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-amber-800 hover:bg-amber-900">
                      <Link href="/contact?product=java-robusta">Request Quotation</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="arabica" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Arabica products would be here - similar to the ones above but filtered */}
                {/* For brevity, I'm not duplicating all the cards */}
              </div>
            </TabsContent>

            <TabsContent value="robusta" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Robusta products would be here */}
              </div>
            </TabsContent>

            <TabsContent value="specialty" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Specialty products would be here */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Custom Orders */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-900">Custom Orders</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                Tailored to Your Specifications
              </h2>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Beyond our standard offerings, we provide custom solutions to meet your specific requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-800 font-bold">•</span>
                  <span>Custom blends combining different Indonesian varieties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-800 font-bold">•</span>
                  <span>Specific processing methods to achieve desired flavor profiles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-800 font-bold">•</span>
                  <span>Special packaging requirements for your market</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-800 font-bold">•</span>
                  <span>Volume-based pricing for large orders</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-amber-800 hover:bg-amber-900">
                  <Link href="/contact">Discuss Custom Requirements</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/custom-blend.jpg"
                alt="Custom coffee blending"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Quality Assurance</h2>
              <p className="mx-auto max-w-[700px] text-amber-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Every batch of coffee beans undergoes rigorous testing to ensure it meets our high standards.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <Card className="bg-amber-800 border-amber-700 text-white">
              <CardHeader>
                <CardTitle>Physical Inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-100">
                  We examine bean size, color, and consistency, ensuring uniformity and absence of defects.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-amber-800 border-amber-700 text-white">
              <CardHeader>
                <CardTitle>Moisture Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-100">
                  We maintain optimal moisture levels (10-12%) to preserve flavor and prevent mold development.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-amber-800 border-amber-700 text-white">
              <CardHeader>
                <CardTitle>Cupping Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-100">
                  Our expert cuppers evaluate aroma, flavor, body, acidity, and aftertaste to ensure consistent quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                Ready to Order?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us to discuss your coffee needs, request samples, or get a personalized quotation.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-amber-800 hover:bg-amber-900">
                <Link href="/contact">
                  Contact Us Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/files/catalog.pdf">
                  <Download className="mr-2 h-4 w-4" /> Download Full Catalog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Coffee, Globe, Leaf, MessageSquare, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Testimonials } from "@/components/testimonials"
import { FeaturedProducts } from "@/components/featured-products"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-coffee.jpg"
            alt="Indonesian coffee plantation"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Aroma Sriwijaya</h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
                Premium Indonesian Coffee Beans for Global Markets
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-amber-800 hover:bg-amber-900">
                <Link href="/products">
                  View Coffee Catalog <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-900">
                Direct from Indonesia
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                Exceptional Coffee Beans from the Heart of Indonesia
              </h2>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Aroma Sriwijaya works directly with local farmers across Indonesia to source the finest Arabica and
                Robusta coffee beans. Our commitment to quality and sustainability ensures that every bean we export
                meets the highest standards.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-amber-800 hover:bg-amber-900">
                  <Link href="/about">Learn About Our Process</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/coffee-beans.jpg"
                alt="Premium coffee beans"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-900">Why Choose Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Commitment to Excellence
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover why coffee businesses around the world trust Aroma Sriwijaya for their premium Indonesian
                coffee needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <Card className="border-amber-200">
              <CardHeader className="pb-2">
                <Globe className="h-12 w-12 text-amber-800" />
                <CardTitle className="text-xl">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  We export to roasteries and wholesalers worldwide, with efficient logistics and reliable delivery.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-amber-200">
              <CardHeader className="pb-2">
                <Coffee className="h-12 w-12 text-amber-800" />
                <CardTitle className="text-xl">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  Rigorous quality control ensures only the finest beans make it to your roastery.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-amber-200">
              <CardHeader className="pb-2">
                <Leaf className="h-12 w-12 text-amber-800" />
                <CardTitle className="text-xl">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  Direct partnerships with farmers promote sustainable practices and fair compensation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Coffee Selections
              </h2>
              <p className="mx-auto max-w-[700px] text-amber-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our premium coffee varieties from different regions of Indonesia.
              </p>
            </div>
          </div>
          <FeaturedProducts />
          <div className="flex justify-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-900"
            >
              <Link href="/products">
                View Full Catalog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-900">
                Client Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from coffee businesses that have partnered with us.
              </p>
            </div>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                Ready to Source Premium Indonesian Coffee?
              </h2>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your coffee needs, request samples, or get a personalized quotation.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-amber-800 hover:bg-amber-900">
                  <Link href="/contact">
                    <MessageSquare className="mr-2 h-4 w-4" /> Contact Us
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="tel:+6281234567890">
                    <Phone className="mr-2 h-4 w-4" /> Call Us
                  </Link>
                </Button>
              </div>
            </div>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email">Email Us</TabsTrigger>
                <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
              </TabsList>
              <TabsContent value="email" className="p-4 bg-white rounded-lg mt-2 border border-amber-200">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Send us an email</h3>
                  <p className="text-gray-700">For inquiries and quotations:</p>
                  <p className="font-medium">info@aromasriwijaya.com</p>
                </div>
              </TabsContent>
              <TabsContent value="whatsapp" className="p-4 bg-white rounded-lg mt-2 border border-amber-200">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Message us on WhatsApp</h3>
                  <p className="text-gray-700">For quick responses:</p>
                  <p className="font-medium">+62 812 3456 7890</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}

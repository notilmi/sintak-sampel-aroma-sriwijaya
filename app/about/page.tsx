import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Coffee, Leaf, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/coffee-farm.jpg"
            alt="Indonesian coffee farm"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Aroma Sriwijaya</h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
                Our journey from Indonesian farms to global coffee cups
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-900">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                From Local Farms to Global Markets
              </h2>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Aroma Sriwijaya was founded with a vision to showcase Indonesia's exceptional coffee to the world. What
                began as a small operation has grown into a trusted exporter of premium Arabica and Robusta beans.
              </p>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our name pays homage to the ancient Sriwijaya kingdom that once flourished in Sumatra, known for its
                trade networks and cultural exchange – much like our mission to connect Indonesian coffee farmers with
                global markets.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/coffee-processing.jpg"
                alt="Coffee processing"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-900">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Drives Us</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our core values shape everything we do at Aroma Sriwijaya.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <Card className="border-amber-200">
              <CardHeader className="pb-2">
                <Coffee className="h-12 w-12 text-amber-800" />
                <CardTitle className="text-xl">Quality Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  We are uncompromising in our commitment to quality, from bean selection to export.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-amber-200">
              <CardHeader className="pb-2">
                <Users className="h-12 w-12 text-amber-800" />
                <CardTitle className="text-xl">Farmer Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  We build lasting relationships with farmers, ensuring fair compensation and sustainable practices.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-amber-200">
              <CardHeader className="pb-2">
                <Leaf className="h-12 w-12 text-amber-800" />
                <CardTitle className="text-xl">Environmental Stewardship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  We promote sustainable farming methods that protect Indonesia's rich biodiversity.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-900">Our Process</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">From Farm to Export</h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our meticulous process ensures only the finest beans reach your roastery.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-8 mt-12">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900 md:mt-1">
                1
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Careful Selection</h3>
                <p className="text-gray-700">
                  We work with selected farmers across Indonesia's diverse growing regions, choosing those who
                  demonstrate exceptional care in cultivation.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900 md:mt-1">
                2
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Harvesting & Processing</h3>
                <p className="text-gray-700">
                  We oversee the harvesting process to ensure only ripe cherries are picked. Depending on the region and
                  variety, we employ wet, dry, or honey processing methods.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900 md:mt-1">
                3
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Quality Control</h3>
                <p className="text-gray-700">
                  Our expert team conducts rigorous quality control, including visual inspection, moisture content
                  testing, and cupping to assess flavor profiles.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900 md:mt-1">
                4
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Packaging & Export</h3>
                <p className="text-gray-700">
                  Beans are carefully packaged in high-quality, moisture-resistant bags to preserve freshness. We handle
                  all export documentation and logistics to ensure smooth delivery to your facility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-800 px-3 py-1 text-sm">Sustainability</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Commitment to Sustainable Practices
              </h2>
              <p className="max-w-[600px] text-amber-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Aroma Sriwijaya, sustainability isn't just a buzzword—it's integral to our business model and future.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-amber-300 mt-0.5" />
                  <span>Supporting shade-grown coffee cultivation to preserve forest ecosystems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-amber-300 mt-0.5" />
                  <span>Promoting water conservation and natural processing methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-amber-300 mt-0.5" />
                  <span>Investing in farmer education on sustainable agricultural practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-amber-300 mt-0.5" />
                  <span>Ensuring fair compensation that supports farming communities</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/sustainable-farming.jpg"
                alt="Sustainable coffee farming"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                Experience the Aroma Sriwijaya Difference
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to bring the finest Indonesian coffee beans to your customers?
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-amber-800 hover:bg-amber-900">
                <Link href="/products">
                  Explore Our Coffee <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

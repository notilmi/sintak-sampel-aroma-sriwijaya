"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
    toast({
      title: "Copied to clipboard",
      description: `${text} has been copied to your clipboard.`,
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Coffee beans in hands"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
                Get in touch with our team to discuss your coffee needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-900">Send Us a Message</h2>
                <p className="text-gray-700">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your company" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Your email" type="email" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Your phone number" type="tel" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="inquiry-type">Type of Inquiry</Label>
                  <RadioGroup defaultValue="quotation" className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem id="quotation" value="quotation" />
                      <Label htmlFor="quotation" className="font-normal">
                        Request a Quotation
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem id="samples" value="samples" />
                      <Label htmlFor="samples" className="font-normal">
                        Request Samples
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem id="partnership" value="partnership" />
                      <Label htmlFor="partnership" className="font-normal">
                        Partnership Inquiry
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem id="other" value="other" />
                      <Label htmlFor="other" className="font-normal">
                        Other
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="product">Product of Interest</Label>
                  <Select>
                    <SelectTrigger id="product">
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Multiple Products</SelectItem>
                      <SelectItem value="sumatra-mandheling">Sumatra Mandheling</SelectItem>
                      <SelectItem value="java-preanger">Java Preanger</SelectItem>
                      <SelectItem value="bali-kintamani">Bali Kintamani</SelectItem>
                      <SelectItem value="flores-bajawa">Flores Bajawa</SelectItem>
                      <SelectItem value="toraja-kalosi">Toraja Kalosi</SelectItem>
                      <SelectItem value="java-robusta">Java Robusta</SelectItem>
                      <SelectItem value="custom">Custom Blend/Order</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="volume">Estimated Volume (kg)</Label>
                  <Select>
                    <SelectTrigger id="volume">
                      <SelectValue placeholder="Select volume range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Less than 100 kg (Samples)</SelectItem>
                      <SelectItem value="medium">100 - 500 kg</SelectItem>
                      <SelectItem value="large">500 - 1,000 kg</SelectItem>
                      <SelectItem value="xlarge">1,000 - 5,000 kg</SelectItem>
                      <SelectItem value="xxlarge">More than 5,000 kg</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your requirements"
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-amber-800 hover:bg-amber-900">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-900">Contact Information</h2>
                <p className="text-gray-700">You can also reach us directly using the following contact details.</p>
              </div>
              <div className="grid gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-amber-800" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <CardDescription className="text-base">info@aromasriwijaya.com</CardDescription>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => copyToClipboard("info@aromasriwijaya.com", "email")}
                      >
                        {copied === "email" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        <span className="sr-only">Copy email</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-amber-800" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <CardDescription className="text-base">+62 812 3456 7890</CardDescription>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => copyToClipboard("+62 812 3456 7890", "phone")}
                      >
                        {copied === "phone" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        <span className="sr-only">Copy phone number</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-amber-800" />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Jl. Sriwijaya No. 123, Palembang, South Sumatra, Indonesia 30139
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="rounded-lg overflow-hidden border h-[300px] mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772082225!2d104.6455542!3d-2.9764687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75e8fc27a3e3%3A0x3039d80b220d0c0!2sPalembang%2C%20Palembang%20City%2C%20South%20Sumatra!5e0!3m2!1sen!2sid!4v1651234567890!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-amber-900">Business Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <div>Monday - Friday</div>
                  <div>8:00 AM - 5:00 PM (GMT+7)</div>
                  <div>Saturday</div>
                  <div>9:00 AM - 2:00 PM (GMT+7)</div>
                  <div>Sunday</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our coffee export process.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>What is the minimum order quantity?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our standard minimum order quantity is 60kg (1 bag) for most varieties. For specialty or limited
                  harvest coffees, minimum orders may vary. We also offer sample packs for evaluation before larger
                  orders.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How do you ensure quality during shipping?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We use industry-standard GrainPro bags inside jute sacks to maintain freshness during transit. Our
                  logistics partners are experienced in coffee transportation, ensuring proper handling and temperature
                  control.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We accept wire transfers, letters of credit (L/C), and other standard international payment methods.
                  Payment terms are typically 50% upon order confirmation and 50% before shipping.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How long does shipping take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Shipping times vary by destination. Typically, orders take 2-4 weeks to arrive after shipping. We
                  provide tracking information and work with reliable freight forwarders to ensure timely delivery.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you provide certifications?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes, we provide all necessary export documentation including phytosanitary certificates, certificates
                  of origin, and quality certificates. Some of our coffees also carry organic or Rainforest Alliance
                  certifications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I visit your facilities?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We welcome visits from potential and existing clients. We can arrange tours of our processing
                  facilities and even visits to partner farms. Please contact us in advance to schedule.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

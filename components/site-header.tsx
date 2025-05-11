"use client"

import { useState } from "react"
import Link from "next/link"
import { Coffee, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-4">
          <Coffee className="h-6 w-6 text-amber-800" />
          <span className="font-bold text-xl hidden sm:inline-block">Aroma Sriwijaya</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="text-sm font-medium transition-colors hover:text-amber-800">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-amber-800">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-sm font-medium transition-colors hover:text-amber-800">
                Coffee Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm font-medium transition-colors hover:text-amber-800">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <Button asChild variant="outline">
            <Link href="/contact">Request a Quote</Link>
          </Button>
          <Button asChild className="bg-amber-800 hover:bg-amber-900">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b pb-4">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Coffee className="h-6 w-6 text-amber-800" />
                  <span className="font-bold">Aroma Sriwijaya</span>
                </Link>
                <Button variant="outline" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex-1 py-8">
                <ul className="grid gap-6">
                  <li>
                    <Link
                      href="/"
                      className="text-lg font-medium transition-colors hover:text-amber-800"
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-lg font-medium transition-colors hover:text-amber-800"
                      onClick={() => setIsOpen(false)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="text-lg font-medium transition-colors hover:text-amber-800"
                      onClick={() => setIsOpen(false)}
                    >
                      Coffee Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-lg font-medium transition-colors hover:text-amber-800"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="border-t pt-4">
                <div className="grid gap-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Request a Quote
                    </Link>
                  </Button>
                  <Button asChild className="w-full bg-amber-800 hover:bg-amber-900">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

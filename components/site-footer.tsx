import Link from "next/link"
import { Coffee, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container px-4 py-12 md:py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Coffee className="h-6 w-6" />
              <span className="font-bold text-xl">Aroma Sriwijaya</span>
            </Link>
            <p className="text-amber-100">
              Premium Indonesian coffee beans exported directly from farmers to global markets.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-amber-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-amber-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-amber-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-amber-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="grid gap-2">
              <li>
                <Link href="/" className="hover:text-amber-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-300">
                  Coffee Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Coffee Products</h3>
            <ul className="grid gap-2">
              <li>
                <Link href="/products" className="hover:text-amber-300">
                  Arabica Varieties
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-300">
                  Robusta Varieties
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-300">
                  Specialty Coffee
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300">
                  Custom Orders
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Us</h3>
            <ul className="grid gap-2">
              <li>Jl. Sriwijaya No. 123, Palembang, South Sumatra, Indonesia 30139</li>
              <li>
                <Link href="mailto:info@aromasriwijaya.com" className="hover:text-amber-300">
                  info@aromasriwijaya.com
                </Link>
              </li>
              <li>
                <Link href="tel:+6281234567890" className="hover:text-amber-300">
                  +62 812 3456 7890
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-amber-800 pt-8 text-center text-amber-200">
          <p>© {new Date().getFullYear()} Aroma Sriwijaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

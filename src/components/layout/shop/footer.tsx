import Link from "next/link";
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-innogem-blue text-white py-12">
      <div className="container flex justify-center mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Innogem</h3>
          <p className="text-sm text-gray-400 mb-4">
            We are a specialty interior design firm located in Portland. Our
            boutique studio offers more than just design expertise.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="#" className="hover:text-white">
                Bonus program
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Gift cards
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Credit and payment
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Service contracts
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Merchant account
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Payment
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Assistance to the buyer</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="#" className="hover:text-white">
                Find an order
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Terms of delivery
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Exchange and return of goods
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Guarantee
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Frequently asked questions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Terms of use of the site
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

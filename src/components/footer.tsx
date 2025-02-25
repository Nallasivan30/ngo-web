import type React from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-2xl font-bold">
              NGO Logo
            </Link>
            <p className="text-gray-400 text-base">Making a difference in the world, one step at a time.</p>
            <div className="flex space-x-6">
              <SocialLink href="#" icon={<Facebook />} label="Facebook" />
              <SocialLink href="#" icon={<Twitter />} label="Twitter" />
              <SocialLink href="#" icon={<Instagram />} label="Instagram" />
              <SocialLink href="#" icon={<Linkedin />} label="LinkedIn" />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">About</h3>
                <ul className="mt-4 space-y-4">
                  <FooterLink href="/about">Our Story</FooterLink>
                  <FooterLink href="/team">Our Team</FooterLink>
                  <FooterLink href="/partners">Partners</FooterLink>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Projects</h3>
                <ul className="mt-4 space-y-4">
                  <FooterLink href="/projects/education">Education</FooterLink>
                  <FooterLink href="/projects/healthcare">Healthcare</FooterLink>
                  <FooterLink href="/projects/environment">Environment</FooterLink>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Get Involved</h3>
                <ul className="mt-4 space-y-4">
                  <FooterLink href="/volunteer">Volunteer</FooterLink>
                  <FooterLink href="/donate">Donate</FooterLink>
                  <FooterLink href="/events">Events</FooterLink>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-4">
                  <FooterLink href="/contact">Contact Us</FooterLink>
                  <FooterLink href="/newsletter">Newsletter</FooterLink>
                  <FooterLink href="/faq">FAQ</FooterLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} NGO Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a href={href} className="text-gray-400 hover:text-gray-300 transition duration-150 ease-in-out">
    {icon}
    <span className="sr-only">{label}</span>
  </a>
)

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-base text-gray-400 hover:text-white transition duration-150 ease-in-out">
      {children}
    </Link>
  </li>
)

export default Footer


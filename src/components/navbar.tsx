"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Programs",
    href: "#",
    dropdown: true,
    items: [
      { name: "VYLP (Vriksham Youth Leadership Program)", href: "/programs/vylp" },
      { name: "Vidiyal Learning Center", href: "/programs/vidiyal" },
      { name: "Project Vishwa", href: "/programs/vishwa" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
  }

  const handleDonateClick = () => {
    router.push("/donate")
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex ml-11 items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[50px] h-[20px] bg-whit gap-4 flex items-center justify-center"
            >
              <Image src="/tarunya.png" alt="" width={50} height={20} />
              <div className="flex flex-col gap-0">
                <h3 className="font-bold text-[16px]">TARUNYA</h3>
                <span className="font-bold text-[14px]">FOUNDATION</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center"
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5 z-50"
                        >
                          <div className="py-1">
                            {item.items?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground"
                                onClick={closeDropdowns}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            >
              <Button className="ml-4 button-ripple" onClick={handleDonateClick}>
                Donate Now
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 + 0.1 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item, i) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <motion.button
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        onClick={() => handleDropdownToggle(item.name)}
                        className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                        />
                      </motion.button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-6"
                          >
                            {item.items?.map((subItem, j) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: j * 0.05 }}
                              >
                                <Link
                                  href={subItem.href}
                                  className="block px-3 py-2 rounded-md text-sm text-foreground hover:text-primary transition-colors"
                                  onClick={() => {
                                    closeDropdowns()
                                    setIsOpen(false)
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                className="pt-2"
              >
                <Button className="w-full button-ripple" onClick={handleDonateClick}>
                  Donate Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar


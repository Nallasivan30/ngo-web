"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Loading } from "@/components/loading"
import { Filter } from "lucide-react"
import RootLayout from "@/components/layout"

// Gallery data - in a real application, this would come from a CMS or API
const galleryItems = [
  {
    id: 1,
    title: "Career Reading Program",
    category: "outreach",
    image: "/other/career-reading.jpeg",
    date: "June 2023",
  },
  {
    id: 2,
    title: "College Workshop",
    category: "outreach",
    image: "/other/College-Workshops.jpg",
    date: "March 2023",
  },
  {
    id: 3,
    title: "Mid camp of VYLP Cohort 2",
    category: "programs",
    image: "/vylp/vc2.jpg",
    date: "April 2023",
  },
  {
    id: 4,
    title: "Orientation Camp VYLP Cohort 3 meet with Alumini",
    category: "programs",
    image: "/vylp/vc23.jpg",
    date: "December 2022",
  },
  {
    id: 5,
    title: "VLC outdoor visit",
    category: "programs",
    image: "/vlc/vlcapj.jpg",
    date: "May 2023",
  },
  {
    id: 6,
    title: "VLC kid Art",
    category: "programs",
    image: "/vlc/vlcart.jpeg",
    date: "July 2023",
  },
  {
    id: 7,
    title: "VLC kids Innovatives",
    category: "programs",
    image: "/vlc/vlcc.jpg",
    date: "February 2023",
  },
  {
    id: 8,
    title: "Women's Empowerment Workshop",
    category: "outreach",
    image: "/other/others3.jpg",
    date: "March 2023",
  },
  {
    id: 9,
    title: "Health Camp",
    category: "outreach",
    image: "/other/others2.jpg",
    date: "April 2023",
  },
  {
    id: 10,
    title: "VLC gift showcasing",
    category: "programs",
    image: "/vlc/vlcgft.jpg",
    date: "January 2023",
  },
  {
    id: 11,
    title: "VLC Community Art Project",
    category: "programs",
    image: "/vlc/vlcinvt.jpg",
    date: "February 2023",
  },
  {
    id: 12,
    title: "Awareness on Citizenshhip Training",
    category: "team",
    image: "/Individuals/Anukathir-Surya.jpeg",
    date: "March 2023",
  },
  {
    id: 13,
    title: "Community Art Project",
    category: "team",
    image: "/Individuals/Kannaki-Ponnuselvan.jpg",
    date: "August 2023",
  },
  {
    id: 14,
    title: "Digital Literacy Program",
    category: "team",
    image: "/Individuals/Nivedita-Arumugam.jpg",
    date: "September 2023",
  },
  {
    id: 15,
    title: "Self development Training",
    category: "team",
    image: "/Individuals/Praveena-Gandhi.jpeg",
    date: "October 2023",
  },
  {
    id: 16,
    title: "VLC Office Session",
    category: "programs",
    image: "/vlc/vlcssn.jpg",
    date: "November 2023",
  },
  {
    id: 17,
    title: "Child Protection Training",
    category: "team",
    image: "/Individuals/Vignesh-Baskaran.jpeg",
    date: "July 2023",
  },
  {
    id: 18,
    title: "Manimuthar Dam Visit",
    category: "programs",
    image: "/vylp/manimuthar.jpg",
    date: "August 2023",
  },
]

// Categories for filtering
const categories = [
  { value: "all", label: "All Photos" },
  { value: "programs", label: "Programs" },
  { value: "outreach", label: "Outreach" },
  { value: "team", label: "Our Team" },
]

export default function GalleryPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredItems, setFilteredItems] = useState(galleryItems)
  const [showFilters, setShowFilters] = useState(false)

  // For infinite scroll simulation
  const [visibleItems, setVisibleItems] = useState(8)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Filter gallery items based on category
  useEffect(() => {
    let filtered = galleryItems

    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    setFilteredItems(filtered)
  }, [selectedCategory])

  // Intersection observer for infinite scroll
  useEffect(() => {
    if (!loadMoreRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleItems < filteredItems.length) {
          // Add more items when the user scrolls to the bottom
          setTimeout(() => {
            setVisibleItems((prev) => Math.min(prev + 4, filteredItems.length))
          }, 300)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(loadMoreRef.current)

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current)
      }
    }
  }, [filteredItems.length, visibleItems])

  // Reset visible items when filters change
  useEffect(() => {
    setVisibleItems(8)
  }, [selectedCategory])

  if (isLoading) return <Loading />

  return (
    <RootLayout>
    <div className="overflow-hidden">
      <HeroSection />

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Bar */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="hidden md:flex items-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                    className="whitespace-nowrap"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>

              <Button variant="outline" size="icon" className="md:hidden" onClick={() => setShowFilters(!showFilters)}>
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6 md:hidden overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 py-2 justify-center">
                  {categories.map((category) => (
                    <Button
                      key={category.value}
                      variant={selectedCategory === category.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        setSelectedCategory(category.value)
                        setShowFilters(false)
                      }}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Gallery Results Info */}
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              Showing {Math.min(visibleItems, filteredItems.length)} of {filteredItems.length} photos
            </p>
          </div>

          {/* Gallery Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.slice(0, visibleItems).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="overflow-hidden h-full border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                        <p className="text-white/80 text-sm">{item.date}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-2">No Photos Found</h3>
                <p className="text-muted-foreground mb-6">We couldn&apos;t find any photos in this category.</p>
                <Button onClick={() => setSelectedCategory("all")}>View All Photos</Button>
              </motion.div>
            </div>
          )}

          {/* Load More Indicator */}
          {visibleItems < filteredItems.length && (
            <div ref={loadMoreRef} className="flex justify-center items-center py-10 mt-6">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </section>
    </div>
    </RootLayout>
  )
}

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/Community-Library.jpg" alt="Gallery background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Our Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Explore moments from our programs, events, and community impact through these visual stories.
          </motion.p>
        </div>

        {/* Floating image grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden md:block"
        >
          <div className="relative h-[300px] mt-8">
            {/* Floating images */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute left-[10%] top-[10%] w-40 h-60 rounded-lg overflow-hidden shadow-xl"
            >
              <Image src="/vlc/vlcplr.jpg" alt="Gallery preview" fill className="object-cover" />
            </motion.div>

            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute left-[30%] top-[5%] w-48 h-40 rounded-lg overflow-hidden shadow-xl"
            >
              <Image src="/vylp/vc2.jpg" alt="Gallery preview" fill className="object-cover" />
            </motion.div>

            <motion.div
              initial={{ y: 15 }}
              animate={{ y: -5 }}
              transition={{
                duration: 3.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute right-[30%] top-[15%] w-36 h-48 rounded-lg overflow-hidden shadow-xl"
            >
              <Image src="/slide/5.jpg" alt="Gallery preview" fill className="object-cover" />
            </motion.div>

            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="absolute right-[10%] top-[5%] w-44 h-52 rounded-lg overflow-hidden shadow-xl"
            >
              <Image src="/other/others3.jpg" alt="Gallery preview" fill className="object-cover" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


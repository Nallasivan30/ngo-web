"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import RootLayout from "@/components/layout"

export default function Projects() {
  return (
    <RootLayout>
      <div className="min-h-screen bg-ngo-dark text-ngo-light">
      <HeroSection />
      <ProjectsGrid />
    </div>
    </RootLayout>
  )
}

const HeroSection = () => (
  <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 z-0"
    >
      <Image
        src="hero.jpeg"
        alt="Projects hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </motion.div>
    <div className="relative z-10 text-center">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-shadow"
      >
        Our Projects
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl text-shadow"
      >
        Making a difference through action
      </motion.p>
    </div>
  </section>
)

const ProjectsGrid = () => {
  const projects = [
    {
      title: "Clean Water Initiative",
      category: "Environment",
      image: "/youth.jpeg",
      description: "Providing clean water to communities in need.",
    },
    {
      title: "Education for All",
      category: "Education",
      image: "/youth.jpeg",
      description: "Ensuring access to quality education for underprivileged children.",
    },
    {
      title: "Healthcare Outreach",
      category: "Healthcare",
      image: "/youth.jpeg",
      description: "Bringing medical care to remote areas.",
    },
    {
      title: "Sustainable Agriculture",
      category: "Environment",
      image: "/youth.jpeg",
      description: "Promoting eco-friendly farming practices.",
    },
    {
      title: "Women Empowerment",
      category: "Social",
      image: "/youth.jpeg",
      description: "Supporting women through education and entrepreneurship.",
    },
    {
      title: "Youth Leadership",
      category: "Education",
      image: "/youth.jpeg",
      description: "Developing future leaders through mentorship and training.",
    },
  ]

  return (
    <section className="py-20 bg-ngo-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm font-semibold text-ngo-accent">{project.category}</span>
                <h3 className="text-xl font-bold mb-2 text-ngo-dark">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button className="bg-ngo-accent hover:bg-ngo-accent-dark text-ngo-dark font-bold">Learn More</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


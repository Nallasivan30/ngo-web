"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedCard } from "@/components/animated-card"
import { Loading } from "@/components/loading"
import { ArrowRight, Leaf, Droplets, Sun, Users } from "lucide-react"
import RootLayout from "@/components/layout"

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) return <Loading />

  return (
    <RootLayout>
      <div className="overflow-hidden">
      <HeroSection />
      <ProjectsSection />
      <FeaturedProjectSection />
      <ImpactSection />
      <GetInvolvedSection />
    </div>
    </RootLayout>
  )
}

const HeroSection = () => (
  <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
    <div className="absolute inset-0 z-0">
      <Image src="/placeholder.svg" alt="Projects hero background" fill className="object-cover opacity-20" priority />
    </div>
    <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Our Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl max-w-2xl mx-auto"
      >
        Discover how we're making a difference through innovative and sustainable initiatives
      </motion.p>
    </div>
  </section>
)

const ProjectsSection = () => {
  const categories = [
    { value: "all", label: "All Projects" },
    { value: "reforestation", label: "Reforestation" },
    { value: "water", label: "Clean Water" },
    { value: "energy", label: "Renewable Energy" },
    { value: "education", label: "Education" },
  ]

  const projects = [
    {
      title: "Amazon Reforestation",
      category: "reforestation",
      description: "Restoring degraded forest areas in the Amazon rainforest.",
      image: "/placeholder.svg",
      icon: <Leaf className="h-5 w-5" />,
    },
    {
      title: "Clean Water for Ghana",
      category: "water",
      description: "Providing clean water solutions to rural communities in Ghana.",
      image: "/placeholder.svg",
      icon: <Droplets className="h-5 w-5" />,
    },
    {
      title: "Solar for Schools",
      category: "energy",
      description: "Installing solar panels in schools across developing countries.",
      image: "/placeholder.svg",
      icon: <Sun className="h-5 w-5" />,
    },
    {
      title: "Environmental Education",
      category: "education",
      description: "Teaching sustainable practices to schools and communities.",
      image: "/placeholder.svg",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Mangrove Restoration",
      category: "reforestation",
      description: "Restoring mangrove ecosystems in coastal areas.",
      image: "/placeholder.svg",
      icon: <Leaf className="h-5 w-5" />,
    },
    {
      title: "Clean Water Technology",
      category: "water",
      description: "Developing innovative water purification technologies.",
      image: "/placeholder.svg",
      icon: <Droplets className="h-5 w-5" />,
    },
    {
      title: "Wind Energy Initiative",
      category: "energy",
      description: "Implementing wind energy solutions in rural communities.",
      image: "/placeholder.svg",
      icon: <Sun className="h-5 w-5" />,
    },
    {
      title: "Youth Environmental Leaders",
      category: "education",
      description: "Training the next generation of environmental advocates.",
      image: "/placeholder.svg",
      icon: <Users className="h-5 w-5" />,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Explore Our <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Browse our initiatives by category or view all of our ongoing projects.
          </motion.p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.value} value={category.value} className="m-1">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {projects
                  .filter((project) => category.value === "all" || project.category === category.value)
                  .map((project, index) => (
                    <AnimatedCard
                      key={project.title}
                      delay={index * 0.1}
                      className="h-full"
                      header={
                        <div className="relative h-48 overflow-hidden rounded-t-lg">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-110"
                          />
                          <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-2 rounded-full">
                            {project.icon}
                          </div>
                        </div>
                      }
                      content={
                        <div>
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-muted-foreground mb-4">{project.description}</p>
                          <Button variant="outline" className="button-ripple">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      }
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

const FeaturedProjectSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-lg overflow-hidden"
        >
          <Image src="/placeholder.svg" alt="Featured project" fill className="object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Featured Project
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Great Green Wall Initiative</h2>
          <p className="text-muted-foreground mb-4">
            The Great Green Wall is an African-led movement with an epic ambition to grow an 8,000km natural wonder of
            the world across the entire width of Africa. A decade in and roughly 15% complete, the initiative is already
            bringing life back to Africa's degraded landscapes at an unprecedented scale.
          </p>
          <p className="text-muted-foreground mb-6">
            Once complete, the Great Green Wall will be the largest living structure on the planet, 3 times the size of
            the Great Barrier Reef. EcoImpact is proud to be a partner in this transformative project, contributing to
            reforestation efforts and community engagement.
          </p>
          <Button className="button-ripple">
            Learn More About This Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
)

const ImpactSection = () => {
  const impacts = [
    { number: "10M+", label: "Trees Planted", icon: <Leaf className="h-8 w-8 text-primary" /> },
    { number: "500+", label: "Communities Served", icon: <Users className="h-8 w-8 text-primary" /> },
    { number: "100+", label: "Clean Water Projects", icon: <Droplets className="h-8 w-8 text-primary" /> },
    { number: "50+", label: "Solar Installations", icon: <Sun className="h-8 w-8 text-primary" /> },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className="text-primary">Impact</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Through our projects and initiatives, we've made a significant impact on communities and the environment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                {impact.icon}
              </div>
              <motion.h3
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-2 text-primary"
              >
                {impact.number}
              </motion.h3>
              <p className="text-muted-foreground">{impact.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const GetInvolvedSection = () => (
  <section className="py-20 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Get Involved
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-8"
      >
        There are many ways to support our projects and make a difference. Whether you want to volunteer, donate, or
        partner with us, your contribution matters.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button className="bg-white text-primary hover:bg-gray-100 button-ripple">Donate Now</Button>
        <Button variant="outline" className="text-white border-white hover:bg-white/10 button-ripple">
          Volunteer
        </Button>
        <Button variant="outline" className="text-white border-white hover:bg-white/10 button-ripple">
          Partner With Us
        </Button>
      </motion.div>
    </div>
  </section>
)


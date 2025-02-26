"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel } from "@/components/Carousel"
import { Loading } from "@/components/loading"
import RootLayout from "@/components/layout"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) return <Loading />

  return (
    <RootLayout>
      <div className="min-h-screen bg-background">
      <HeroSection />
      <MissionSection />
      <ProjectsSection />
      <ImpactSection />
      <CallToActionSection />
    </div>
    </RootLayout>
  )
}

const HeroSection = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start((i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.3, duration: 0.8 },
    }))
  }, [controls])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-primary-foreground rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">NGO</span>
          </div>
        </motion.div>
        <motion.h1
          custom={0}
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          className="text-5xl md:text-7xl font-bold mb-4 text-primary-foreground"
        >
          Change the World
        </motion.h1>
        <motion.p
          custom={1}
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          className="text-xl md:text-2xl mb-8 text-primary-foreground"
        >
          Join us in making a difference, one step at a time.
        </motion.p>
        <motion.div custom={2} initial={{ y: 50, opacity: 0 }} animate={controls}>
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground button-ripple"
          >
            Get Involved
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

const MissionSection = () => (
  <section className="py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-4">Our Mission</h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          We strive to create a world where everyone has access to education, healthcare, and a clean environment.
        </p>
      </motion.div>
    </div>
  </section>
)

const ProjectsSection = () => {
  const projects = [
    { title: "Education", description: "Providing quality education to underprivileged children." },
    { title: "Healthcare", description: "Ensuring access to healthcare in remote areas." },
    { title: "Environment", description: "Protecting and preserving our natural resources." },
    { title: "Social Justice", description: "Advocating for equality and human rights." },
    { title: "Community Development", description: "Building stronger, more resilient communities." },
  ]

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-secondary-foreground sm:text-4xl mb-12 text-center">
          Our Projects
        </h2>
        <Carousel
          items={projects.map((project, index) => (
            <Card key={project.title} className="mx-auto max-w-sm">
              <CardHeader>
                <Image
                  src="/wmn.jpeg"
                  alt={`${project.title} project`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
                <Button variant="outline" className="mt-4 button-ripple">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        />
      </div>
    </section>
  )
}

const ImpactSection = () => {
  const impacts = [
    { number: "10M+", label: "Lives Impacted" },
    { number: "50+", label: "Countries Reached" },
    { number: "100+", label: "Ongoing Projects" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-12 text-center">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map(({ number, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.h3
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-2 text-primary"
              >
                {number}
              </motion.h3>
              <p className="text-xl text-muted-foreground">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CallToActionSection = () => (
  <section className="py-20 bg-primary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-extrabold sm:text-4xl mb-8">Ready to Make a Difference?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join us in our mission to create a better world. Every contribution, big or small, can make a lasting impact.
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-background hover:text-foreground button-ripple"
          >
            Donate Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary button-ripple"
          >
            Volunteer
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
)


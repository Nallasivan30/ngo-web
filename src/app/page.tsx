"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Carousel } from "@/components/carousels"
import { AnimatedCard } from "@/components/animated-card"
import { ParallaxSection } from "@/components/parallax-section"
import { Loading } from "@/components/loading"
import { ArrowRight, Globe, Users, Heart, Leaf, Droplets, Sun } from "lucide-react"
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
          <div className="overflow-hidden">
          <HeroSection />
          <MissionSection />
          <ImpactSection />
          <ProjectsSection />
          <TestimonialsSection />
          <PartnersSection />
          <CallToActionSection />
        </div>
    </RootLayout>
  )
}

const HeroSection = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image src="/placeholder.svg" alt="Hero background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-4">
            Empowering Communities, Protecting Our Planet
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Creating a <span className="text-primary">Sustainable Future</span>
          <br />
          For Generations to Come
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200"
        >
          Join us in our mission to protect the environment, empower communities, and create lasting positive change
          around the world.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="button-ripple">
            Get Involved
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black button-ripple"
          >
            Learn More
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
          <ArrowRight className="h-10 w-10 text-white rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  )
}

const MissionSection = () => {
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
            Our <span className="text-primary">Mission</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We are dedicated to creating sustainable solutions for environmental challenges and empowering communities
            worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCard
            delay={0.1}
            header={
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Environmental Protection</CardTitle>
              </div>
            }
            content={
              <p className="text-center text-muted-foreground">
                We work to protect and restore ecosystems, combat climate change, and promote biodiversity conservation.
              </p>
            }
          />
          <AnimatedCard
            delay={0.2}
            header={
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Community Empowerment</CardTitle>
              </div>
            }
            content={
              <p className="text-center text-muted-foreground">
                We empower local communities through education, training, and sustainable development initiatives.
              </p>
            }
          />
          <AnimatedCard
            delay={0.3}
            header={
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Advocacy & Awareness</CardTitle>
              </div>
            }
            content={
              <p className="text-center text-muted-foreground">
                We advocate for environmental policies and raise awareness about pressing ecological issues.
              </p>
            }
          />
        </div>
      </div>
    </section>
  )
}

const ImpactSection = () => {
  return (
    <section className="py-20 bg-secondary">
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
            Through our programs and initiatives, we've made a significant impact on communities and the environment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "10M+", label: "Trees Planted", icon: <Leaf className="h-8 w-8 text-primary" /> },
            { number: "500+", label: "Communities Served", icon: <Users className="h-8 w-8 text-primary" /> },
            { number: "100+", label: "Clean Water Projects", icon: <Droplets className="h-8 w-8 text-primary" /> },
            { number: "50+", label: "Solar Installations", icon: <Sun className="h-8 w-8 text-primary" /> },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <motion.h3
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-2 text-primary"
              >
                {item.number}
              </motion.h3>
              <p className="text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectsSection = () => {
  const projects = [
    {
      title: "Reforestation Initiative",
      description: "Restoring forests and biodiversity in degraded areas.",
      image: "/placeholder.svg",
    },
    {
      title: "Clean Water Access",
      description: "Providing clean water solutions to communities in need.",
      image: "/placeholder.svg",
    },
    {
      title: "Renewable Energy",
      description: "Implementing solar and wind energy projects in rural areas.",
      image: "/placeholder.svg",
    },
    {
      title: "Environmental Education",
      description: "Teaching sustainable practices to schools and communities.",
      image: "/placeholder.svg",
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
            Our <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our ongoing projects and initiatives making a difference around the world.
          </motion.p>
        </div>

        <div className="grid-masonry">
          {projects.map((project, index) => (
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
                </div>
              }
              content={
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button variant="outline" className="button-ripple">
                    Learn More
                  </Button>
                </div>
              }
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="button-ripple">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "The work EcoImpact is doing has transformed our community. We now have clean water and sustainable farming practices.",
      author: "Maria Rodriguez",
      role: "Community Leader",
      image: "/placeholder.svg",
    },
    {
      quote:
        "I've volunteered with EcoImpact for three years, and I'm amazed by the dedication and impact of their programs.",
      author: "John Smith",
      role: "Volunteer",
      image: "/placeholder.svg",
    },
    {
      quote:
        "As a corporate partner, we've seen firsthand how EcoImpact creates sustainable solutions that benefit both people and the planet.",
      author: "Sarah Johnson",
      role: "Corporate Partner",
      image: "/placeholder.svg",
    },
  ]

  return (
    <ParallaxSection bgImage="/placeholder.svg" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What People <span className="text-primary">Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            Hear from the communities, volunteers, and partners we work with.
          </motion.p>
        </div>

        <Carousel
          items={testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <Card className="bg-background/10 backdrop-blur-md border-none glass text-white max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        />
      </div>
    </ParallaxSection>
  )
}

const PartnersSection = () => {
  const partners = Array(8).fill("/placeholder.svg")

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
            Our <span className="text-primary">Partners</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We collaborate with organizations that share our vision for a sustainable future.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="relative w-32 h-32 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={partner || "/placeholder.svg"}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Join Us in Making a Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg mb-8"
          >
            Whether you want to volunteer, donate, or partner with us, there are many ways to support our mission and
            create positive change.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 button-ripple">
              Donate Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 button-ripple">
              Volunteer
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


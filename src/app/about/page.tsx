"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ParallaxSection } from "@/components/parallax-section"
import { AnimatedCard } from "@/components/animated-card"
import { Loading } from "@/components/loading"
import RootLayout from "@/components/layout"

export default function About() {
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
        <OurStorySection />
        <MissionVisionSection />
        <TeamSection />
        <ValuesSection />
        <JoinUsSection />
      </div>
    </RootLayout>
  )
}

const HeroSection = () => (
  <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
    <div className="absolute inset-0 z-0">
      <Image src="/scss.jpg" alt="About hero background" fill className="object-cover opacity-70" priority />
    </div>
    <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        About Tarunya Foundation
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl max-w-2xl mx-auto"
      >
        Empowering communities through education, healthcare, and sustainable development
      </motion.p>
    </div>
  </section>
)

const OurStorySection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2010, Tarunya Foundation began with a mission to uplift underprivileged communities, particularly women and children, through education, healthcare, and sustainable development programs. What started as a small initiative has now grown into a significant force for change, impacting thousands of lives across India.
          </p>
          <p className="text-muted-foreground mb-4">
            Our journey has been one of resilience, innovation, and impact. We have established schools, healthcare centers, and vocational training programs that have transformed communities and provided opportunities for a brighter future.
          </p>
          <p className="text-muted-foreground">
            Through partnerships with local communities, governments, and other organizations, we have been able to scale our impact and create lasting change. Our work continues to evolve as we address the most pressing challenges faced by underprivileged communities.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-lg overflow-hidden"
        >
          <Image src="/mlt.jpg" alt="Our story" fill className="object-cover" />
        </motion.div>
      </div>
    </div>
  </section>
)

const MissionVisionSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <AnimatedCard
          delay={0.1}
          content={
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">M</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower underprivileged communities, particularly women and children, through education, healthcare, and sustainable development programs, creating opportunities for a brighter future.
              </p>
            </div>
          }
        />
        <AnimatedCard
          delay={0.3}
          content={
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">V</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where every individual has access to education, healthcare, and opportunities to thrive, regardless of their socio-economic background.
              </p>
            </div>
          }
        />
      </div>
    </div>
  </section>
)

const TeamSection = () => {
  const team = [
    {
      name: "Anita Sharma",
      role: "Executive Director",
      bio: "Anita has over 15 years of experience in social work and nonprofit leadership.",
      image: "/spcs.jpg",
    },
    {
      name: "Rajesh Kumar",
      role: "Operations Director",
      bio: "Rajesh brings a wealth of experience in project management and community development.",
      image: "/spcs.jpg",
    },
    {
      name: "Priya Mehta",
      role: "Program Manager",
      bio: "Priya specializes in education and has led numerous successful initiatives.",
      image: "/spcs.jpg",
    },
    {
      name: "Suresh Patel",
      role: "Healthcare Coordinator",
      bio: "Suresh's expertise guides our healthcare programs and initiatives.",
      image: "/spcs.jpg",
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
            Our <span className="text-primary">Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Meet the dedicated professionals working to make our mission a reality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <AnimatedCard
              key={member.name}
              delay={index * 0.1}
              className="h-full"
              content={
                <div className="text-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const ValuesSection = () => {
  const values = [
    {
      title: "Empowerment",
      description: "We believe in empowering individuals to take control of their lives and futures.",
    },
    { title: "Integrity", description: "We uphold the highest ethical standards in all our actions and decisions." },
    { title: "Innovation", description: "We constantly seek new and better ways to address social challenges." },
    {
      title: "Collaboration",
      description: "We believe in the power of partnerships to create lasting positive change.",
    },
    { title: "Inclusivity", description: "We value diversity and ensure all voices are heard and respected." },
    { title: "Accountability", description: "We take responsibility for our actions and their impact on the community." },
  ]

  return (
    <ParallaxSection bgImage="/values-bg.jpg" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className="text-primary">Values</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            The principles that guide our work and decision-making.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background/10 backdrop-blur-md border-none glass text-white h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  )
}

const JoinUsSection = () => (
  <section className="py-20 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Join Our Team
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-8"
      >
        We&apos;re always looking for passionate individuals to join our mission. Check out our current openings or volunteer opportunities.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button className="bg-white text-primary hover:bg-gray-100 button-ripple">View Openings</Button>
        <Button variant="outline" className="text-primary border-white hover:bg-white/10 button-ripple">
          Volunteer With Us
        </Button>
      </motion.div>
    </div>
  </section>
)
"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, } from "@/components/ui/card"
import { Carousel } from "@/components/carousels"
import { AnimatedCard } from "@/components/animated-card"
import { ParallaxSection } from "@/components/parallax-section"
import { Loading } from "@/components/loading"
import { ArrowRight, Book, Heart, Users, Briefcase, Award } from "lucide-react"
import RootLayout from "@/components/layout"
import Link from "next/link"

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
      <OurWorkSection />
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
        <Image src="/yth.jpg" alt="Hero background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Empowering Lives,
          <br />
          Transforming Communities
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200"
        >
          Join us in our mission to create lasting change through education, health, livelihood, and women empowerment
          initiatives.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="button-ripple">
            <Link href={"/donate"}>Donate Now</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-primary border-white hover:text-primary hover:bg-white/10 button-ripple">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

const MissionSection = () => {
  // Mission data array
  const missionData = [
    {
      icon: <Book className="h-8 w-8 text-primary" />,
      title: "Education",
      description: "Providing quality education and skill development opportunities to empower the youth.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Health",
      description: "Improving access to healthcare and promoting wellness in underserved communities.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Livelihood",
      description: "Creating sustainable livelihood opportunities to foster economic independence.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Women Empowerment",
      description: "Empowering women through education, skills training, and entrepreneurship support.",
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
            Our <span className="text-primary">Mission</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We are dedicated to empowering underprivileged communities through sustainable development initiatives.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {missionData.map((mission, index) => (
            <AnimatedCard
              key={mission.title}
              delay={0.1 * (index + 1)} // Delay increases for each card
              header={
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {mission.icon}
                  </div>
                  <h3 className="text-xl font-bold">{mission.title}</h3>
                </div>
              }
              content={<p className="text-center text-muted-foreground">{mission.description}</p>}
            />
          ))}
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
            Through our programs and initiatives, we&apos;ve made a significant impact on communities across India.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "50,000+", label: "Lives Impacted", icon: <Users className="h-8 w-8 text-primary" /> },
            { number: "100+", label: "Schools Supported", icon: <Book className="h-8 w-8 text-primary" /> },
            { number: "5,000+", label: "Women Empowered", icon: <Award className="h-8 w-8 text-primary" /> },
            { number: "20+", label: "Communities Served", icon: <Heart className="h-8 w-8 text-primary" /> },
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

const OurWorkSection = () => {
  const projects = [
    {
      title: "Vidiyal Learning Center",
      description: " Vidiyal Learning Centre nurtures the potential of rural children by addressing foundational gaps in education. Through activity-based learning, mentoring, and emotional support, the program creates a safe and joyful environment where children can thrive academically, socially, and emotionally, laying the groundwork for a brighter future",
      image: "/bkss.jpg",
    },
    {
      title: "Vriksham Youth Leadership Program",
      description: "Vriksham empowers rural youth with the socio-emotional skills, career readiness, and confidence they need to succeed. This one-year hybrid program equips participants with tools for holistic growth, enabling them to overcome systemic challenges, embrace leadership roles, and achieve their aspirations. ",
      image: "/health.jpeg",
    },
    {
      title: "Vishwas",
      description: "Project Vishwas champions the cause of child safety and protection through awareness and training on the POCSO Act. By educating children, parents, and communities in both rural and urban areas, the project fosters safe spaces and ensures that every child understands their rights, boundaries, and the importance of personal safety.",
      image: "/vrcnf.jpg"
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
            Our <span className="text-primary">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our ongoing projects and initiatives making a difference across communities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard
              key={project.title}
              delay={index * 0.1}
              className="h-full"
              header={
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
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
        "The Tarunya Foundation's education program has transformed my life. I'm now pursuing my dream of becoming a teacher.",
      author: "Priya S.",
      role: "Education Program Beneficiary",
      image: "/spcs.jpg",
    },
    {
      quote:
        "Thanks to the skill development initiative, I was able to start my own small business and support my family.",
      author: "Rajesh K.",
      role: "Livelihood Program Participant",
      image: "/spcs.jpg",
    },
    {
      quote: "The women's empowerment program gave me the confidence and skills to become a community leader.",
      author: "Lakshmi M.",
      role: "Women Empowerment Program Graduate",
      image: "/spcs.jpg",
    },
  ]

  return (
    <ParallaxSection bgImage="/bhyth.jpg" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Lives <span className="text-primary">Transformed</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            Hear from the individuals whose lives have been changed by our programs.
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
                        src={testimonial.image || "/cnff.jpg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-lg mb-4 italic">&quot;{testimonial.quote}&quot;</p>
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
  const partners = Array(4).fill("/glb.jpg")

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
            We collaborate with organizations that share our vision for empowering communities.
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
            <Button size="lg" variant="outline" className="text-primary border-white hover:bg-white/10 button-ripple">
              Volunteer
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


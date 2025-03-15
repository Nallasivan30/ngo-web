/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ParallaxSection } from "@/components/parallax-section"
import { YouTubeVideo } from "@/components/youtube-video"
import { PieChart } from "@/components/pie-chart"
import { Loading } from "@/components/loading"
import { Users, Book, Shield } from "lucide-react"
import RootLayout from "@/components/layout"
import Link from "next/link"

// Program data
const programsData = {
  vylp: {
    title: "VYLP (Vriksham Youth Leadership Program)",
    subtitle: "Empowering youth to become leaders of tomorrow",
    description:
      "The Vriksham Youth Leadership Program (VYLP) is designed to nurture leadership qualities in young individuals from underprivileged backgrounds. Through mentorship, skill development, and experiential learning, we empower youth to become change-makers in their communities.",
    image: "/vylp.jpg",
    icon: <Users className="h-8 w-8 text-primary" />,
    videoId: "T2naXIbHKa8", // Example YouTube video ID
    stats: [
      { label: "Youth Trained", value: 100 },
      { label: "Communities Reached", value: 10 },
      { label: "Projects Implemented", value: 10 },
      { label: "Mentors Engaged", value: 15 },
    ],
    chartData: [
      { label: "Leadership Training", value: 40, color: "#10b981" },
      { label: "Community Service", value: 30, color: "#059669" },
      { label: "Skill Development", value: 20, color: "#047857" },
      { label: "Mentorship", value: 10, color: "#065f46" },
    ],
    goals: [
      "Develop leadership skills in 500 youth by 2025",
      "Create a network of youth leaders across southern India",
      "Implement 50 youth-led community development projects",
      "Establish partnerships with 10 educational institutions",
    ],
    impact:
      "Our VYLP program has transformed the lives of thousands of young individuals who are now leading positive change in themselves. Many of our graduates have gone on to pursue higher education, start social enterprises, and become advocates for social justice.",
  },
  vidiyal: {
    title: "Vidiyal Learning Center",
    subtitle: "Providing quality education to underprivileged children",
    description:
      "The Vidiyal Learning Center focuses on providing quality education to underprivileged children who lack access to proper educational resources. Through our centers, we offer supplementary education, digital literacy, and life skills training to help children reach their full potential.",
    image: "/vylp.jpg",
    icon: <Book className="h-8 w-8 text-primary" />,
    videoId: "pC9MImqH0XE", // Example YouTube video ID
    stats: [
      { label: "Children Educated", value: 250 },
      { label: "Learning Centers", value: 5 },
      { label: "Teachers Trained", value: 15 },
      { label: "Communities Served", value: 10 },
    ],
    chartData: [
      { label: "Academic Support", value: 45, color: "#0ea5e9" },
      { label: "Digital Literacy", value: 25, color: "#0284c7" },
      { label: "Life Skills", value: 20, color: "#0369a1" },
      { label: "Arts & Culture", value: 10, color: "#075985" },
    ],
    goals: [
      "Establish 5+ Vidiyal Learning Centers across India by 2025",
      "Provide quality education to 500 underprivileged children",
      "Achieve 90% transition rate to higher education",
      "Develop innovative teaching methodologies for resource-constrained settings",
    ],
    impact:
      "The Vidiyal Learning Centers have significantly improved educational outcomes for underprivileged children. Our students have shown remarkable improvement in academic performance, with many going on to pursue higher education and secure better employment opportunities.",
  },
  vishwa: {
    title: "Project Vishwa",
    subtitle: "Empowering communities, protecting children",
    description:
      "Project Vishwa is our comprehensive community development initiative that focuses on child protection, women empowerment, and sustainable livelihoods. We work closely with communities to create safe environments for children and provide opportunities for families to improve their socio-economic status.",
    image: "/vylp.jpg",
    icon: <Shield className="h-8 w-8 text-primary" />,
    videoId: "1kUE0BZtTRc", // Example YouTube video ID
    stats: [
      { label: "Children Protected", value: 15000 },
      { label: "Women Empowered", value: 7500 },
      { label: "Families Supported", value: 5000 },
      { label: "Villages Covered", value: 100 },
    ],
    chartData: [
      { label: "Child Protection", value: 40, color: "#fbbf24" },
      { label: "Women Empowerment", value: 30, color: "#f59e0b" },
      { label: "Livelihood Support", value: 20, color: "#d97706" },
      { label: "Health & Nutrition", value: 10, color: "#b45309" },
    ],
    goals: [
      "Create child-friendly communities in 200 villages",
      "Empower 15,000 women through skill development and entrepreneurship",
      "Establish sustainable livelihood opportunities for 10,000 families",
      "Reduce child vulnerability by 50% in target communities",
    ],
    impact:
      "Project Vishwa has created significant positive change in communities, with reduced child vulnerability, improved economic conditions for families, and empowered women taking leadership roles. Our holistic approach has led to sustainable development and resilient communities.",
  },
}

export default function ProgramPage() {
  const params = useParams()
  const slug = params?.slug as string
  const program = programsData[slug as keyof typeof programsData]

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) return <Loading />

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Program Not Found</h1>
          <p className="mb-6">The program you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Button asChild>
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <RootLayout>
    <div className="overflow-hidden">
      <HeroSection program={program} />
      <OverviewSection program={program} />
      <VideoSection program={program} />
      <ImpactSection program={program} />
      <GoalsSection program={program} />
      <GetInvolvedSection />
    </div>
    </RootLayout>
  )
}

const HeroSection = ({ program }: { program: any }) => (
  <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
    <div className="absolute inset-0 z-0">
        <Image
    src={program.image || "/placeholder.svg"}
    alt={program.title}
    fill
    className="object-cover object-[50%_30%] opacity-80"
    priority
    />

    </div>
    <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex justify-center"
      >
        <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
          {program.icon}
        </div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        {program.title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl max-w-2xl mx-auto"
      >
        {program.subtitle}
      </motion.p>
    </div>
  </section>
)

const OverviewSection = ({ program }: { program: any }) => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Program Overview</h2>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{program.description}</p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {program.stats.map((stat: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-secondary rounded-lg"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value.toLocaleString()}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <PieChart
            data={program.chartData}
            title={`${program.title} Program Distribution`}
            className="bg-secondary/50 p-6 rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  </section>
)

const VideoSection = ({ program }: { program: any }) => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          See Our <span className="text-primary">Impact</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          Watch how our {program.title} is making a difference in communities across India.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <YouTubeVideo videoId={program.videoId} title={`${program.title} Program Video`} className="shadow-xl" />
      </motion.div>
    </div>
  </section>
)

const ImpactSection = ({ program }: { program: any }) => (
  <ParallaxSection bgImage="/placeholder.svg" className="py-20 text-white">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Our <span className="text-primary">Impact</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl leading-relaxed"
        >
          {program.impact}
        </motion.p>
      </div>
    </div>
  </ParallaxSection>
)

const GoalsSection = ({ program }: { program: any }) => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Our <span className="text-primary">Goals</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          What we aim to achieve through our {program.title} program.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {program.goals.map((goal: string, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <p className="text-lg">{goal}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

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
        Join Us in Making a Difference
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-8 text-lg"
      >
        Together, we can create lasting change. Your support enables us to expand our programs and reach more
        communities in need.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button asChild className="bg-white text-primary hover:bg-gray-100 button-ripple">
          <Link href="/donate">Donate Now</Link>
        </Button>
        <Button asChild variant="outline" className="text-white border-white bg-transparent hover:bg-white/10 button-ripple">
          <Link href="#">Volunteer</Link>
        </Button>
      </motion.div>
    </div>
  </section>
)


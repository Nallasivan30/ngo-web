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
import { Carousel } from "@/components/carousels" // Make sure you have this component imported

// Program data
const programsData = {
  vylp: {
    title: "VYLP (Vriksham Youth Leadership Program)",
    subtitle: "Empowering youth to become leaders of tomorrow",
    description:
      "The Vriksham Youth Leadership Program (VYLP) is the flagship initiative of Tarunya Foundation, created to empower rural youth in Tamil Nadu with the skills, awareness, and confidence to build meaningful careers and lead fulfilling lives. Launched in 2022, the program addresses critical systemic challenges faced by rural college students, such as limited exposure, socio-economic barriers, and foundational educational gaps",
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
      "To create a non-judgeental,reliable, and progressive learning environment",
      "To build awareness about existing career opportunities and to support them build necessary skills and knowledge to pursue their dreams",
      "To forge effective habits and a learning mindset that would enable them to become self-reliant and make informed decisions in life",
      "To build the ability to reflect and be self-aware leading to enhanced relationship with self, family and others",
      "To cultivate a broader understanding of diverse perspectives and enhance their world view through exposure and awareness",
    ],
    impact:
      "Our VYLP program has transformed the lives of thousands of young individuals who are now leading positive change in themselves. Many of our graduates have gone on to pursue higher education, start social enterprises, and become advocates for social justice.",
    testimonials: [
      {
        quote: "VYLP has completely changed my perspective on leadership. I've gained the confidence to speak up and make a difference in my community.",
        author: "Priya S.",
        role: "VYLP Cohort 2 Graduate",
        image: "/Individuals/Aakash.jpeg",
      },
      {
        quote: "Before joining VYLP, I had no clear direction for my future. Now, I have both the skills and vision to pursue my goals.",
        author: "Karthik R.",
        role: "VYLP Cohort 1 Graduate",
        image: "/Individuals/Kavya-Bhola.jpeg",
      },
      {
        quote: "The mentorship I received through VYLP was invaluable. My mentor helped me navigate personal challenges while also guiding my career path.",
        author: "Divya M.",
        role: "VYLP Cohort 3 Participant",
        image: "/Individuals/Anukathir-Surya.jpeg",
      },
    ],
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
    testimonials: [
      {
        quote: "The Vidiyal Learning Center gave my child access to quality education we couldn't afford otherwise. Now she dreams of becoming a doctor.",
        author: "Meena K.",
        role: "Parent of Vidiyal Student",
        image: "/Individuals/Aakash.jpeg",
      },
      {
        quote: "The digital literacy program at Vidiyal opened a whole new world of possibilities for me. I can now use computers with confidence.",
        author: "Arjun T.",
        role: "Vidiyal Student",
        image: "/Individuals/Kavya-Bhola.jpeg",
      },
      {
        quote: "Teaching at Vidiyal has been the most rewarding experience. Seeing these children grow and learn despite challenges is truly inspiring.",
        author: "Shalini P.",
        role: "Vidiyal Teacher",
        image: "/Individuals/Anukathir-Surya.jpeg",
      },
    ],
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
    testimonials: [
      {
        quote: "Project Vishwa's women empowerment program gave me the confidence and skills to become a community leader.",
        author: "Lakshmi M.",
        role: "Women Empowerment Program Graduate",
        image: "/Individuals/Anukathir-Surya.jpeg",
      },
      {
        quote: "Thanks to the skill development initiative, I was able to start my own small business and support my family.",
        author: "Rajesh K.",
        role: "Livelihood Program Participant",
        image: "/Individuals/Kavya-Bhola.jpeg",
      },
      {
        quote: "The child protection initiatives have transformed our village. Our children now have safe spaces to learn and play.",
        author: "Sunita D.",
        role: "Community Leader",
        image: "/Individuals/Aakash.jpeg",
      },
    ],
  },
}

export default function ProgramPage() {
  const params = useParams()
  const slug = params?.slug as string
  const program = programsData[slug as keyof typeof programsData]

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800)
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

  // Render different layouts based on program slug
  if (slug === "vylp") {
    return (
      <RootLayout>
        <div className="overflow-hidden">
          <VYLPHeroSection program={program} />
          <WhyVYLPSection program={program} />
          <VYLPOverviewSection program={program} />
          <VideoSection program={program} />
          <ObjectivesSection program={program} />
          <ProgramFeaturesSection program={program} />
          <TestimonialsSection program={program} />
          <CohortShowcaseSection />
          <GetInvolvedSection />
        </div>
      </RootLayout>
    )
  }

  return (
    <RootLayout>
      <div className="overflow-hidden">
        <HeroSection program={program} />
        <OverviewSection program={program} />
        <VideoSection program={program} />
        <ImpactSection program={program} />
        <TestimonialsSection program={program} />
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

// New Testimonials Section that accepts program as prop
const TestimonialsSection = ({ program }: { program: any }) => {
  // Use program.testimonials if available, otherwise use default testimonials
  const testimonials = program.testimonials 
  return (
    <ParallaxSection bgImage="/scss.jpg" className="py-20 text-white">
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
          items={testimonials.map((testimonial : any, index:any) => (
            <div key={index} className="px-4">
              <Card className="bg-background/10 backdrop-blur-md border-none glass text-white max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary-foreground">
                      <Image
                        src={testimonial.image || "/cnff.jpg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xl mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-md text-gray-300">{testimonial.role}</p>
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
        <Button
          asChild
          variant="outline"
          className="text-white border-white bg-transparent hover:bg-white/10 button-ripple"
        >
          <Link href="#">Volunteer</Link>
        </Button>
      </motion.div>
    </div>
  </section>
)

const VYLPHeroSection = ({ program }: { program: any }) => (
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

const WhyVYLPSection = ({  }: { program: any }) => (
  <section className="py-24 bg-secondary relative overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why <span className="text-primary">VYLP</span>?
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
        <p className="text-xl text-muted-foreground my-8 w-[80%] mx-auto">
          In an effort to address the pressing challenges faced by rural youth, Tarunya Foundation conducted an extensive online survey involving over 300 young individuals from the southern districts of Tamil Nadu. The survey aimed to delve into the barriers they face in accessing quality higher education and their preparedness for entering the competitive job market.
        </p>
        <p className="text-xl text-muted-foreground w-[80%] mx-auto">
          The findings were both revealing and thought-provoking. The responses highlighted significant gaps in career guidance, socio-emotional skills, and exposure to opportunities, all of which are critical for personal and professional growth. These insights emphasized the urgent need for a structured program to address these challenges comprehensively.
        </p>
        <p className="text-xl text-foreground w-[80%] mx-auto mt-8">
          Motivated by these findings, we designed and launched the <span className='font-bold'>Vriksham Youth Leadership Program (VYLP)</span>.
        </p>
        
      </motion.div>

       <div className="grid md:grid-cols-3 gap-12">
        {[
          {
            title: "Holistic Development",
            description:
              "We focus on developing leadership skills, emotional intelligence, and practical knowledge that prepares youth for real-world challenges.",
            icon: <Users className="h-12 w-12 text-primary" />,
          },
          {
            title: "Experiential Learning",
            description:
              "Our program emphasizes learning by doing, with hands-on projects that allow participants to apply their skills in real situations.",
            icon: <Book className="h-12 w-12 text-primary" />,
          },
          {
            title: "Community Impact",
            description:
              "VYLP participants implement community projects that address local challenges, creating immediate positive change.",
            icon: <Shield className="h-12 w-12 text-primary" />,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div> 
    </div>
  </section>
)
const VYLPOverviewSection = ({ program }: { program: any }) => (
  <section className="py-24 bg-secondary/30 relative">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Program Overview</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{program.description}</p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Who Can Join</h3>
                  <p className="text-muted-foreground">
                    Designed for college students aged 17–23 from economically and socially marginalized communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Program Duration</h3>
                  <p className="text-muted-foreground">
                    VYLP offers a transformative one-year journey with lifelong alumni support. Delivered through a dynamic hybrid model, the program combines online sessions, monthly in-person workshops, and immersive residential camps to ensure holistic development and sustained impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 p-6 rounded-2xl bg-white shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4">Program Distribution</h3>
            <PieChart data={program.chartData} title="" className="bg-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
)

const ObjectivesSection = ({ program }: { program: any }) => (
  <section className="py-24 bg-background relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Objectives & Learning Goals</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our program is designed with clear objectives to ensure participants develop the skills and mindset needed to
          lead effectively.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-3">
              1
            </span>
            Key Objectives
          </h3>

          <div className="space-y-6">
            {program.goals.map((goal: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l-2 border-primary/20"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <p className="text-lg">{goal}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-3">
              2
            </span>
            Learning Outcomes
          </h3>

          <div className="bg-gradient-to-br from-secondary/50 to-secondary/20 p-8 rounded-2xl">
            <ul className="space-y-4">
              {[
                "Develop critical thinking and problem-solving skills",
                "Build effective communication and public speaking abilities",
                "Learn project management and team leadership",
                "Understand community development principles",
                "Cultivate emotional intelligence and empathy",
                "Master conflict resolution techniques",
                "Develop financial literacy and resource management",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

const ProgramFeaturesSection = ({ }: { program: any }) => (
  <section className="py-24 bg-secondary relative overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground dark:text-white">
          Program Features
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
          Our comprehensive program includes various components designed to provide a holistic learning experience.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Residential Exposure Camps",
            description: "We conduct two residential camps (Induction and Mid-point) to give an intense in-person learning experience to our students. These camps also provide an exposure to the host organization and a new geography which greatly enhances their worldview.",
            icon: '/icons/camp.png',
            color: "from-blue-50 to-blue-100 dark:from-blue-300 dark:to-blue-200",
            
          },
          {
            title: "Experiential Holistic Curriculum",
            description: "All our modules are designed to be activity-based following a learning-practicing-applying approach. Our curriculum places equal emphasis on life essentials aspects like socio-emotional and interpersonal skills, and technical aspects like career readiness, communication, presentation and so on",
            icon: '/icons/vri.png',
            color: "from-green-50 to-green-100 dark:from-green-300 dark:to-green-200",
            
          },
          {
            title: "In-person Monthly Workshops",
            description: "Every month offline workshops are conducted at our office premises in Alangulam to cover critical modules like interpersonal skill, gender sensitization and the like which are more effective and impactful in an in-person setting.",
            icon: '/icons/conf.png',
            color: "from-purple-50 to-purple-100 dark:from-purple-300 dark:to-purple-200",
            
          },
          {
            title: "Exclusive One-On-One Mentorship",
            description: "We place utmost importance on providing individualized support to each student through exclusive monthly mentorship calls with a dedicated mentor who not only guides the student through career planning but also supports in navigating through personal challenges.",
            icon: '/icons/pplmt.png',
            color: "from-orange-50 to-orange-100 dark:from-orange-300 dark:to-orange-200",
           
          },
          {
            title: "Regular Weekly Online Sessions",
            description: "We run weekly online sessions throughout the year covering important modules like English Language, Financial Literacy, Self-development, and many more. These modules ensure continuous learning and reflection that enhances the knowledge and skill set of the students.",
            icon: '/icons/vrcmt.png',
            color: "from-pink-50 to-pink-100 dark:from-pink-300 dark:to-pink-200",
           
          },
          {
            title: "Interaction with Experts/Leaders",
            description: "We regularly invite subject matter experts and leaders from different sectors to interact with and inspire our students. Holding conversations with external speakers not only broadens their perspective but also boosts their confidence and self-esteem.",
            icon: '/icons/stng.png',
            color: "from-teal-50 to-teal-100 dark:from-teal-300 dark:to-teal-200",
            
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 bg-gradient-to-br ${feature.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6`}>
              <Image src={feature.icon} alt={feature.title} width={40} height={40}/>
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground dark:text-white">{feature.title}</h3>
            <p className="text-muted-foreground ">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CohortShowcaseSection = () => (
  <section className="py-24 bg-background relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Cohorts</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Meet the inspiring young leaders who are part of our VYLP journey.
        </p>
      </motion.div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50, rotateZ: -5 }}
            whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/3 h-[400px] rounded-2xl overflow-hidden shadow-xl transform md:-rotate-3 hover:rotate-0 transition-all duration-500"
          >
            <Image src="/yth.jpg" alt="Cohort 1" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-bold mb-2">Cohort 1</h3>
              <p className="text-white/80">15+ young leaders </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/3 h-[450px] rounded-2xl overflow-hidden shadow-xl z-10 hover:scale-105 transition-all duration-500"
          >
            <Image src="/yth.jpg" alt="Cohort 2" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-bold mb-2">Cohort 2</h3>
              <p className="text-white/80"> 15 yound leaders</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateZ: 5 }}
            whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/3 h-[400px] rounded-2xl overflow-hidden shadow-xl transform md:rotate-3 hover:rotate-0 transition-all duration-500"
          >
            <Image src="/yth.jpg" alt="Cohort 3" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-bold mb-2">Cohort 3</h3>
              <p className="text-white/80">13 young leaders</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="rounded-full px-8 py-6 text-lg">
            Apply for Next Cohort
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
)


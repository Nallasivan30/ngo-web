/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { YouTubeVideo } from "@/components/youtube-video"
import { PieChart } from "@/components/pie-chart"
import { Loading } from "@/components/loading"
import { Users, Book, Shield, ZoomIn, X } from "lucide-react"
import Link from "next/link"
import { TestimonialsSection } from "@/components/testimonial"
import RootLayout from "@/components/layout"

// Program data
const programsData = {
  vylp: {
    title: "VYLP (Vriksham Youth Leadership Program)",
    subtitle: "Empowering youth to become leaders of tomorrow",
    description:
      "The Vriksham Youth Leadership Program (VYLP) is the flagship initiative of Tarunya Foundation, created to empower rural youth in Tamil Nadu with the skills, awareness, and confidence to build meaningful careers and lead fulfilling lives. Launched in 2022, the program addresses critical systemic challenges faced by rural college students, such as limited exposure, socio-economic barriers, and foundational educational gaps",
    image: "/vylp.jpg",
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
      "To create a non-judgemental, reliable, and progressive learning environment",
      "To build awareness about existing career opportunities and to support them build necessary skills and knowledge to pursue their dreams ",
      "To forge effective habits and a learning mindset that would enable them to become self-reliant and make informed decisions in life",
      "To build the ability to reflect and be self-aware leading to enhanced relationship with self, family and others",
      "To cultivate a broader understanding of diverse perspectives and enhance their world view through exposure and awareness",
    ],
    testimonials: [
      {
        quote:
          "During the first two days of the residential camp, I was wondering what they were doing but slowly I became a part of it. In those five days they gave some basic but very important lessons about life. We are being taught many different skills through online and office sessions. The in-person office workshops have helped me to improve my communication and teamwork skills. Our regular monthly calls provide a space for me to reflect how my month went and set goals for the upcoming month. Sessions on social challenges and current affairs builds my general knowledge. As I am a Tamil medium student the weekly English classes are helping me a lot to improve the language and pushes me to try harder.",
        author: "Alex",
        role: "VYLP Cohort 1 Graduate",
        image: "/Individuals/Students/Abishek.jpg",
      },
      {
        quote:
          "I find VYLP very helpful. I have been educated about different types of competitive examinations and career opportunities which I was totally unaware of before. I am currently figuring out what is most suitable for me through my monthly calls. I'm learning the basics of English language grammar and trying to speak in English. I also learnt how to practice values and be a volunteer in every life situation",
        author: "Vijay Kumar",
        role: "VYLP Cohort 1 Graduate",
        image: "/Individuals/Students/vijay-kumar.jpg",
      },
      {
        quote:
          "The encouragement provided throughout VYLP has been instrumental in my journey, particularly in guiding me to apply for opportunities such as Teach for India and the Bhumi Fellowship. These experiences have profoundly shaped my personal and professional growth. Anitha akka's mentorship has been a beacon of inspiration for me. Through her guidance, I have come to understand how I should approach my career and make informed decisions.",
        author: "Sundar",
        role: "VYLP Cohort 2 Graduate",
        image: "/Individuals/Students/Sundar.png",
      },
    ],
  },
  vidiyal: {
    title: "Vidiyal Learning Center",
    subtitle: "Providing quality education to underprivileged children",
    description: (
      <div className="gap-4">
        <p>Vidiyal Learning Centers are safe learning spaces established within the village to supplement the sub-par mainstream education that rural children receive through low-resource government schools. Children are engaged in a range of activities pertaining to a holistic development curriculum during after school hours and over weekends. Additionally, each child is supported through individualized mentorship to navigate through their personal lives with courage and confidence.</p>
        <p>Vidiyal Learning Centers are safe learning spaces established within the village to supplement the sub-par mainstream education that rural children receive through low-resource government schools. Children are engaged in a range of activities pertaining to a holistic development curriculum during after school hours and over weekends. Additionally, each child is supported through individualized mentorship to navigate through their personal lives with courage and confidence.</p>
      </div>
    ),
    image: "/vlc/vlcgft.jpg",
    videoId: "lVaavexQbiU", 
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
    vlcModel: {
      title: "VLC Model",
      image: "/vlc/vlcmdl.png",
    },
    keyComponents: {
      title: "Key Components",
      image: "/vlc/vlckey.png",
    },
    testimonials: [
      {
        quote:
          "I am very interested in playing Ultimate Frisbee. Initially, I hated the appreciation circle that happens after the game where we encourage and appreciate others and ask for forgiveness for our mistakes on the ground. I thought the appreciation circle was a waste of time and we could play one match within that time. However, I realized how listening to others in the circle slowly built my values and I started treating others with respect and asked sorry for my mistakes which I have never done in my life.",
        author: "Abhisekh,",
        role: "8th Grade, VLC Kid",
        image: "/Individuals/Students/Abhishek.jpg",
      },
      {
        quote:
          "I experienced the magic of encouraging others when they are trying something new and how much value it is adding to them at that significant time. While playing frisbee, when someone missed the catch and At VLC session, when my friends try to speak in English, I always encourage them. I practice this as one of my core values in my life.",
        author: "Gokula Selvan,",
        role: "7th grade, VLC Kid",
        image: "/Individuals/Students/Gokula-Selvan.jpeg",
      },
      {
        quote:
          "My favourite time is when I discover something new. Doing experiments at Prayogshala sessions in VLC laid the foundation for that. I always like to spend my time experimenting on things and to read different books at Vidiyal Library. I learned how to use time effectively and I try to practice that in my life.",
        author: "Durga,",
        role: "8th grade, VLC Kid",
        image: "/Individuals/Students/Durga.jpg",
      },
    ],
  },
  vishwa: {
    title: "Project Vishwas",
    subtitle: "Empowering children, parents, and communities against child sexual abuse",
    description:
      "At Tarunya Foundation, we believe that every child deserves a safe and nurturing environment to grow, learn, and thrive. Recognizing the increasing need for awareness about child safety, we have launched Project Vishwas to empower children, parents, educators, and communities with knowledge and tools to combat child sexual abuse (CSA).",
    image: "/cvrimg.jpg",
    videoId: "1kUE0BZtTRc",
    chartData: [
      { label: "Child Education", value: 40, color: "#fbbf24" },
      { label: "Adult Training", value: 30, color: "#f59e0b" },
      { label: "Resource Development", value: 20, color: "#d97706" },
      { label: "Community Outreach", value: 10, color: "#b45309" },
    ],

    testimonials: [
      {
        quote:
          "The training provided by Project Vishwas has transformed how our school approaches child safety. Our teachers are now better equipped to create a safe environment for all students.",
        author: "Priya Sharma",
        role: "School Principal",
        image: "/Individuals/Anukathir-Surya.jpeg",
      },
      {
        quote:
          "As a parent, I now feel more confident discussing personal safety with my children. The resources and guidance from Project Vishwas have been invaluable.",
        author: "Rajesh Kumar",
        role: "Parent",
        image: "/Individuals/Kavya-Bhola.jpeg",
      },
      {
        quote:
          "The community workshops have opened up important conversations that were previously taboo. We're seeing a real shift in how our community approaches child protection.",
        author: "Sunita Devi",
        role: "Community Leader",
        image: "/Individuals/Aakash.jpeg",
      },
    ],
    whyItMatters: [
      {
        title: "High Prevalence of CSA",
        description:
          "More than 53% of Indian children report experiencing some form of sexual abuse. Many cases go unreported due to lack of awareness or fear of stigma.",
      },
      {
        title: "Knowledge Gaps",
        description:
          "Many stakeholders, including parents and educators, are unaware of their rights and responsibilities under the POCSO Act.",
      },
      {
        title: "A Need for Action",
        description:
          "By educating communities, we aim to create informed advocates who can prevent, recognize, and respond to CSA effectively.",
      },
    ],
    offerings: [
      {
        title: "Awareness Workshops for Schools",
        description:
          "Interactive sessions for students aged 6-16 years, teaching them about body safety, boundaries, and good touch vs. bad touch. Specialized training for teachers and school staff on identifying and addressing CSA.",
        icon: "/placeholder.svg?height=64&width=64",
      },
      {
        title: "Community Training Programs",
        description:
          "Seminars and discussions for parents, local leaders, and community members to build a collective understanding of child protection.",
        icon: "/placeholder.svg?height=64&width=64",
      },
      {
        title: "Resources and Toolkits",
        description:
          "Customized handouts, posters, and videos to reinforce learning. Easy access to helpline information and reporting mechanisms.",
        icon: "/placeholder.svg?height=64&width=64",
      },
      {
        title: "Ongoing Support",
        description:
          "Follow-up sessions and resources to ensure sustained awareness and vigilance. Partnerships with local authorities and organizations for comprehensive support.",
        icon: "/placeholder.svg?height=64&width=64",
      },
    ],
    approach: [
      {
        title: "Engagement",
        description:
          "We use interactive activities like puppet shows, role-plays, and storytelling to make sessions relatable and impactful.",
      },
      {
        title: "Empathy",
        description: "We create safe, non-judgmental spaces for participants to share and learn.",
      },
      {
        title: "Empowerment",
        description:
          "We equip individuals with actionable strategies to protect children and address abuse effectively.",
      },
    ],
    impact: [
      {
        title: "Empowered Children",
        description:
          "By teaching children their rights and how to seek help, we enable them to take ownership of their safety.",
      },
      {
        title: "Informed Adults",
        description:
          "Educators and parents become advocates for change, ensuring children are supported at every step.",
      },
      {
        title: "Stronger Communities",
        description: "Awareness leads to collective action, creating environments where children feel safe and valued.",
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
    const timer = setTimeout(() => setIsLoading(false), 1400)
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
        <HeroSection program={program} />
        <WhyVYLPSection program={program} />
        <VYLPOverviewSection program={program} />
        <VideoSection program={program} />
        <ObjectivesSection program={program} />
        <ProgramFeaturesSection program={program} />
        <TestimonialsSection testimonials={program.testimonials} />
        <CohortShowcaseSection />
        <GetInvolvedSection />
      </div>
      </RootLayout>
    )
  }

  if (slug === "vidiyal") {
    return (
      <RootLayout>
        <div className="overflow-hidden">
        <HeroSection program={program} />
        <OverviewSection program={program} />
        <VLCModelSection program={program} />
        <VideoSection program={program} />
        <TestimonialsSection testimonials={program.testimonials} />
        <GoalsSection program={program} />
        <GetInvolvedSection />
      </div>
      </RootLayout>
    )
  }

  if (slug === "vishwa") {
    return (
      <RootLayout>
        <div className="overflow-hidden">
          <HeroSection program={program} />
          <WhyItMattersSection program={program} />
          <VishwasOverviewSection program={program} />
          <WhatWeOfferSection program={program} />
          <OurApproachSection program={program} />
          <ImpactHighlightsSection program={program} />
        </div>
      </RootLayout>
    )
  }

  return (
    <div className="overflow-hidden">
      <HeroSection program={program} />
      <OverviewSection program={program} />
      <VideoSection program={program} />
      <TestimonialsSection testimonials={program.testimonials} />
      <GoalsSection program={program} />
      <GetInvolvedSection />
    </div>
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

const VLCModelSection = ({ program }: { program: any }) => {
  const [showModelModal, setShowModelModal] = useState(false)
  const [showComponentsModal, setShowComponentsModal] = useState(false)

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Understanding <span className="text-primary">Vidiyal Learning Centers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our approach and methodology for creating impactful learning environments
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* VLC Model Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => setShowModelModal(true)}
            className="cursor-pointer group"
          >
            <Card className="overflow-hidden h-full border-2 border-transparent transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/vlc/vlcmdl.png"
                  alt="VLC Model"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">{program.vlcModel.title}</h3>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>Click to view</span>
                    <ZoomIn className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Components Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={() => setShowComponentsModal(true)}
            className="cursor-pointer group"
          >
            <Card className="overflow-hidden h-full border-2 border-transparent transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/vlc/vlckey.png"
                  alt="Key Components"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">{program.keyComponents.title}</h3>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>Click to view</span>
                    <ZoomIn className="ml-1 h-4 w-4" />
                  </div>
                </div>
                
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* VLC Model Modal */}
        {showModelModal && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">{program.vlcModel.title}</h3>
                  <Button variant="ghost" size="icon" onClick={() => setShowModelModal(false)} className="rounded-full">
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <div className="relative h-[480px] mb-6">
                  <Image
                    src={program.vlcModel.image || "/placeholder.svg"}
                    alt={program.vlcModel.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">{program.vlcModel.details}</p>
              </div>
            </motion.div>
          </div>
        )}

        {/* Key Components Modal */}
        {showComponentsModal && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">{program.keyComponents.title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowComponentsModal(false)}
                    className="rounded-full"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <div className="relative h-[480px] mb-6">
                  <Image
                    src={program.keyComponents.image}
                    alt={program.keyComponents.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">{program.keyComponents.details}</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

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
          <Link href="/get-involved/volunteer">Volunteer</Link>
        </Button>
      </motion.div>
    </div>
  </section>
)
const WhyVYLPSection = ({}: { program: any }) => (
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
        <p className="text-sm md:text-xl text-muted-foreground my-8 w-[80%] mx-auto">
          In an effort to address the pressing challenges faced by rural youth, Tarunya Foundation conducted an
          extensive online survey involving over 300 young individuals from the southern districts of Tamil Nadu. The
          survey aimed to delve into the barriers they face in accessing quality higher education and their preparedness
          for entering the competitive job market.
        </p>
        <p className="text-sm md:text-xl text-muted-foreground w-[80%] mx-auto">
          The findings were both revealing and thought-provoking. The responses highlighted significant gaps in career
          guidance, socio-emotional skills, and exposure to opportunities, all of which are critical for personal and
          professional growth. These insights emphasized the urgent need for a structured program to address these
          challenges comprehensively.
        </p>
        <p className="text-sm md:text-xl text-foreground w-[80%] mx-auto mt-8">
          Motivated by these findings, we designed and launched the{" "}
          <span className="font-bold">Vriksham Youth Leadership Program (VYLP)</span>.
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
                    VYLP offers a transformative one-year journey with lifelong alumni support. Delivered through a
                    dynamic hybrid model, the program combines online sessions, monthly in-person workshops, and
                    immersive residential camps to ensure holistic development and sustained impact.
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

const ProgramFeaturesSection = ({}: { program: any }) => (
  <section className="py-24 bg-secondary relative overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground dark:text-white">Program Features</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
          Our comprehensive program includes various components designed to provide a holistic learning experience.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Residential Exposure Camps",
            description:
              "We conduct two residential camps (Induction and Mid-point) to give an intense in-person learning experience to our students. These camps also provide an exposure to the host organization and a new geography which greatly enhances their worldview.",
            icon: "/icons/camp.png",
            color: "from-blue-50 to-blue-100 dark:from-blue-300 dark:to-blue-200",
          },
          {
            title: "Experiential Holistic Curriculum",
            description:
              "All our modules are designed to be activity-based following a learning-practicing-applying approach. Our curriculum places equal emphasis on life essentials aspects like socio-emotional and interpersonal skills, and technical aspects like career readiness, communication, presentation and so on",
            icon: "/icons/vri.png",
            color: "from-green-50 to-green-100 dark:from-green-300 dark:to-green-200",
          },
          {
            title: "In-person Monthly Workshops",
            description:
              "Every month offline workshops are conducted at our office premises in Alangulam to cover critical modules like interpersonal skill, gender sensitization and the like which are more effective and impactful in an in-person setting.",
            icon: "/icons/conf.png",
            color: "from-purple-50 to-purple-100 dark:from-purple-300 dark:to-purple-200",
          },
          {
            title: "Exclusive One-On-One Mentorship",
            description:
              "We place utmost importance on providing individualized support to each student through exclusive monthly mentorship calls with a dedicated mentor who not only guides the student through career planning but also supports in navigating through personal challenges.",
            icon: "/icons/pplmt.png",
            color: "from-orange-50 to-orange-100 dark:from-orange-300 dark:to-orange-200",
          },
          {
            title: "Regular Weekly Online Sessions",
            description:
              "We run weekly online sessions throughout the year covering important modules like English Language, Financial Literacy, Self-development, and many more. These modules ensure continuous learning and reflection that enhances the knowledge and skill set of the students.",
            icon: "/icons/vrcmt.png",
            color: "from-pink-50 to-pink-100 dark:from-pink-300 dark:to-pink-200",
          },
          {
            title: "Interaction with Experts/Leaders",
            description:
              "We regularly invite subject matter experts and leaders from different sectors to interact with and inspire our students. Holding conversations with external speakers not only broadens their perspective but also boosts their confidence and self-esteem.",
            icon: "/icons/stng.png",
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
              <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground dark:text-white">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

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


const WhyItMattersSection = ({ program }: { program: any }) => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why This Project <span className="text-primary">Matters</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{program.description}</p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          This initiative is designed to create widespread awareness of the Protection of Children from Sexual Offences
          (POCSO) Act, 2012, ensuring that everyone understands their role in safeguarding children from harm, creating
          a culture of safety and openness and upholding their &apos;Vishwas&apos;.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {program.whyItMatters.map((item: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-primary/10 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const VishwasOverviewSection = ({ program }: { program: any }) => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Aim to Achieve</h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Project Vishwas focuses on educating children, training adults, and building safer communities. Over the
            next year, we aim to reach 10,000 individuals across 200 schools and communities in Hyderabad, creating a
            ripple effect of awareness and change.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Program Focus Areas</h3>
              <PieChart data={program.chartData} title="" className="bg-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

const WhatWeOfferSection = ({ program }: { program: any }) => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What We <span className="text-primary">Offer</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Our comprehensive approach includes a range of programs and resources designed to educate, empower, and
          support all stakeholders in child protection.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {program.offerings.map((offering: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="p-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <div className="w-6 h-6 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{offering.title}</h3>
                  <p className="text-muted-foreground">{offering.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const OurApproachSection = ({ program }: { program: any }) => (
  <section className="py-20 bg-primary text-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
        <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        <p className="text-lg max-w-3xl mx-auto">Our approach is built on engagement, empathy, and empowerment.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {program.approach.map((item: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-primary/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-white/80">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const ImpactHighlightsSection = ({ program }: { program: any }) => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Impact <span className="text-primary">Highlights</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Through our work, we&apos;re creating lasting change in how communities approach child safety.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {program.impact.map((item: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-purple-100 rounded-xl transform rotate-1"></div>
            <Card className="relative z-10 h-full border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)


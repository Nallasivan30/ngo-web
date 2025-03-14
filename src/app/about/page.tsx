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
import HeroCarousel from "@/components/HeroCarousel"

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
        <HeroCarousel />
        <OurStorySection />
        <MissionVisionSection />
        <TeamSection />
        <ValuesSection />
        <JoinUsSection />
      </div>
    </RootLayout>
  )
}

// const HeroSection = () => (
//   <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
//     <div className="absolute inset-0 z-0">
//       <Image src="/scss.jpg" alt="About hero background" fill className="object-cover opacity-70" priority />
//     </div>
//     <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl md:text-6xl font-bold mb-4"
//       >
//         About Tarunya Foundation
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="text-xl max-w-2xl mx-auto"
//       >
//         Empowering communities through education, healthcare, and sustainable development
//       </motion.p>
//     </div>
//   </section>
// )

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
          While working with a grassroots organization in Tirunelveli, Anitha and Kavi witnessed a troubling disconnect: despite school and college enrollment, true learning and knowledge were eluding the children and youth. They observed that most graduates and postgraduates were lost, uncertain about their future, and unaware of their own potential. The typical outcomes were disheartening—a young man would settle for a menial local job, while a young woman’s path often led to early marriage.
          </p>
          <p className="text-muted-foreground mb-4">
          Determined to break this cycle, Anitha and Kavi delved deeply into the unique challenges of the region. They realized that with the right environment—a safe learning space, access to opportunities, and timely mentorship—every rural child and youth could dream big and have the courage to chase those dreams.
          </p>
          <p className="text-muted-foreground">
          In 2020, Tarunya was born with an aspiration: to bridge the gap in the quality of education and exposure by empowering rural children and youth with the awareness, skills, attitude and agency needed to lead informed, purposeful lives. The journey began in a small learning center in Sivalingapuram village, Tenkasi district, with just 25 schoolchildren. From this modest start, Tarunya set out to transform not only individual lives but also the future of an entire community.
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
              To create safe learning spaces and opportunities that foster the holistic transformation of rural children and youth through socio-emotional skills, career readiness, and mentorship.
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
              India’s rural children and youth empowered with the ability and agency to explore their full potential and pursue their aspirations without being limited by their background or geography.
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
      name: "Anita Choudhary​",
      role: "Co – Anchor",
      bio: "Anitha is an electronic engineer and a proud Young India Fellow. With a strong foundation in business consulting from her time at Deloitte Consulting Pvt Ltd, Anitha made a transformative shift towards working with rural children and youth. Her passion for designing learning experiences for behaviour change and life skills drives her to empower young minds, helping them realize their potential. Known for her strategic thinking and sharp people management skills, Anitha excels in crafting impactful learning programs that create lasting change. A dedicated mother, yoga enthusiast, and advocate for minimalism, she champions the importance of a balanced, healthy lifestyle.",
      image: "/spcs.jpg",
    },
    {
      name: "Kaviarasi Mariappan",
      role: "Co – Anchor",
      bio: "A graduate with a Bachelor’s degree in Chemistry from a rural college, Kaviarasi’s mission is rooted in her own experiences and background. She specializes in designing and leading life-skills based experiential programs and workshops tailored for college students. She is a dedicated facilitator and an eloquent Tamil poet who also enjoys meditating and tailoring. Her academic achievements include being an alumna of the Young India Fellowship and the Mother Teresa Fellowship from Ashoka University, Haryana. Additionally, Kaviarasi is a Vriksh Fellow and a participant in Jagriti Yatra, underscoring her commitment towards community development.",
      image: "/spcs.jpg",
    },
    
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container w-full mx-auto py-7 px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <AnimatedCard
              key={member.name}
              delay={index * 0.1}
              className="h-full w-full"
              content={
                <div className="text-center">
                  <div className="relative mt-5 w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
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
      title: "Courage",
      description: "We boldly take on challenges, make though decisions, and stand up for what's right. We instill courage in our children and youth, empowering them to make informed decisions and advocate for themselves. ",
    },
    { title: "Commitment ", description: "Our dedication to improving the well-being of rural children and youth never wavers. We follow through on our goals, ensuring consistent effort in every initiative. " },
    { title: "Integrity", description: " We prioritize honesty, transparency, and ethical practices, ensuring trust and accountability in every action. " },
    {
      title: "Equality ",
      description: "Every individual, regardless of background or circumstance, has access to the same opportunities and resources. We create a non-judgemental, inclusive spaces for all voices to be heard. ",
    },
    { title: "Excellence", description: " We pursue the highest standards in everything we do, embracing continuous learning and innovation to create meaningful impact. " },
    { title: "Humility", description: " With humility, we listen, learn and serve alongside our communities. We respect every individual's contribution in this shared journey. " },
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
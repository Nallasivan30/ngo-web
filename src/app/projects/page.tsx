"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedCard } from "@/components/animated-card"
import { Loading } from "@/components/loading"
import { ArrowRight, BookOpen, HeartPulse, Lightbulb, HandHeart, Users } from "lucide-react"
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
      <Image src="/flds.jpg" alt="Projects hero background" fill className="object-cover opacity-80" priority />
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
        Empowering communities through education, healthcare, and sustainable development
      </motion.p>
    </div>
  </section>
)

const ProjectsSection = () => {
  const categories = [
    { value: "all", label: "All Projects" },
    { value: "education", label: "Education" },
    { value: "healthcare", label: "Healthcare" },
    { value: "livelihood", label: "Livelihood" },
    { value: "community", label: "Community Development" },
  ]

  const projects = [
    {
      title: "Girls' Education Program",
      category: "education",
      description: "Providing quality education and scholarships to underprivileged girls.",
      image: "/edu.jpg",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      title: "Women's Livelihood Program",
      category: "livelihood",
      description: "Empowering women through vocational training and microfinance.",
      image: "/wmn.jpeg",
      icon: <Lightbulb className="h-5 w-5" />,
    },
    {
      title: "Community Sanitation Drive",
      category: "community",
      description: "Improving sanitation and hygiene in rural communities.",
      image: "/pplbg.jpg",
      icon: <HandHeart className="h-5 w-5" />,
    },
    {
      title: "Digital Literacy Initiative",
      category: "education",
      description: "Teaching digital skills to youth in rural areas.",
      image: "/cnf.jpg",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      title: "Maternal Health Program",
      category: "healthcare",
      description: "Providing prenatal and postnatal care to mothers in need.",
      image: "/edu.jpg",
      icon: <HeartPulse className="h-5 w-5" />,
    },
    {
      title: "Youth Leadership Program",
      category: "community",
      description: "Empowering youth to become community leaders.",
      image: "/sdwyth.jpg",
      icon: <HandHeart className="h-5 w-5" />,
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
          <div className="flex flex-wrap justify-center">
          <TabsList className="w-[auto] flex flex-wrap justify-center mb-8 ">
            {categories.map((category) => (
              <TabsTrigger key={category.value} value={category.value} className="m-1 mb-4">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          </div>
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
          <Image src="/bwg.jpg" alt="Featured project" fill className="object-cover" />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Girls&apos; Education Program</h2>
          <p className="text-muted-foreground mb-4">
            Our Girls&apos; Education Program is transforming lives by providing access to quality education for underprivileged girls. Through scholarships, mentorship, and community engagement, we&apos;re breaking barriers and creating opportunities for a brighter future.
          </p>
          <p className="text-muted-foreground mb-6">
            Since its inception, the program has supported over 10,000 girls, helping them complete their education and pursue their dreams. Join us in empowering the next generation of leaders.
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
    { number: "10K+", label: "Girls Educated", icon: <BookOpen className="h-8 w-8 text-primary" /> },
    { number: "50K+", label: "Lives Impacted", icon: <HeartPulse className="h-8 w-8 text-primary" /> },
    { number: "100+", label: "Communities Served", icon: <Users className="h-8 w-8 text-primary" /> },
    { number: "5K+", label: "Women Empowered", icon: <Lightbulb className="h-8 w-8 text-primary" /> },
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
            Through our projects and initiatives, we&apos;ve made a significant impact on communities and lives.
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
"use client"

import { useState, useEffect,  } from "react"
import { motion,  } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Loading } from "@/components/loading"
import {
  Clock,
  Users,
  Briefcase,
  GraduationCap,
  ArrowRight,
  MapPin,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import RootLayout from "@/components/layout"
import { Testimonial, TestimonialsSection } from "@/components/testimonial"

// Volunteer gallery data
const volunteerGallery = [
  {
    name: "Aakash",
    role: "Education Support Volunteer",
    image: "/Individuals/Aakash.jpeg",
  },
  {
    name: "Vagmi Gupta",
    role: "IT Volunteer",
    image: "/Individuals/Vagmi-Gupta.jpg",
  },
  {
    name: "Prashasti Singh",
    role: "Youth Mentor",
    image: "/Individuals/Prashasti-Singh.jpeg",
  },
  {
    name: "Nivedita Arumugam",
    role: "Community Outreach Volunteer",
    image: "/Individuals/Nivedita-Arumugam.jpg",
  },
  {
    name: "Iswarya",
    role: "Content Creator",
    image: "/Individuals/Iswarya.jpg",
  },
  {
    name: "Siranjeevi K",
    role: "Event Coordinator",
    image: "/Individuals/Siranjeevi-K.jpg",
  },
]

export default function VolunteerPage() {
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
      <WhyVolunteerSection />
      <OpportunitiesSection />
      <ProcessSection />
      <VolunteerGallerySection />
      <TestimonialsSection testimonials={testimonials} />
    </div>
    </RootLayout>
  )
}

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/vlc/vlcssn.jpg" alt="Volunteers working together" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4"
            >
              Join Our Community
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Become a{" "}
              <span className="text-white relative">
                Volunteer
                <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/40 -z-10"></span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/90 mb-8 max-w-lg"
            >
              Be a part of Tarunya Foundation&apos;s mission to empower rural children and youth. Share your time, skills,
              and passion to create meaningful change and inspire brighter futures—together, we can make a difference!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="https://forms.gle/Q36MhASwTxbvZv9S7" target="_blank" rel="noopener noreferrer">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-primary border-white hover:bg-white/10"
                onClick={() => {
                  const element = document.getElementById("opportunities")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Explore Opportunities
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative h-[500px] w-full">
              <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                <Image src="/Individuals/Chetna-Sharma.jpeg" alt="Volunteer impact" fill className="object-cover rounded-lg" />
              </div>
              <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20">
                <Image src="/Individuals/Kavya-Bhola.jpeg" alt="Volunteer working" fill className="object-cover rounded-lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const WhyVolunteerSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Volunteer with <span className="text-primary">Tarunya</span>
            </h2>
          </div>

          <div className="bg-secondary/30 rounded-xl p-8 shadow-sm border border-border">
            <p className="text-lg mb-6 leading-relaxed">
              Volunteering with Tarunya Foundation is a rewarding way to make a meaningful impact on the lives of rural
              children and youth. Here&apos;s why you should join us:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <p className="text-lg">
                  <span className="font-semibold">Be a Catalyst for Change:</span> Your efforts, whether on the ground
                  or behind the scenes, directly contribute to creating brighter futures for underserved communities.
                </p>
              </li>

              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <p className="text-lg">
                  <span className="font-semibold">Grow Personally and Professionally:</span> Gain valuable skills,
                  enhance your leadership abilities, and experience the fulfillment of hands-on involvement in social
                  change.
                </p>
              </li>

              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <p className="text-lg">
                  <span className="font-semibold">Opportunities for Everyone:</span> Regardless of your background or
                  profession, we offer diverse volunteering roles tailored to your skills and interests.
                </p>
              </li>
            </ul>

            <div className="mt-8 text-center">
              <p className="text-xl font-medium text-primary">Make a difference—one step at a time, with Tarunya!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const OpportunitiesSection = () => {
  const opportunities = [
    {
      title: "Education Support",
      description:
        "Assist in teaching, mentoring, and organizing educational activities for children at our Vidiyal Learning Centers.",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      commitment: "Flexible",
      location: "On-site",
    },
    {
      title: "Youth Mentorship",
      description:
        "Mentor youth in our VYLP program, helping them develop leadership skills and implement community projects.",
      icon: <Users className="h-8 w-8 text-primary" />,
      commitment: "As needed",
      location: "Hybrid",
    },
    {
      title: "Skill-Based Volunteering",
      description:
        "Contribute your professional skills in areas like marketing, design, IT, finance, or program management.",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      commitment: "Flexible",
      location: "Remote",
    },
  ]

  return (
    <section id="opportunities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Volunteer <span className="text-primary">Opportunities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Discover the various ways you can contribute your time and skills to make a difference.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-2 border-transparent transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{opportunity.title}</h3>
                  <p className="text-muted-foreground mb-6">{opportunity.description}</p>
                  <div className="flex flex-col space-y-2 mt-auto">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{opportunity.commitment}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{opportunity.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ProcessSection = () => {
  const steps = [
    {
      title: "Apply",
      description: "Fill out our volunteer application form with your details, interests, and availability.",
      icon: (
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
          1
        </div>
      ),
    },
    {
      title: "Interview",
      description:
        "Have a conversation with our volunteer coordinator to discuss opportunities that match your skills.",
      icon: (
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
          2
        </div>
      ),
    },
    {
      title: "Orientation",
      description: "Attend an orientation session to learn about our work, values, and volunteer guidelines.",
      icon: (
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
          3
        </div>
      ),
    },
    {
      title: "Start Volunteering",
      description: "Begin your volunteer journey with the support of our team and fellow volunteers.",
      icon: (
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
          4
        </div>
      ),
    },
  ]

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
            How to <span className="text-primary">Get Started</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Our simple process to become a volunteer with Tarunya Foundation.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[1px] h-[calc(100%-120px)] bg-primary/20 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 0 ? "md:text-right" : ""}`}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className={`${index % 2 === 0 ? "md:order-last" : ""}`}>{step.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="button-ripple" asChild>
            <Link href="https://forms.gle/Q36MhASwTxbvZv9S7" target="_blank" rel="noopener noreferrer">
              Apply to Volunteer Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

const VolunteerGallerySection = () => {
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
            Our <span className="text-primary">Volunteers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Meet some of the amazing people who are making a difference with Tarunya Foundation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteerGallery.map((volunteer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden border-2 border-transparent transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={volunteer.image || "/placeholder.svg"}
                    alt={volunteer.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-bold text-lg">{volunteer.name}</h3>
                  <p className="text-primary text-sm">{volunteer.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Volunteering with Tarunya Foundation has been one of the most rewarding experiences of my life. I've gained new skills, made lifelong friends, and most importantly, contributed to meaningful change in the community.",
    author: "Priya Sharma",
    role: "Education Support Volunteer",
    image: "/Individuals/Priya-Sharma.jpg",
  },
  {
    quote:
      "As a professional with a busy schedule, I was looking for flexible volunteering opportunities. Tarunya Foundation's skill-based volunteering program allowed me to contribute my expertise in a way that fits my schedule.",
    author: "Rahul Mehta",
    role: "IT Volunteer",
    image: "/Individuals/Rahul-Mehta.jpg",
  },
  {
    quote:
      "The youth mentorship program has been transformative not just for the students, but for me as well. Seeing the growth and confidence in the young people I mentor gives me immense satisfaction.",
    author: "Ananya Patel",
    role: "Youth Mentor",
    image: "/Individuals/Ananya-Patel.jpg",
  },
];

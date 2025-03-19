"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Loading } from "@/components/loading"
import RootLayout from "@/components/layout"
import {
  Heart,
  Clock,
  Users,
  Briefcase,
  GraduationCap,
  Globe,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MapPin,
  Send,
} from "lucide-react"
import Link from "next/link"

export default function VolunteerPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    occupation: "",
    location: "",
    interests: "",
    availability: "",
    experience: "",
    motivation: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 2000)
  }

  if (isLoading) return <Loading />

  return (
    <RootLayout>
    <div className="overflow-hidden">
      {isSubmitted ? (
        <ThankYouSection />
      ) : (
        <>
          <HeroSection />
          <OpportunitiesSection />
          
          <ProcessSection />
          <TestimonialsSection />
          <ApplicationSection
            currentStep={currentStep}
            formData={formData}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
          <FAQSection />
        </>
      )}
    </div></RootLayout>
  )
}

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/placeholder.svg" alt="Volunteers working together" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-black/50" />
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
              Make a meaningful impact by volunteering with Tarunya Foundation. Share your skills, time, and passion to
              help transform lives and create lasting change in communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => {
                  const element = document.getElementById("apply")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
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
                <Image src="/placeholder.svg" alt="Volunteer impact" fill className="object-cover rounded-lg" />
              </div>
              <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20">
                <Image src="/placeholder.svg" alt="Volunteer working" fill className="object-cover rounded-lg" />
              </div>
            </div>
          </motion.div>
        </div>
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
      commitment: "4-8 hours/week",
      location: "On-site",
    },
    {
      title: "Youth Mentorship",
      description:
        "Mentor youth in our VYLP program, helping them develop leadership skills and implement community projects.",
      icon: <Users className="h-8 w-8 text-primary" />,
      commitment: "6-10 hours/week",
      location: "Hybrid",
    },
    {
      title: "Community Outreach",
      description:
        "Support our Project Vishwa initiatives by engaging with communities and organizing awareness programs.",
      icon: <Globe className="h-8 w-8 text-primary" />,
      commitment: "8-12 hours/week",
      location: "On-site",
    },
    {
      title: "Skill-Based Volunteering",
      description:
        "Contribute your professional skills in areas like marketing, design, IT, finance, or program management.",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      commitment: "Flexible",
      location: "Remote",
    },
    {
      title: "Event Support",
      description: "Help organize and manage fundraising events, awareness campaigns, and community gatherings.",
      icon: <Calendar className="h-8 w-8 text-primary" />,
      commitment: "As needed",
      location: "On-site",
    },
    {
      title: "Content Creation",
      description:
        "Create engaging content for our website, social media, newsletters, and other communication channels.",
      icon: <Heart className="h-8 w-8 text-primary" />,
      commitment: "4-6 hours/week",
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
                {/* Dot on the line */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary hidden md:block"></div>

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
      </div>
    </section>
  )
}

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Volunteering with Tarunya Foundation has been one of the most rewarding experiences of my life. I've gained new skills, made lifelong friends, and most importantly, contributed to meaningful change in the community.",
      name: "Priya Sharma",
      role: "Education Support Volunteer",
      image: "/placeholder.svg",
    },
    {
      quote:
        "As a professional with a busy schedule, I was looking for flexible volunteering opportunities. Tarunya Foundation's skill-based volunteering program allowed me to contribute my expertise in a way that fits my schedule.",
      name: "Rahul Mehta",
      role: "IT Volunteer",
      image: "/placeholder.svg",
    },
    {
      quote:
        "The youth mentorship program has been transformative not just for the students, but for me as well. Seeing the growth and confidence in the young people I mentor gives me immense satisfaction.",
      name: "Ananya Patel",
      role: "Youth Mentor",
      image: "/placeholder.svg",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(testimonialsRef, { once: false, amount: 0.3 })

  useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isInView, testimonials.length])

  return (
    <section className="py-20 bg-background" ref={testimonialsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Volunteer <span className="text-primary">Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Hear from our volunteers about their experiences and impact.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary/50 rounded-lg p-8 md:p-12"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-primary/20">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-lg md:text-xl italic mb-6">&apos;{testimonials[currentIndex].quote}&apos;</p>

                <div>
                  <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-primary text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary scale-125" : "bg-primary/30"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface ApplicationSectionProps {
  currentStep: number
  formData: {
    name: string
    email: string
    phone: string
    age: string
    occupation: string
    location: string
    interests: string
    availability: string
    experience: string
    motivation: string
  }
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSelectChange: (name: string, value: string) => void
  handleNextStep: () => void
  handlePrevStep: () => void
  handleSubmit: (e: React.FormEvent) => void
  isSubmitting: boolean
}

const ApplicationSection = ({
  currentStep,
  formData,
  handleInputChange,
  handleSelectChange,
  handleNextStep,
  handlePrevStep,
  handleSubmit,
  isSubmitting,
}: ApplicationSectionProps) => {
  return (
    <section id="apply" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Volunteer <span className="text-primary">Application</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Fill out the form below to start your volunteer journey with us.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-background rounded-lg p-8 shadow-lg"
          >
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex justify-between">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        step < currentStep
                          ? "bg-primary text-primary-foreground"
                          : step === currentStep
                            ? "bg-primary/20 text-primary border-2 border-primary"
                            : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {step < currentStep ? <CheckCircle2 className="h-5 w-5" /> : step}
                    </div>
                    <span className="text-xs mt-2 text-muted-foreground">
                      {step === 1 ? "Personal Info" : step === 2 ? "Interests" : "Experience"}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative mt-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary rounded-full"></div>
                <div
                  className="absolute top-0 left-0 h-1 bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                ></div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold mb-4">Personal Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="age" className="block text-sm font-medium">
                        Age
                      </label>
                      <Input
                        id="age"
                        name="age"
                        type="number"
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="Your age"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="occupation" className="block text-sm font-medium">
                        Occupation
                      </label>
                      <Input
                        id="occupation"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleInputChange}
                        placeholder="Your occupation"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="location" className="block text-sm font-medium">
                        Location
                      </label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Your city/town"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button type="button" onClick={handleNextStep}>
                      Next Step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Interests and Availability */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold mb-4">Interests & Availability</h3>

                  <div className="space-y-2">
                    <label htmlFor="interests" className="block text-sm font-medium">
                      Areas of Interest
                    </label>
                    <Select
                      value={formData.interests}
                      onValueChange={(value) => handleSelectChange("interests", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your area of interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="education">Education Support</SelectItem>
                        <SelectItem value="mentorship">Youth Mentorship</SelectItem>
                        <SelectItem value="outreach">Community Outreach</SelectItem>
                        <SelectItem value="skill-based">Skill-Based Volunteering</SelectItem>
                        <SelectItem value="events">Event Support</SelectItem>
                        <SelectItem value="content">Content Creation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="availability" className="block text-sm font-medium">
                      Availability
                    </label>
                    <Select
                      value={formData.availability}
                      onValueChange={(value) => handleSelectChange("availability", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays">Weekdays</SelectItem>
                        <SelectItem value="weekends">Weekends</SelectItem>
                        <SelectItem value="evenings">Evenings</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={handlePrevStep}>
                      Previous
                    </Button>
                    <Button type="button" onClick={handleNextStep}>
                      Next Step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Experience and Motivation */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold mb-4">Experience & Motivation</h3>

                  <div className="space-y-2">
                    <label htmlFor="experience" className="block text-sm font-medium">
                      Previous Volunteer Experience
                    </label>
                    <Textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Tell us about any previous volunteer experience you have"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="motivation" className="block text-sm font-medium">
                      Motivation to Volunteer
                    </label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      placeholder="Why do you want to volunteer with Tarunya Foundation?"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={handlePrevStep}>
                      Previous
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span className="mr-2">Submitting...</span>
                          <div className="h-4 w-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin"></div>
                        </>
                      ) : (
                        <>
                          Submit Application
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const ThankYouSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Thank You for Your Application!</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            We&quot;ve received your volunteer application and appreciate your interest in joining the Tarunya Foundation
            team. Our volunteer coordinator will review your application and contact you within 3-5 business days.
          </p>
          <div className="p-6 bg-secondary rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-2">What&quot;s Next?</h3>
            <p className="text-muted-foreground">
              While you wait, you can learn more about our programs and the impact we&quot;re making in communities. We look
              forward to welcoming you to our volunteer family soon!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="button-ripple">
              <Link href="/">Return to Homepage</Link>
            </Button>
            <Button asChild variant="outline" className="button-ripple">
              <Link href="/programs">Explore Our Programs</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the minimum time commitment required?",
      answer:
        "The minimum time commitment varies by role. Some opportunities require as little as 4 hours per week, while others may need 8-12 hours. We also offer one-time event volunteering and remote opportunities with flexible hours.",
    },
    {
      question: "Do I need specific qualifications to volunteer?",
      answer:
        "Most volunteer roles don't require specific qualifications, just enthusiasm and commitment. For specialized roles like teaching or mentoring, relevant experience or skills may be beneficial. We provide training for all volunteers.",
    },
    {
      question: "Can I volunteer remotely?",
      answer:
        "Yes! We offer several remote volunteering opportunities, including content creation, digital marketing, graphic design, and administrative support. These roles allow you to contribute from anywhere.",
    },
    {
      question: "Is there an age requirement for volunteering?",
      answer:
        "Our general volunteer program is open to individuals 18 years and older. We do have special youth volunteer programs for those between 15-17 years, which require parental consent and have additional supervision.",
    },
    {
      question: "Will I receive training before starting?",
      answer:
        "All volunteers receive an orientation and role-specific training. Depending on your role, training may range from a few hours to multiple sessions spread over several days.",
    },
    {
      question: "Can I volunteer as part of a group or with my company?",
      answer:
        "Yes, we welcome group and corporate volunteering! We can arrange special projects or events for teams. Please contact our volunteer coordinator to discuss group volunteering opportunities.",
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
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Find answers to common questions about volunteering with Tarunya Foundation.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border border-border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-secondary/50 transition-all">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-secondary/20">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">Still have questions about volunteering with us?</p>
            <Button asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


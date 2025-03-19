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
import { Book, Heart, Users, Briefcase, Award } from "lucide-react"
import RootLayout from "@/components/layout"
import Link from "next/link"



export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) return <Loading />

  return (
<RootLayout>
      <div className="overflow-hidden">
        <HeroSection />
        <WhoAreWeSection /> {/* Added Who Are We Section */}
        <ChallengesSection /> {/* Added Challenges Section */}
        <MissionSection />
        <OurWorkSection />
        <ImpactSection />
        <TestimonialsSection />
        <YouTubeSection/>
        <PartnersSection />
        <CallToActionSection />
      </div>
 </RootLayout>
  )
}

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[80%] md:h-full">
        <Image 
          src="/home/1.jpg" 
          alt="Hero background" 
          fill 
          className="object-cover object-[42%_10%] md:object-[50%_50%]"
          priority 
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground bottom-12 md:bottom-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight"
        >
          Empowering Lives,
          <br />
          Transforming Communities
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8"
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
            <Link href={"/about"}>Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
const WhoAreWeSection = () => {
  return (
    <section className="pt-0 pb-8 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Who <span className="text-primary">Are We?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-lg overflow-hidden"
          >
            <Image src="/home/2.jpg" alt="Who We Are" fill className="object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            
            <p className="text-muted-foreground mb-4">
              Tarunya Foundation is a registered non-profit organization committed to transforming the lives of rural children and youth by equipping 			them with the skills, confidence, awareness, and agency needed to envision and build a brighter future. Founded on the belief that every 				individual deserves the opportunity to realize their full potential, we strive to bridge critical gaps in education, leadership, and 					safety for communities that need it the most. 
            </p>
            
            <p className="text-muted-foreground">
              By addressing both immediate needs and long-term aspirations, we aim to inspire meaningful transformation, ensuring that each child and 			youth we reach embarks on a journey towards a fulfilling and impactful life. Together, we are not just shaping individuals; we are 						empowering communities for a stronger, more equitable future.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const ChallengesSection = () => {
  const challenges = [
    {
      title: "Broken Foundations",
      description:
        "Across rural and urban settings, many schools fail to provide holistic education due to outdated teaching methods, lack of adequate resources, and systemic inefficiencies, leaving children unprepared for real-world challenges with a weak foundation. ",
      icon: <Book className="h-8 w-8 text-primary" />,
    },
    {
      title: "Institutions Falling Short",
      description:
        "Educational institutions in rural settings often lack the infrastructure and support needed to impart relevant skills, emotional resilience, and critical thinking, leaving students underprepared for modern opportunities.",
      icon: <Heart className="h-8 w-8 text-primary" />,
    },
    {
      title: "The Weight of Inequality",
      description:
        "Economic struggles and social marginalization continue to deprive children and youth of essential support, stifling their dreams and limiting their potential in both rural and urban underserved communities ",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
    },
    {
      title: "The Awareness Deficit",
      description:
        "Many children in rural and urban low-resource areas grow up with limited access to safe spaces, diverse opportunities, and critical knowledge, leaving them vulnerable and unprepared to navigate challenges like personal safety and child protection. ",
      icon: <Users className="h-8 w-8 text-primary" />,
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
            Key <span className="text-primary">Challenges</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We address some of the most pressing challenges faced by underprivileged communities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {challenge.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                <p className="text-muted-foreground">{challenge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const YouTubeSection = () => {
  interface YouTubeVideoProps {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  videoId: any
  title?: string
  className?: string
}
  // YouTube video IDs - replace with actual video IDs
  const videos = [
    {
      id: "dQw4w9WgXcQ", // Replace with actual video ID
      title: "Tarunya Foundation - Empowering Lives",
      description: "Learn about our mission to transform communities through education and empowerment initiatives."
    },
    {
      id: "dQw4w9WgXcQ", // Replace with actual video ID
      title: "Our Impact Journey",
      description: "See how we've made a difference in the lives of thousands of children and families."
    },
    {
      id: "dQw4w9WgXcQ", // Replace with actual video ID
      title: "Vidiyal Learning Center",
      description: "Discover how we're bridging educational gaps in rural communities through our learning centers."
    },
    {
      id: "dQw4w9WgXcQ", // Replace with actual video ID
      title: "Vriksham Youth Leadership",
      description: "Watch how our youth leadership program is creating tomorrow's community leaders."
    },
    {
      id: "dQw4w9WgXcQ", // Replace with actual video ID
      title: "Project Vishwas",
      description: "Learn about our child safety initiative and how it's protecting vulnerable children."
    },
  ];

  // Function to load YouTube iframe
  const YouTubePlayer = ({ videoId, title }: YouTubeVideoProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    
    return (
      <div className="relative h-0 pb-[56.25%] rounded-lg overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 bg-secondary flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
        ></iframe>
      </div>
    );
  };

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
            We Are Also on <span className="text-primary">YouTube</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Watch our latest videos to learn more about our work and impact.
          </motion.p>
        </div>

        {/* Horizontal scrollable container */}
        <div className="relative">
          {/* Navigation buttons */}
          
          

          {/* Video cards */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-[75%] md:w-96 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <YouTubePlayer videoId={video.id} title={video.title} />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                    <p className="text-muted-foreground">{video.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
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
      image: "/home/4.jpg",
      link:'/programs/vidiyal'
    },
    {
      title: "Vriksham Youth Leadership Program",
      description: "Vriksham empowers rural youth with the socio-emotional skills, career readiness, and confidence they need to succeed. This one-year hybrid program equips participants with tools for holistic growth, enabling them to overcome systemic challenges, embrace leadership roles, and achieve their aspirations. ",
      image: "/home/3.jpg",
      link:'/programs/vylp'
    },
    {
      title: "Vishwas",
      description: "Project Vishwas champions the cause of child safety and protection through awareness and training on the POCSO Act. By educating children, parents, and communities in both rural and urban areas, the project fosters safe spaces and ensures that every child understands their rights, boundaries, and the importance of personal safety.",
      image: "/home/5.jpg",
      link:'/programs/vishwa'
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
                    <Link href={project.link}>Learn More</Link>
                  </Button>
                </div>
              }
            />
          ))}
        </div>

        
      </div>
    </section>
  )
}
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "During one of the reflective sessions, I realized that I have been underestimating myself and that led me to behave selfishly with everyone. I was surprised to see my friends support and empathize with me while holding space for me to learn. I am very strongly practicing Empathy and Commitment as my values. My English buddy call with Vishal anna is supporting me to improve my English Language skills and I am also learning punctuality from him.",
      author: " Nandhini,  ",
      role: "VLC Program Student",
      image: "/Individuals/Students/Nandhini.jpg",
    },
    {
      quote:
        "Here we are not only learning skills but also ways of living life. I have started to understand the importance and ways of being a responsible citizen. I feel glad to see the progress I have made in my English skills. I feel confident speaking in English in a group. I am also being supported step by step to plan and work on my dream career. Through monthly calls, my mentor and I create a learning plan and curate tasks that will help me achieve my goals.",
      author: "Pavithra",
      role: "VYLP Student (B.A Economics)",
      image: "/Individuals/Students/Pavithra.jpg",
    },
    {
      quote: "During the COVID-19 lock down, our children were tired of spending time at home watching television. Vidiyal Learning Centre supported them through this period by organizing sessions and activities at the Centre, encouraging reading books in the Vidiyal Library, practicing spoken English, sharpening their existing talents through practice at the center, and buttressing instructions in academic subjects for children unable to attend classes",
      author: "Saroja.",
      role: "Mother of VLC student Lalitha",
      image: "/Individuals/Students/Saroja.png",
    },
    {
      quote: "Volunteering with Tarunya has been one of the highlights of my year. It has been an absolute joy to interact and get to know the wonderful children of Tarunya. While I hope that I have been able to teach them a few things about polity and legal awareness, I am so grateful to the kids for all the positivity, fun, and inquisitiveness they bring to every session.",
      author: "Juhi Srivastava,",
      role: "VLC Volunteer Facilitator",
      image: "/Individuals/Students/Juhi-srivastava.jpeg",
    },
    {
      quote: "It was a very significant learning journey for me. Through this internship, I was able to identify my strengths and weaknesses more clearly. It improved my confidence and also increased my awareness about the community and challenges associated with it. I am grateful to both akkas for guiding at every step to make the most out of the internship",
      author: "Karthick.",
      role: "Community Library Intern",
      image: "/Individuals/Students/Karthick.jpg",
    },
  ]
  return (
    <ParallaxSection bgImage="/Community-Library.jpg" className="py-20 text-white">
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
            className="max-w-2xl mx-auto text-sm md:text-base"
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
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary-foreground">
                      <Image
                        src={testimonial.image || "/cnff.jpg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm md:text-xl mb-4 italic">&quot;{testimonial.quote}&quot;</p>
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
  );
}
const PartnersSection = () => {
  const partners = Array(5).fill("/glb.jpg"); 

  return (
    <section className="py-20 bg-[url('/bgg.jpg')] bg-cover bg-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className="text-primary">Supporters</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We are immensely grateful to these organizations for believing in us and supporting our cause.
          </motion.p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="overflow-hidden relative">
          <div className="flex gap-12 md:gap-28 animate-scroll-horizontal">
            {/* First Set of Logos */}
            {partners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-20 h-20 md:w-32 md:h-32 mx-4 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={partner || "/placeholder.svg"}
                  alt={`Partner ${index + 1}`}
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            ))}
            {/* Second Set of Logos (Duplicated for Seamless Loop) */}
            {partners.map((partner, index) => (
              <div key={`${index}-copy`} className="flex-shrink-0 w-20 h-20 md:w-32 md:h-32 mx-4 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={partner || "/placeholder.svg"}
                  alt={`Partner ${index + 1}`}
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
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
               <Link href={"/donate"}>Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-primary border-white hover:bg-white/10 button-ripple">
              <Link href={"/volunteer"}>Volunteer</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

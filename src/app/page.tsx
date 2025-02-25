"use client"

import RootLayout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Home() {
  return (
    <RootLayout>
      <div className="min-h-screen bg-ngo-dark text-ngo-light">
      <HeroSection />
      <MissionSection />
      <ProjectsSection />
      <ImpactSection />
      <CallToActionSection />
    </div>
    </RootLayout>
  )
}

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 z-0"
    >
      <Image
        src="/hh.jpg"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </motion.div>
    <div className="relative z-10 text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-8"
      >
        <div className="w-32 h-32 mx-auto bg-ngo-accent rounded-full flex items-center justify-center">
          <span className="text-4xl font-bold text-ngo-dark">NGO</span>
        </div>
      </motion.div>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-shadow"
      >
        Change the World
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-xl md:text-2xl mb-8 text-shadow"
      >
        Join us in making a difference, one step at a time.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Button size="lg" className="bg-ngo-accent hover:bg-ngo-accent-dark text-ngo-dark font-bold">
          Get Involved
        </Button>
      </motion.div>
    </div>
  </section>
)

const MissionSection = () => (
  <section className="py-20 bg-ngo-light text-ngo-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">Our Mission</h2>
        <p className="mt-4 text-xl max-w-2xl mx-auto">
          We strive to create a world where everyone has access to education, healthcare, and a clean environment.
        </p>
      </motion.div>
    </div>
  </section>
)

const ProjectsSection = () => (
  <section className="py-20 bg-gradient">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-ngo-light sm:text-4xl mb-12 text-center">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Education", "Healthcare", "Environment"].map((project, index) => (
          <motion.div
            key={project}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-ngo-light rounded-lg shadow-lg overflow-hidden hover-scale"
          >
            <Image
              src={`/${project.toLowerCase()}-project.jpg`}
              alt={`${project} project`}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-ngo-dark">{project}</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button
                variant="outline"
                className="text-ngo-dark border-ngo-dark hover:bg-ngo-accent hover:text-ngo-dark"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const ImpactSection = () => (
  <section className="py-20 bg-ngo-light text-ngo-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold sm:text-4xl mb-12 text-center">Our Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { number: "10M+", label: "Lives Impacted" },
          { number: "50+", label: "Countries Reached" },
          { number: "100+", label: "Ongoing Projects" },
        ].map(({ number, label }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold mb-2 text-ngo-accent">{number}</h3>
            <p className="text-xl">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const CallToActionSection = () => (
  <section className="py-20 bg-gradient">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-ngo-light">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-extrabold sm:text-4xl mb-8">Ready to Make a Difference?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join us in our mission to create a better world. Every contribution, big or small, can make a lasting impact.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" className="bg-ngo-accent hover:bg-ngo-accent-dark text-ngo-dark font-bold">
            Donate Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-ngo-light border-ngo-light hover:bg-ngo-light hover:text-ngo-dark"
          >
            Volunteer
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
)


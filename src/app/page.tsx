"use client"

import RootLayout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Home() {
  return (
    <RootLayout>
      <div className="min-h-screen">
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
    <Image
      src="/hero.jpeg"
      alt="Hero background"
      layout="fill"
      objectFit="cover"
      quality={100}
      className="absolute z-0"
    />
    <div className="relative z-10 text-center text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        Change the World
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl mb-8"
      >
        Join us in making a difference, one step at a time.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
          Get Involved
        </Button>
      </motion.div>
    </div>
  </section>
)

const MissionSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h2>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          We strive to create a world where everyone has access to education, healthcare, and a clean environment.
        </p>
      </motion.div>
    </div>
  </section>
)

const ProjectsSection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12 text-center">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Education", "Healthcare", "Environment"].map((project, index) => (
          <motion.div
            key={project}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={`/hh.jpg`}
              alt={`${project} project`}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project}</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button variant="outline">Learn More</Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const ImpactSection = () => (
  <section className="py-20 bg-blue-600 text-white">
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
            <h3 className="text-4xl font-bold mb-2">{number}</h3>
            <p className="text-xl">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const CallToActionSection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Ready to Make a Difference?</h2>
        <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
          Join us in our mission to create a better world. Every contribution, big or small, can make a lasting impact.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Donate Now
          </Button>
          <Button size="lg" variant="outline">
            Volunteer
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
)


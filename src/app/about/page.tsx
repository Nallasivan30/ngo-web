"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen bg-ngo-dark text-ngo-light">
      <HeroSection />
      <OurStorySection />
      <TeamSection />
      <ValuesSection />
    </div>
  )
}

const HeroSection = () => (
  <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 z-0"
    >
      <Image
        src="https://sjc.microlink.io/f_KiOXj96La8-w7mLa0j4tof7kVrKUzGNPU7mDt6vqbQx9LfFcLIMBDs1rdxqej4AkP7UYtK8sjtfzDyB23kzA.jpeg"
        alt="About hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </motion.div>
    <div className="relative z-10 text-center">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-shadow"
      >
        About Us
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl text-shadow"
      >
        Dedicated to making a difference in the world
      </motion.p>
    </div>
  </section>
)

const OurStorySection = () => (
  <section className="py-20 bg-ngo-light text-ngo-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">Our Story</h2>
        <p className="mt-4 text-xl max-w-2xl mx-auto">
          From humble beginnings to a global force for change, our journey has been one of passion and perseverance.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image src="/our-story.jpg" alt="Our story" width={600} height={400} className="rounded-lg shadow-lg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-4">
            Founded in 2005, our NGO started with a simple idea: to make a positive impact on the world. What began as a
            small group of dedicated volunteers has grown into a global organization with a presence in over 50
            countries.
          </p>
          <p className="text-lg">
            Through the years, we have faced challenges, celebrated victories, and learned valuable lessons. But our core
            mission has remained the same: to create a world where everyone has access to education, healthcare, and a
            clean environment.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
)

const TeamSection = () => (
  <section className="py-20 bg-gradient">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-extrabold text-ngo-light sm:text-4xl mb-12 text-center"
      >
        Our Team
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Jane Doe", role: "Executive Director", image: "/team-member-1.jpg" },
          { name: "John Smith", role: "Operations Manager", image: "/team-member-2.jpg" },
          { name: "Emily Brown", role: "Program Coordinator", image: "/team-member-3.jpg" },
        ].map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-ngo-light rounded-lg shadow-lg overflow-hidden hover-scale"
          >
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-ngo-dark">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const ValuesSection = () => (
  <section className="py-20 bg-ngo-light text-ngo-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-extrabold sm:text-4xl mb-12 text-center"
      >
        Our Values
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Compassion", description: "We approach our work with empathy and understanding." },
          { title: "Integrity", description: "We uphold the highest ethical standards in all our actions." },
          { title: "Innovation", description: "We constantly seek new and better ways to create impact." },
        ].map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-ngo-accent">{value.title}</h3>
            <p className="text-lg">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)


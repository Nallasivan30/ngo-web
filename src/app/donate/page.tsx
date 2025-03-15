
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent,} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Check, Users, Book, Briefcase } from "lucide-react"
import { Loading } from "@/components/loading"
import RootLayout from "@/components/layout"
import Link from 'next/link';


export default function Donate() {
  const [isLoading, setIsLoading] = useState(true)
  const [donationAmount, setDonationAmount] = useState("500")
  const [customAmount, setCustomAmount] = useState("")
  const [donationFrequency, setDonationFrequency] = useState("monthly")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isDonationComplete, setIsDonationComplete] = useState(false)


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate donation processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsDonationComplete(true)
    }, 2000)
  }

  if (isLoading) return <Loading />

  return (
    <RootLayout>
        <div className="overflow-hidden">
      <HeroSection />
      {isDonationComplete ? (
        <ThankYouSection />
      ) : (
        <>
          <ImpactSection />
          <DonationFormSection
            donationAmount={donationAmount}
            setDonationAmount={setDonationAmount}
            customAmount={customAmount}
            setCustomAmount={setCustomAmount}
            donationFrequency={donationFrequency}
            setDonationFrequency={setDonationFrequency}
            handleDonationSubmit={handleDonationSubmit}
            isProcessing={isProcessing}
          />
        </>
      )}
      <WhyDonateSection />
    </div>
    </RootLayout>
  )
}

const HeroSection = () => (
  <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
    <div className="absolute inset-0 z-0">
      <Image src="/dnt.jpg" alt="Donate hero background" fill className="object-cover opacity-75" priority />
    </div>
    <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <Heart className="h-16 w-16 mx-auto text-primary-foreground" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Support Tarunya Foundation
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl max-w-2xl mx-auto"
      >
        Your donation empowers underprivileged communities through education, healthcare, and sustainable development.
      </motion.p>
    </div>
  </section>
)

const ImpactSection = () => {
  const impacts = [
    {
      icon: <Book className="h-8 w-8 text-primary" />,
      title: "₹500",
      description: "Supports a child's education for a month.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "₹1,000",
      description: "Provides healthcare services to a family.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "₹2,500",
      description: "Funds vocational training for women.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "₹5,000",
      description: "Supports community development programs.",
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
            Your <span className="text-primary">Impact</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            See how your donation can make a real difference in our work.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {impact.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{impact.title}</h3>
                  <p className="text-muted-foreground">{impact.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface DonationFormSectionProps {
  donationAmount: string
  setDonationAmount: (amount: string) => void
  customAmount: string
  setCustomAmount: (amount: string) => void
  donationFrequency: string
  setDonationFrequency: (frequency: string) => void
  handleDonationSubmit: (e: React.FormEvent) => void
  isProcessing: boolean
}

const DonationFormSection = ({
  donationAmount,
  setDonationAmount,
  customAmount,
  setCustomAmount,
  donationFrequency,
  setDonationFrequency,
  handleDonationSubmit,
  isProcessing,
}: DonationFormSectionProps) => {
  const handleAmountChange = (amount: string) => {
    setDonationAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === "" || /^\d+$/.test(value)) {
      setCustomAmount(value)
      setDonationAmount("custom")
    }
  }

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Make Your <span className="text-primary">Donation</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Choose your donation amount and frequency. Every contribution helps us empower communities.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleDonationSubmit}>
                  <div className="space-y-8">
                    {/* Donation Frequency */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Donation Frequency</h3>
                      <Tabs value={donationFrequency} onValueChange={setDonationFrequency} className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="monthly">Monthly</TabsTrigger>
                          <TabsTrigger value="onetime">One-time</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>

                    {/* Donation Amount */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Donation Amount</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        {["500", "1000", "2500", "5000"].map((amount) => (
                          <Button
                            key={amount}
                            type="button"
                            variant={donationAmount === amount ? "default" : "outline"}
                            className="w-full"
                            onClick={() => handleAmountChange(amount)}
                          >
                            ₹{amount}
                          </Button>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          type="button"
                          variant={donationAmount === "custom" ? "default" : "outline"}
                          className="whitespace-nowrap"
                          onClick={() => setDonationAmount("custom")}
                        >
                          Custom Amount
                        </Button>
                        <Input
                          type="text"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          placeholder="Enter amount"
                          className="max-w-[150px]"
                          onClick={() => setDonationAmount("custom")}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full button-ripple"
                      disabled={isProcessing || (donationAmount === "custom" && !customAmount)}
                    >
                      {isProcessing ? (
                        <>
                          <span className="mr-2">Processing...</span>
                          <div className="h-4 w-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin"></div>
                        </>
                      ) : (
                        `Donate ${donationAmount === "custom" ? `₹${customAmount}` : `₹${donationAmount}`} ${donationFrequency === "monthly" ? "Monthly" : ""}`
                      )}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      Your donation is tax-deductible under Section 80G of the Income Tax Act.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const ThankYouSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Thank You for Your Donation!</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Your generous contribution will help us continue our work to empower communities through education, healthcare,
          and sustainable development. A receipt has been sent to your email.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="button-ripple">  
            <Link href="/">Return to Homepage</Link>
          </Button>
          <Button asChild variant="outline" className="button-ripple">
            <Link href="/projects">Explore Our Projects</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
)

const WhyDonateSection = () => {
  const reasons = [
    {
      icon: <Book className="h-8 w-8 text-primary" />,
      title: "Education",
      description: "Your donation helps provide quality education to underprivileged children.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Healthcare",
      description: "Supports healthcare initiatives for families in need.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Livelihood",
      description: "Empowers women through vocational training and skill development.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community",
      description: "Funds community development programs for sustainable growth.",
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
            Why <span className="text-primary">Donate</span> to Tarunya Foundation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Your donation makes a real difference in our ability to create positive change.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
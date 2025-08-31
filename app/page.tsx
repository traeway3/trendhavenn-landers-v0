"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Lock, Smartphone, Gift, MessageSquare, Coins, Shield, Users, Play } from "lucide-react"
import Image from "next/image"

export default function PlayfulRewardsLanding() {
  const [progress, setProgress] = useState(85)
  const searchParams = useSearchParams()

  const buildAffiliateLink = () => {
    const baseUrl = "https://rewarduplevel.com/aff_c?offer_id=2414&aff_id=27696&source=126-pics-vid-playful2691-bc804"
    const params = new URLSearchParams()

    // Add existing params
    searchParams.forEach((value, key) => {
      if (key.startsWith("utm_") || key === "ttclid") {
        params.append(key, value)
      }
    })

    return params.toString() ? `${baseUrl}&${params.toString()}` : baseUrl
  }

  // Track events to dataLayer
  const trackEvent = (eventName: string, data?: any) => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...data,
      })
    }
  }

  // Handle CTA click
  const handleCTAClick = () => {
    trackEvent("cta_clicked")
    window.open(buildAffiliateLink(), "_self")
  }

  useEffect(() => {
    trackEvent("hero_viewed")
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Trust Header - Sticky */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/plyylogo.png" alt="Playful Rewards" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-lg">Playful Rewards</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Verified Offer</span>
          </div>

          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">Secure redirect</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Play Games. <span className="text-primary">Earn Rewards.</span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty mb-8">
              Complete simple tasks on your phone—games or short surveys—and redeem coins for cash or gift cards.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2">
                <Gift className="w-4 h-4 mr-2" />
                Free to download
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Verified offer
              </Badge>
            </div>

            <Button size="lg" className="text-lg px-8 py-6 mb-4" onClick={handleCTAClick}>
              Get Playful Rewards
            </Button>

            <p className="text-sm text-muted-foreground">Rewards subject to meeting game challenges and survey tasks</p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 mb-8">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress</span>
            <span>{progress}% complete</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-accent h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Answer Questions</h3>
                <p className="text-sm text-muted-foreground">Complete quick 3-question surveys</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Download App</h3>
                <p className="text-sm text-muted-foreground">Get Playful Rewards on iOS or Android</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Play & Earn</h3>
                <p className="text-sm text-muted-foreground">Complete game challenges to earn coins</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coins className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Cash Out</h3>
                <p className="text-sm text-muted-foreground">Redeem coins for cash or gift cards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Recent Earners</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { initial: "M***", amount: "$15", time: "today" },
              { initial: "S***", amount: "$23", time: "2 hours ago" },
              { initial: "J***", amount: "$8", time: "4 hours ago" },
              { initial: "A***", amount: "$31", time: "6 hours ago" },
            ].map((earner, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-4 h-4 text-accent" />
                  </div>
                  <p className="font-bold text-accent">{earner.amount}</p>
                  <p className="text-xs text-muted-foreground">
                    {earner.initial} earned {earner.time}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">How do I earn?</h3>
                <p className="text-muted-foreground">
                  You gain coins by playing featured games and answering surveys. Tasks might include reaching certain
                  game levels or making optional purchases.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">What devices are supported?</h3>
                <p className="text-muted-foreground">
                  Playful Rewards is available on both iOS and Android devices through the App Store and Google Play.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">When can I cash out?</h3>
                <p className="text-muted-foreground">
                  You can redeem coins for cash or gift cards once you reach the payout minimum threshold.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">Do I need to spend money?</h3>
                <p className="text-muted-foreground">
                  Most tasks involve free-to-play games. Some may ask for in-app purchases but participation is
                  optional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t border-border p-4 md:hidden z-40">
        <Button className="w-full py-6 text-lg" onClick={handleCTAClick}>
          Get Playful Rewards - Free Download
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-muted py-12 pb-20 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Playful Rewards is not affiliated with TikTok or any other social network.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Support
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              Results may vary by user and tasks completed. Individual earnings not guaranteed.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

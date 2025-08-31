// Utility functions for affiliate link management and A/B testing

export interface AffiliateParams {
  ttclid?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  geo?: string
}

export const buildAffiliateLink = (params: AffiliateParams = {}): string => {
  const baseUrl =
    process.env.NEXT_PUBLIC_AFF_LINK ||
    "https://rewarduplevel.com/aff_c?offer_id=2691&aff_id=27696&source=126-pics-vid-playful2691-bc803.html"

  const urlParams = new URLSearchParams()

  // Add all provided params
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      urlParams.append(key, value)
    }
  })

  return urlParams.toString() ? `${baseUrl}&${urlParams.toString()}` : baseUrl
}

// A/B Testing scaffold
export interface ABTestVariant {
  id: string
  name: string
  weight: number
}

export const getABTestVariant = (testName: string, variants: ABTestVariant[]): string => {
  // Simple hash-based variant selection for consistent user experience
  const userId =
    typeof window !== "undefined"
      ? localStorage.getItem("user_id") || Math.random().toString(36)
      : Math.random().toString(36)

  if (typeof window !== "undefined") {
    localStorage.setItem("user_id", userId)
  }

  const hash = userId.split("").reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0)
    return a & a
  }, 0)

  const totalWeight = variants.reduce((sum, variant) => sum + variant.weight, 0)
  const normalizedHash = Math.abs(hash) % totalWeight

  let currentWeight = 0
  for (const variant of variants) {
    currentWeight += variant.weight
    if (normalizedHash < currentWeight) {
      return variant.id
    }
  }

  return variants[0]?.id || "default"
}

// Analytics helper
export const trackConversion = (eventName: string, data: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      timestamp: new Date().toISOString(),
      ...data,
    })
  }
}

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "Voice-Driven Documentation Assistant",
    "one_liner": "Generate technical documentation from voice memos during development sessions.",
    "why_now": "With remote teams becoming more prevalent, efficient documentation processes are essential.",
    "novel_mechanism": "Uses voice recognition to convert discussions into structured documentation formats.",
    "ai_stack": [
      "GPT",
      "Speech",
      "Embeddings"
    ],
    "edge_use_cases": [
      "On-the-fly API documentation",
      "Meeting notes conversion",
      "Code comments generation"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Voice recognition integration",
        "Document formatting engine",
        "Basic UI"
      ],
      "tools": [
        "React",
        "Firebase",
        "Twilio"
      ],
      "data_bootstrap": [
        "Public tech documentation APIs",
        "Existing repo wikis",
        "Voice recordings from teams"
      ],
      "risk": [
        "Technical accuracy of transcription",
        "User adoption challenges"
      ],
      "mitigation": [
        "Testing with a user group",
        "Incorporate user feedback loops"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Live demo of documentation speed-up",
        "Before/after documentation quality showcase"
      ],
      "channels": [
        "ProductHunt",
        "Dev.to",
        "LinkedIn"
      ],
      "pricing": {
        "free": "Basic features",
        "pro": "Advanced formatting",
        "business": "Team licenses with analytics"
      }
    },
    "moat": [
      "Integration with existing development tools",
      "User-generated template library",
      "Voice transcription dataset for continuous improvement"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 9,
      "defensibility": 7
    },
    "total_score": 31,
    "reasoning": "Focuses on a less explored aspect of voice technology in coding, addressing real developer pain points beyond initial code generation."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Freelancer Contract & Payment Tracker',
  description: 'Track milestone payments across multiple clients automatically. Automated reminders, cash flow projections, and subscription billing for freelancers and agencies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b034bbc7-4335-40eb-b44a-97d8c42c16e2"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}

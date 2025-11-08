import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI導入戦略 - 中小企業向けAIコンサルティングアプローチ',
  description: '心理学とエビデンスに基づく、地方中小企業のAI導入コンサルティング戦略',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}

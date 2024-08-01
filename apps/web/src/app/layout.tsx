import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nextjs SaaS RBAC',
  description: 'Nextjs SaaS with multi-tenant & RBAC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import React from 'react'
import type { Metadata } from 'next'
import { AppShell } from './_layout/app-shell/AppShell'

export const metadata: Metadata = {
  title: 'Miho Inagaki',
  description: "Miho Inagaki's portfolio"
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}

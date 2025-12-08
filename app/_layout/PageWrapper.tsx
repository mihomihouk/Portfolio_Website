'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { Global } from '@emotion/react'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}
export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  )
}

function GridItemStyle() {
  return (
    <Global
      styles={`
  .grid-item-thumbnail {
    border-radius:12px
  }
  `}
    />
  )
}

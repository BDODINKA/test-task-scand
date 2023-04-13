import React from 'react'

export interface ITitle {
  size: 'sm-h6' | 'sm-h5' | 'md-h4' | 'md-h3' | 'lg-h2' | 'lg-h1'
  children: React.ReactNode
  className?: string
}

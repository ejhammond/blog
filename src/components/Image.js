import React from 'react'

export const Image = ({ src, alt, caption }) => {
  return (
    <div>
      <img src={src} alt={alt} />
      <caption>{caption}</caption>
    </div>
  )
}

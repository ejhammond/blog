import React from 'react'

export const Image = ({ src, alt, caption, ...figureProps }) => {
  const { style: figureStyle = {}, ...otherFigureProps } = figureProps

  return (
    <figure
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ...figureStyle,
      }}
      {...otherFigureProps}
    >
      <img src={src} style={{ marginBottom: 0 }} alt={alt || caption} />
      <figcaption style={{ fontStyle: 'italic' }}>{caption}</figcaption>
    </figure>
  )
}

import React from 'react';

export const Image = (props) => {
  const { figureProps = {}, captionProps = {}, caption, ...imgProps } = props;

  const { style: figureStyle = {}, ...otherFigureProps } = figureProps;

  const { alt, style: imgStyle = {}, ...otherImgProps } = imgProps;

  const { captionStyle = {}, ...otherCaptionProps } = captionProps;

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
      <img style={{ marginBottom: 0, ...imgStyle }} alt={alt || caption} {...otherImgProps} />
      <figcaption
        style={{ fontSize: '0.8rem', fontStyle: 'italic', ...captionStyle }}
        {...otherCaptionProps}
      >
        {caption}
      </figcaption>
    </figure>
  );
};

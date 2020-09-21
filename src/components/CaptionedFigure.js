import React from 'react';
import { responsive } from '../responsive-system';

export const Figure = responsive((props) => {
  const { style = {}, ...otherProps } = props;

  return (
    <figure
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ...style,
      }}
      {...otherProps}
    />
  );
});

export const Caption = (props) => {
  const { style = {}, ...otherProps } = props;

  return (
    <figcaption style={{ fontSize: '0.8rem', fontStyle: 'italic', ...style }} {...otherProps} />
  );
};

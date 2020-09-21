import * as React from 'react';
import { primary, textKnockout } from '../utils/theme-colors';

export function Tag({ children, style: delegatedStyle, ...delegated }) {
  return (
    <div
      style={{
        backgroundColor: primary,
        color: textKnockout,
        fontSize: '0.75rem',
        borderRadius: '4px',
        padding: '4px 8px',
        ...delegatedStyle,
      }}
      {...delegated}
    >
      {children}
    </div>
  );
}

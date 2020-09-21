import * as React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

export function ErrorMessage({ children, title = 'Error', style: delegatedStyle, ...delegated }) {
  return (
    <Alert
      severity="error"
      style={{ marginBottom: 30, borderLeft: '6px solid #f44336', ...delegatedStyle }}
      {...delegated}
    >
      {title !== null && <AlertTitle>{title}</AlertTitle>}
      {children}
    </Alert>
  );
}

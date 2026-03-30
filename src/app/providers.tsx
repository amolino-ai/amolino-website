'use client';

import { MantineProvider, createTheme } from '@mantine/core';

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    primaryColor: 'blue',
  });

  return (
    <MantineProvider theme={theme}>{children}</MantineProvider>
  );
}

// components/Layout.tsx
import { Container } from '@/components/container';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/Navbar';
import { LogoCloud } from '@/components/logo-cloud';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      {children}
      <LogoCloud />
    </>
  );
}
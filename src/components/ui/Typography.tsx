import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function Heading1({ children, className = '' }: TypographyProps) {
  return (
    <h1
      className={`text-4xl font-bold tracking-tight ${className}`}
      style={{
        fontFamily: 'var(--font-montserrat)',
        fontSize: '2.25rem', // 36px
        fontWeight: 700,
      }}
    >
      {children}
    </h1>
  );
}

export function Heading2({ children, className = '' }: TypographyProps) {
  return (
    <h2
      className={`text-3xl font-bold tracking-tight ${className}`}
      style={{
        fontFamily: 'var(--font-montserrat)',
        fontSize: '1.875rem', // 30px
        fontWeight: 700,
      }}
    >
      {children}
    </h2>
  );
}

export function Heading3({ children, className = '' }: TypographyProps) {
  return (
    <h3
      className={`text-2xl font-bold tracking-tight ${className}`}
      style={{
        fontFamily: 'var(--font-montserrat)',
        fontSize: '1.5rem', // 24px
        fontWeight: 700,
      }}
    >
      {children}
    </h3>
  );
}

export function Paragraph({ children, className = '' }: TypographyProps) {
  return (
    <p
      className={`text-base leading-relaxed ${className}`}
      style={{
        fontFamily: 'var(--font-roboto)',
        fontSize: '1rem', // 16px
        fontWeight: 400,
      }}
    >
      {children}
    </p>
  );
}

export function AccentText({ children, className = '' }: TypographyProps) {
  return (
    <span
      className={`font-medium ${className}`}
      style={{
        fontFamily: 'var(--font-poppins)',
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

// Usage example:
// <Heading1>This uses the heading font</Heading1>
// <Paragraph>This uses the primary font</Paragraph>
// <AccentText>This uses the accent font</AccentText>

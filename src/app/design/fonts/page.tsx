import { Heading1, Heading2, Paragraph } from '@/components';

export default function FontsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Heading1 className="mb-8">Font System Documentation</Heading1>

      <section className="mb-12">
        <Heading2 className="mb-4">Primary Font (Roboto)</Heading2>
        <div className="grid gap-4">
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <p className="text-sm mb-2 text-gray-500">Regular Text (16px)</p>
            <Paragraph className="text-lg">
              This is the primary font (Roboto) used for body text throughout the application. It provides excellent
              readability for longer paragraphs and general content.
            </Paragraph>
          </div>

          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <p className="text-sm mb-2 text-gray-500">Bold Text</p>
            <p
              style={{
                fontFamily: 'var(--font-roboto)',
                fontSize: '1.125rem',
                fontWeight: 700,
                lineHeight: 1.5,
              }}
            >
              This is bold text using the primary font (Roboto). It&apos;s useful for emphasizing important information
              within paragraphs.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <p className="text-sm mb-2 text-gray-500">Different Sizes</p>
            <div className="space-y-2">
              <p style={{ fontFamily: 'var(--font-roboto)', fontSize: '0.75rem' }}>Extra Small (12px) - Roboto</p>
              <p style={{ fontFamily: 'var(--font-roboto)', fontSize: '0.875rem' }}>Small (14px) - Roboto</p>
              <p style={{ fontFamily: 'var(--font-roboto)', fontSize: '1rem' }}>Base (16px) - Roboto</p>
              <p style={{ fontFamily: 'var(--font-roboto)', fontSize: '1.125rem' }}>Large (18px) - Roboto</p>
              <p style={{ fontFamily: 'var(--font-roboto)', fontSize: '1.25rem' }}>Extra Large (20px) - Roboto</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <Heading2 className="mb-4">Heading Font (Montserrat)</Heading2>
        <div className="grid gap-4">
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <p className="text-sm mb-2 text-gray-500">Heading Examples</p>
            <h1
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '2.25rem',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              Heading 1 (36px) - Montserrat
            </h1>
            <h2
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '1.875rem',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              Heading 2 (30px) - Montserrat
            </h2>
            <h3
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '1.5rem',
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Heading 3 (24px) - Montserrat
            </h3>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <Heading2 className="mb-4">Accent Font (Poppins)</Heading2>
        <div className="grid gap-4">
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <p className="text-sm mb-2 text-gray-500">Accent Text Examples</p>
            <p style={{ fontFamily: 'var(--font-roboto)', fontSize: '1.125rem', lineHeight: 1.5 }}>
              Regular text with{' '}
              <span
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 500,
                  color: '#2563eb',
                }}
              >
                accent text (Poppins)
              </span>{' '}
              embedded within it. The accent font is used for{' '}
              <span
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 700,
                  color: '#2563eb',
                }}
              >
                special emphasis (Poppins)
              </span>{' '}
              or UI elements that need to stand out.
            </p>

            <div className="mt-6 space-y-3">
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  color: '#2563eb',
                  display: 'block',
                }}
              >
                Standalone accent text (Poppins 18px)
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#2563eb',
                  display: 'block',
                }}
              >
                Bold accent text (Poppins 20px)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Heading2 className="mb-4">How to Change Fonts</Heading2>
        <div className="p-6 border rounded-lg bg-white shadow-sm">
          <Paragraph className="mb-4">
            To change the fonts used in the application, simply update the{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">fonts</code> object in{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">src/lib/fonts/index.ts</code>:
          </Paragraph>

          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            {`export const fonts = {
  // Primary font used for most text
  primary: fontOptions.roboto,  // Change to fontOptions.inter or any other
  
  // Secondary font used for headings
  heading: fontOptions.montserrat,  // Change to fontOptions.poppins or any other
  
  // Accent font used for special elements
  accent: fontOptions.poppins,  // Change to fontOptions.openSans or any other
};`}
          </pre>
        </div>
      </section>
    </div>
  );
}

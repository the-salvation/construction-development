export default function TestFontsPage() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold">Font Test Page</h1>

      <div className="p-6 border rounded-lg">
        <h2 className="text-xl mb-4">Direct Font Family Test</h2>

        <p className="mb-4" style={{ fontFamily: 'var(--font-roboto)' }}>
          This text should be in Roboto font (Primary)
        </p>

        <p className="mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
          This text should be in Montserrat font (Heading)
        </p>

        <p className="mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
          This text should be in Poppins font (Accent)
        </p>
      </div>

      <div className="p-6 border rounded-lg">
        <h2 className="text-xl mb-4">Tailwind Class Test</h2>

        <p className="mb-4 font-sans">This text should be in Roboto font using the font-sans class</p>

        <p className="mb-4 font-heading">This text should be in Montserrat font using the font-heading class</p>

        <p className="mb-4 font-accent">This text should be in Poppins font using the font-accent class</p>
      </div>

      <div className="p-6 border rounded-lg">
        <h2 className="text-xl mb-4">Font Comparison</h2>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <h3 className="font-bold mb-2" style={{ fontFamily: 'var(--font-roboto)' }}>
              Roboto
            </h3>
            <p style={{ fontFamily: 'var(--font-roboto)' }}>
              ABCDEFGHIJKLM
              <br />
              NOPQRSTUVWXYZ
              <br />
              abcdefghijklm
              <br />
              nopqrstuvwxyz
              <br />
              0123456789
            </p>
          </div>

          <div className="p-4 border rounded">
            <h3 className="font-bold mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Montserrat
            </h3>
            <p style={{ fontFamily: 'var(--font-montserrat)' }}>
              ABCDEFGHIJKLM
              <br />
              NOPQRSTUVWXYZ
              <br />
              abcdefghijklm
              <br />
              nopqrstuvwxyz
              <br />
              0123456789
            </p>
          </div>

          <div className="p-4 border rounded">
            <h3 className="font-bold mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
              Poppins
            </h3>
            <p style={{ fontFamily: 'var(--font-poppins)' }}>
              ABCDEFGHIJKLM
              <br />
              NOPQRSTUVWXYZ
              <br />
              abcdefghijklm
              <br />
              nopqrstuvwxyz
              <br />
              0123456789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

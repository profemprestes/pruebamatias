import type { Metadata } from 'next';
import { Poppins } from 'next/font/google'; // Use Poppins for a friendly look
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Include weights needed
  variable: '--font-poppins', // Keep variable definition for CSS
});


export const metadata: Metadata = {
  title: 'Invitacion a Cumple', // Updated title
  description: '¡Responde algunas preguntas para ver la invitación!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply the font variable class to the <html> tag
    <html lang="es" className={`${poppins.variable}`}>
      {/* Keep base body classes, font-sans will use the --font-poppins variable */}
      <body className="font-sans antialiased">
        {children}
        <Toaster /> {/* Add Toaster for notifications */}
      </body>
    </html>
  );
}

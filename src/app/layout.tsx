import type { Metadata } from 'next';
import { Poppins } from 'next/font/google'; // Use Poppins for a friendly look
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Include weights needed
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title: 'Fiesta Kiddo - Kiddo Quizvite', // Updated title
  description: '¡Responde algunas preguntas para ver la invitación!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">{/* Set language to Spanish */}
      <body className={`${poppins.variable} font-sans antialiased`}> {/* Use Poppins */}
        {children}
        <Toaster /> {/* Add Toaster for notifications */}
      </body>
    </html>
  );
}

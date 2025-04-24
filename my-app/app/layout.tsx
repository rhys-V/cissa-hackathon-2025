
export const metadata = {
   title: 'My App',
   description: 'Next.js starter',
 };
 
 export default function RootLayout({
   children,
 }: {
   children: React.ReactNode;
 }) {
   return (
     <html lang="en">
       <body>{children}</body>
     </html>
   );
 }
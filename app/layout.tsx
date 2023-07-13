import "./tailwind-global.css";
import { Roboto } from "@next/font/google"

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: "--font-roboto",
  display: "optional"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head lang="es"/>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}

import "../styles/globals.css"
import { Inter } from "next/font/google"
import { Roboto_Flex } from "next/font/google"

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  variable: "--font-primary",
})

export const metadata = {
  title: "Kargakarga Project",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoFlex.className}>{children}</body>
    </html>
  )
}

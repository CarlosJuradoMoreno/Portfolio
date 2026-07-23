import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carlos Jurado Moreno — Senior Software Engineer",
  description: "Senior Software Engineer specializing in scalable Java, Spring Boot and cloud-native systems.",
  keywords: ["Senior Software Engineer", "Java", "Spring Boot", "Cloud", "Backend Engineer"],
  openGraph: { title: "Carlos Jurado Moreno — Senior Software Engineer", description: "Building dependable systems for meaningful scale.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark"><body>{children}</body></html>;
}

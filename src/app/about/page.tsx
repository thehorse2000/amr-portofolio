import { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Amr Osama, a Senior Software Engineer in Egypt with over 5 years of experience in frontend development and AI solutions.",
  keywords: ["About Amr Osama", "Software Engineer Egypt", "Frontend Developer Egypt", "Amr Developer"],
};

export default function About() {
  return <AboutClient />;
}

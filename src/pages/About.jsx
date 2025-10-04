import CTA from "../components/CTA";
import { AboutBanner } from "../sections/AboutBanner";
import { Certificate } from "../sections/Certificate";
import { Experience } from "../sections/Experience";
import Skills from "../sections/Skills";

export default function About() {
  return (
    <div className="about-page">
      <AboutBanner />
      <Skills />
      <Certificate />
      <Experience />
      <CTA />
    </div>
  );
}

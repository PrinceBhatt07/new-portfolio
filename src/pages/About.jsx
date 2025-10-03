import { AboutBanner } from "../sections/AboutBanner";
import { Certificate } from "../sections/Certificate";
import Skills from "../sections/Skills";

export default function About() {
  return (
    <div className="about-page">
      <AboutBanner />
      <Skills />
      <Certificate />
    </div>
  );
}

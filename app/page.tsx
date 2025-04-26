
import Image from 'next/image';
import styles from "./page.module.css";
import Navbar from "./navbar/navbar";
import FadeHeaderText from './headerText/fadeHeaderText';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar/>
        <div className={styles.headerContainer}>
        <FadeHeaderText />
          <div className={styles.headerImageWrapper}>
            <Image 
              src="/FullSizeRender.jpg" 
              alt="profile picture" 
              fill
              className={styles.headerImage}
              priority
            />
          </div>
        </div>


        <div className={styles.aboutBody}>
          <h1 id="about-secton">About Me</h1>
          <div className={styles.aboutContent}>
            <Image src="/FullSizeRender.jpg" alt ='profile picture' 
              width={400} height={400} className={styles.aboutImage}/>
            <div className={styles.aboutText}>
              
              i studied a bachelor of science in information technology(distinction) 
              fron university of technology Sydney. I completed this in June of 2024.
              i have recently started a Graduate Diploma of Applied Data Science from 
              monash university.
              i really been enjoying learning about data and data analytics, 
              i also love painting warhammer miniatures.
            </div>
          </div>
        </div>
        <h1 id="skills-secton" className={styles.skillsHeading}>Skills</h1>
        <div>
          <ol>
            <li>
              portfolio!!!!!!!!! 
              how about now????
              Get started by editing 
              <code>app/page.tsx</code>.
            </li>
            <li>Save and see 
              your changes instantly.</li>
          </ol>
        </div>
        <h1 id="experience-secton" className={styles.experienceHeading}>Experience</h1>
        <div>
          <ol>
            <li>
              portfolio!!!!!!!!! 
              how about now????
              Get started by editing 
              <code>app/page.tsx</code>.
            </li>
            <li>Save and see 
              your changes instantly.</li>
          </ol>
        </div>
        <h1 id="projects-secton" className={styles.projectsHeading}>Projects</h1>
        <div>
          <ol>
            <li>
              portfolio!!!!!!!!! 
              how about now????
              Get started by editing 
              <code>app/page.tsx</code>.
            </li>
            <li>Save and see 
              your changes instantly.</li>
          </ol>
        </div>
      </main>
    </div>
  );
}

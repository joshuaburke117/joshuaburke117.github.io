
import Image from 'next/image';
import styles from "./page.module.css";
import Navbar from "./navbar/navbar";
import FadeHeaderText from './headerText/fadeHeaderText';
import Link from 'next/link';

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
          <div className={styles.socialMediaButtons}>
            <div>
              <Link href="https://www.linkedin.com/in/joshua-burke-643333218/" target="_blank">
                <Image src="/linkedin.svg" alt ='profile picture' 
                  width={25} height={25} className={styles.logo}/>
              </Link>
            </div>
            <div>
              <Link href="https://github.com/joshuaburke117" target="_blank">
                <Image src="/github.svg" alt ='profile picture' 
                  width={25} height={25} className={styles.logo}/>
              </Link>
            </div>
            <div>
              <Link href="https://leetcode.com/u/joshuaburke117/" target="_blank">
                <Image src="/leetcode.svg" alt ='profile picture' 
                  width={25} height={25} className={styles.logo}/>
              </Link>
            </div>
          </div>
          
        </div>
        <h1 id="skills-secton" className={styles.skillsHeading}>Skills</h1>
        <div className={styles.skillSection}>
          <div className={styles.skill}>Data Structures and Algorithms</div>
          <div className={styles.skill}>HTML and CSS</div>
          <div className={styles.skill}>Switching and Routing</div>
          <div className={styles.skill}>Python</div>
          <div className={styles.skill}>linux shell</div>
          <div className={styles.skill}>Databases</div>
        </div>
       
        <h1 id="experience-secton" className={styles.experienceHeading}>Experience</h1>
        <div>
          work in progress
        </div>
        <h1 id="projects-secton" className={styles.projectsHeading}>Projects</h1>
        <div>
          work in progress
        </div>
      </main>
    </div>
  );
}

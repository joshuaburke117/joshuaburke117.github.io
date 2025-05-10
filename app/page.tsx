
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
              if you want to read more about me click <Link href="/moreAboutMe"><u>here.</u></Link>
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
          <div>
            <h3>Freelance</h3>
            <h4>Audio Technician (Jan 2016 - present)</h4>
            <ul>
              <li>Contracted to companies such as: JPJ Audio, Eighth Day Sound Australia, 
                Ministry of Tech, CrossTalk Technical
              Services</li>
              <li>Prepared, set up, packed down, and de-prepared a wide range of professional audio equipment</li>
              <li>Mixed FOH, Monitors, and broadcast for a wide range of events</li>
              <li>Create, troubleshoot and maintain networks for a range of events including festivals, 
                conferences, and live broadcast
              events</li>
              <li>Managed and assisted in installations and creation of simple networks for 
                churches and schools around the Greater
              Sydney region</li>
              <li>Often working in and managing large teams to produce events</li>
              <li>Notable Events included; UFC at Marvel Stadium, Hillsong Conference at Qudos Bank Arena, 
                Salesforce Conference
              at ICC, Australia Day and New Years Eve Celebration Broadcast</li>
            </ul>
          </div>
          <div>
            <h3>Amazon Web Services</h3>
            <h4>Network Development Engineer Intern (Nov 2024- Feb 2023)</h4>
            <ul>
              <li>Worked in the Direct Connect team, learnt about Amazon Web Services</li>
              <li>Worked in GitHub, Python, BGP and Network Automation</li>
            </ul>
          </div>
        </div>
        <h1 id="projects-secton" className={styles.projectsHeading}>Projects</h1>
        <div>
          work in progress
        </div>
        <footer>
          <div>
              built by Joshua Burke using next.js and hosted on github 
          </div>
        </footer>
      </main>
    </div>
  );
}

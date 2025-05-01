import Link from "next/link"
import styles from "./moreAboutMe.module.css";

export default function moreAboutMe() {
    return (
        <main>
            <div className={styles.navbar}>
                <nav>
                    <Link href="/">Home</Link>
                </nav>
            </div>

            <div className={styles.content}>
                <div>
                    !!!!!!work in progress!!!!!!
                </div>
                <div>
                    working in the sound industry   
                </div>
                <div>
                    supporting it in the tour industry
                </div>
                <div>
                    family
                </div>
                <div>
                    pets
                </div>
                <div>
                    hobbies
                </div>
            </div>

        </main>
    )
}
    

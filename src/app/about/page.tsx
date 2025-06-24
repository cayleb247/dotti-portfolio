import Image from "next/image";
import styles from "@/styles/about.module.css";

export default function About() {
  return (
    <main>
      <div className={styles.aboutContainer}>
        <div className={styles.textContainer}>
          <h1>Hello!</h1>
          <p>My name is Dotti Dorlini</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"/profile.png"}
            alt={"Dotti Dorlini"}
            width={350}
            height={350}
          ></Image>
        </div>
      </div>
    </main>
  );
}
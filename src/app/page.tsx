import Image from "next/image";
import styles from "@/styles/page.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <div className={styles.landingContainer}>
        <div className={styles.profileContainer}>
            <Image className={styles.profilePicture} src="/profile.png" alt="Picture of Dotti" width={250} height={250}></Image>
            <h1>Dotti Dorlini</h1>
            <div className={styles.profileSubtext}>
              <h3>Artist</h3>
              <h3>Student</h3>
              <h3>Designer</h3>
            </div>
        </div>
        
      </div>
      <div className={styles.selectedWorksContainer}>
          <h3>Selected Works</h3>

          <div className={styles.artContainer}>
            <Image src="/artworks/cutest_pup.JPG" alt="The Cutest Pup" width={250} height={250}></Image>
          </div>
      </div>
    </main>

  );
}

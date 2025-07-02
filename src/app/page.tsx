"use client";

import Image from "next/image";
import styles from "@/styles/home.module.css";
import { useRouter } from "next/navigation";
import Artwork from "@/components/Artwork";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div className={styles.landingContainer}>
        <div className={styles.profileContainer}>
          <Image
            className={styles.profilePicture}
            src="/profile.png"
            alt="Picture of Dotti"
            width={250}
            height={250}
          ></Image>
          <h1>Dotti Dorlini</h1>
          <div className={styles.profileSubtext}>
            <h3>Artist</h3>
            <h3>Student</h3>
            <h3>Designer</h3>
          </div>
          <div className={styles.profileHandles}>
            <a href="https://www.instagram.com/ddootii/" target="_blank">
              <h3>@ddootii</h3>
            </a>
            <a
              href="https://www.instagram.com/dottidorlini.art/"
              target="_blank"
            >
              <h3>@dottidorlini.art</h3>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.selectedWorksContainer}>
        <h1>Selected Works</h1>
        <div className={styles.selectedWorks}>
          <div className={`${styles.outerArtwork} ${styles.left}`}>
            <Artwork art_id="color_pencil_marble"></Artwork>
          </div>
          <div className={`${styles.selectedWorksColumn} ${styles.left}`}>
            <Artwork art_id="cutest_pup"></Artwork>
            <Artwork art_id="self_portrait"></Artwork>
          </div>
          <div className={`${styles.selectedWorksColumn} ${styles.right}`}>
            <Artwork art_id="figure_drawing"></Artwork>
            <Artwork art_id="mentos"></Artwork>
          </div>
          <div className={`${styles.outerArtwork} ${styles.right}`}>
            <Artwork art_id="open_wrapped"></Artwork>
          </div>
        </div>
        <p
          className={styles.galleryButton}
          onClick={() => router.push("/gallery")}
        >
          Go to Gallery
        </p>
      </div>
    </main>
  );
}

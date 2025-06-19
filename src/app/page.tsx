"use client";

import Image from "next/image";
import styles from "@/styles/home.module.css";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

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
            <a href="https://www.instagram.com/ddootii/" target="_blank"><h3>@ddootii</h3></a>
            <a href="https://www.instagram.com/dottidorlini.art/" target="_blank"><h3>@dottidorlini.art</h3></a>
          </div>
        </div>
      </div>
      <div className={styles.selectedWorksContainer}>
        <h1>Selected Works</h1>
        <div className={styles.selectedWorks}>
          <div className={styles.selectedWork}>
            <Image
              src="/artworks/color_pencil_marble.jpg"
              alt="Color Pencil Marble"
              width={250}
              height={250}
            ></Image>
            <p>&quot;Color Pencil Marble&quot;</p>
          </div>
          <div className={styles.selectedWorksColumn}>
            <div className={styles.selectedWork}>
              <Image
                src="/artworks/cutest_pup.JPG"
                alt="The Cutest Pup"
                width={250}
                height={250}
              ></Image>
              <p>&quot;The Cutest Pup&quot;</p>
            </div>
            <div className={styles.selectedWork}>
              <Image
                src="/artworks/self_portrait.JPG"
                alt="Self Portrait"
                width={250}
                height={300}
              ></Image>
              <p>&quot;Self Portrait&quot;</p>
            </div>
          </div>
          <div className={styles.selectedWorksColumn}>
            <div className={styles.selectedWork}>
              <Image
                src="/artworks/figure_drawing.JPG"
                alt="Figure Drawing"
                width={250}
                height={300}
              ></Image>
              <p>&quot;Figure Drawing&quot;</p>
            </div>
            <div className={styles.selectedWork}>
              <Image
                src="/artworks/mentos.JPG"
                alt="Mentos"
                width={250}
                height={250}
              ></Image>
              <p>&quot;Mentos&quot;</p>
            </div>
          </div>
          <div className={styles.selectedWork}>
            <Image
              src="/artworks/open_wrapped.jpg"
              alt="The Cutest Pup"
              width={250}
              height={300}
            ></Image>
            <p>&quot;Open Wrapped&quot;</p>
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

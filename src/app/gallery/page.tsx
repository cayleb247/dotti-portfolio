import Artwork from "@/components/Artwork";
import styles from "@/styles/gallery.module.css"

export default function Gallery() {
  return (
    <main>
      <div className={styles.galleryContainer}>
        <h1>Gallery</h1>
        <div className={styles.selectedWorks}>
          <div className={styles.selectedWorksColumn}>
            <Artwork art_id="cutest_pup"></Artwork>
            <Artwork art_id="self_portrait"></Artwork>
          </div>
          <div className={styles.selectedWorksColumn}>
            <Artwork art_id="figure_drawing"></Artwork>
            <Artwork art_id="mentos"></Artwork>
          </div>
          <div className={styles.selectedWorksColumn}>
            <Artwork art_id="figure_drawing"></Artwork>
            <Artwork art_id="mentos"></Artwork>
          </div>
        </div>
        
      </div>
    </main>
  );
}
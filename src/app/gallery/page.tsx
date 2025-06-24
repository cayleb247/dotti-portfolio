import Artwork from "@/components/Artwork";
import styles from "@/styles/gallery.module.css";

export default function Gallery() {
  return (
    <main>
      <div className={styles.galleryContainer}>
        <h1>Gallery</h1>
        <div className={styles.selectedWorks}>
          <div className={styles.worksColumnsRow}>
            <div className={`${styles.selectedWorksColumn} ${styles.columnLeft}`}>
              <Artwork art_id="cutest_pup"></Artwork>
              <Artwork art_id="self_portrait"></Artwork>
            </div>
            <div className={styles.selectedWorksColumn}>
              <Artwork art_id="figure_drawing"></Artwork>
              <Artwork art_id="mentos"></Artwork>
            </div>
            <div className={`${styles.selectedWorksColumn} ${styles.columnRight}`}>
              <Artwork art_id="color_pencil_marble"></Artwork>
              <Artwork art_id="open_wrapped"></Artwork>
            </div>
          </div>
          <div className={styles.selectedWorksRow}>
            <Artwork art_id="charcoal_skull_bones"></Artwork>
            <Artwork art_id="graphite_shoes"></Artwork>
          </div>
          <div className={styles.selectedWorksRow}>
            <Artwork art_id="charcoal_pastel_pencil_still"></Artwork>
            <Artwork art_id="graphite_charcoal_mixed_fore"></Artwork>
          </div>
          
        </div>
      </div>
    </main>
  );
}

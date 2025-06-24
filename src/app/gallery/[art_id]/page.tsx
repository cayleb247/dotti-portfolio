import Artwork from "@/components/Artwork";
import styles from "@/styles/art-page.module.css";
import artDataMap from "./artData";

export default function ArtPage({ params }: { params: { art_id: string } }) {
  const { art_id } = params;
  if (artDataMap.has(art_id)) {
    const artData = artDataMap.get(art_id)
    return (
      <main>
        <div className={styles.artPageContainer}>
          <div className={styles.artworkContainer}>
            <Artwork art_id={art_id} profile ></Artwork>
            <div className={styles.artworkBorder}></div>
          </div>
          <div className={styles.artDescContainer}>
            <h1>{artData.title}</h1>
            <h3>{artData.year}</h3>
            <p>{artData.description}</p>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <div className={styles.notFoundContainer}>
        <div className={styles.notFoundMessage}>
          <h1>Uh Oh...</h1>
          <h1>Artwork not found!</h1>
          <p>perhaps it was mispelled?</p>
        </div>
      </div>
    );
  }
}

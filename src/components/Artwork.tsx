"use client";

import styles from "@/styles/artwork.module.css";
import Image from "next/image";

const artObjects = new Map();
artObjects.set('charcoal_pastel_pencil_still', {'title': 'Symbolic Still life', 'width': 250, 'height': 300});
artObjects.set('charcoal_skull_bones', {'title': 'Skull & Bones', 'width': 300, 'height': 250});
artObjects.set('color_pencil_marble', {'title': 'Marble', 'width': 250, 'height': 250});
artObjects.set('cutest_pup', {'title': 'Cutest Pup', 'width': 250, 'height': 250});
artObjects.set('figure_drawing', {'title': 'Figure Drawing', 'width': 250, 'height': 300});
artObjects.set('graphite_charcoal_mixed_fore', {'title': 'Foreshortening'});
artObjects.set('graphite_shoes', {'title': 'Walk a Mile in My Shoes'});
artObjects.set('mentos', {'title': 'Mentos', 'width': 250, 'height': 250});
artObjects.set('self_portrait', {'title': 'Self Portrait', 'width': 250, 'height': 300});
artObjects.set('open_wrapped', {'title': 'Embrace', 'width': 250, 'height': 300});

export default function Artwork({ art_id } : { art_id : string }) {
  return (
    <div className={styles.artwork}>
      <Image
        src={`/artworks/${art_id}.jpg`}
        alt={artObjects.get(art_id).title}
        width={artObjects.get(art_id).width}
        height={artObjects.get(art_id).height}
      ></Image>
      <p>&quot;{artObjects.get(art_id).title}&quot;</p>
    </div>
  );
}

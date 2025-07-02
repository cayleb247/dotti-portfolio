"use client";

import styles from "@/styles/artwork.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import artDataMap from "@/app/gallery/[art_id]/artData";

interface ArtworkProps {
  art_id: string;
  profile?: boolean;
}

export default function Artwork({ art_id, profile }: ArtworkProps) {
  const router = useRouter();

  function handleClick() {
    router.push(`/gallery/${art_id}`);
  }

  const imgWidth = profile
    ? artDataMap.get(art_id).profileWidth
    : artDataMap.get(art_id).width;
  const imgHeight = profile
    ? artDataMap.get(art_id).profileHeight
    : artDataMap.get(art_id).height;

  if (profile) {
    return (
    <>
    <div className={styles.artwork} onClick={handleClick} style={{ width: "100%", maxWidth: imgWidth }}>
      <div style={{ aspectRatio: `${imgWidth} / ${imgHeight}`, width: "100%", position: 'relative' }}>
        <Image
          src={`/artworks/${art_id}.jpg`}
          alt={artDataMap.get(art_id).title}
          fill
          
        ></Image>
      </div>
      {!profile && <p>&quot;{artDataMap.get(art_id).title}&quot;</p>}
    </div>
    </>
  );
  } else {
    return (
      <>
        <div
          className={styles.artwork}
          onClick={handleClick}
        >
          <div style={{ width: imgWidth, height: imgHeight, position: 'relative' }}>
            <Image
              src={`/artworks/${art_id}.jpg`}
              alt={artDataMap.get(art_id).title}
              fill
            ></Image>
          </div>
          {!profile && <p>&quot;{artDataMap.get(art_id).title}&quot;</p>}
        </div>
      </>
    );
  }
}

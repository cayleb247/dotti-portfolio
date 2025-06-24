"use client";

import styles from "@/styles/artwork.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import artDataMap from "@/app/gallery/[art_id]/artData";

interface ArtworkProps {
  art_id: string;
  profile?: boolean;
}

export default function Artwork({ art_id , profile }: ArtworkProps) {
  const router = useRouter();

  function handleClick() {
    router.push(`/gallery/${art_id}`)
  }

  return (
    <>
    <div className={styles.artwork} onClick={handleClick}>
      <Image
        src={`/artworks/${art_id}.jpg`}
        alt={artDataMap.get(art_id).title}
        width={profile ? artDataMap.get(art_id).profileWidth : artDataMap.get(art_id).width}
        height={profile ? artDataMap.get(art_id).profileHeight : artDataMap.get(art_id).height}
      ></Image>
      {!profile && <p>&quot;{artDataMap.get(art_id).title}&quot;</p>}
    </div>
    </>
  );
}

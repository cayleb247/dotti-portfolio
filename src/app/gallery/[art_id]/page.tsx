import Artwork from "@/components/Artwork";

const artIDList = [
  "charcoal_pastel_pencil_still",
  "charcoal_skull_bones",
  "color_pencil_marble",
  "cutest_pup",
  "figure_drawing",
  "graphite_charcoal_mixed_fore",
  "graphite_shoes",
  "mentos",
  "open_wrapped",
  "self_portrait",
];

export default function ArtPage({ params }: { params: { art_id: string } }) {
  const { art_id } = params;
  if (artIDList.includes(art_id)) {
    return (
        <main>
            <h1>Art found! {art_id}</h1>
            <Artwork art_id={art_id}></Artwork>
        </main>
    );
  } else {
    return (
        <h1>Artwork not found</h1>
    )
  }
}

class ArtData {
    title:string;
    year:number;
    description:string;
    constructor(title: string, year: number, description: string) {
        this.title = title;
        this.year = year;
        this.description = description;

    }
}

const artDataMap = new Map();

artDataMap.set("charcoal_pastel_pencil_still", new ArtData("Charcoal/Pastel Still Life", 2024, "Items that mean something to me."));
artDataMap.set("charcoal_skull_bones", new ArtData("Chrarcoal Skull & Bones", 2024, "A skull with a rope in its mouth."));
artDataMap.set("color_pencil_marble", new ArtData("Marble", 2024, "A color pencil drawing of a marble"));
artDataMap.set("cutest_pup", new ArtData("Cutest Pup", 2024, "A piece of my dog, Renzo."));
artDataMap.set("figure_drawing", new ArtData("Figure Drawing", 2025, "A drawing of my body."));
artDataMap.set("graphite_charcoal_mixed_fore", new ArtData("Foreshortening", 2025, "Foreshortened object on patterned background."));
artDataMap.set("graphite_shoes", new ArtData("Walk a Mile in My Shoes", 2024, "A pair of basketball shoes."));
artDataMap.set("mentos", new ArtData("Mentos", 2025, "Mentos gum."));
artDataMap.set("open_wrapped", new ArtData("Embrace", 2024, "Open concept -- wrapped"));
artDataMap.set("self_portrait", new ArtData("Self Portrait", 2025, "Self Portrait using Charcoal."));

export default artDataMap
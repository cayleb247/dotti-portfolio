class ArtData {
    title:string;
    year:number;
    description:string;
    width: number;
    height: number;
    profileWidth: number;
    profileHeight: number;
    constructor(title: string, year: number, description: string, width: number, height: number) {
        this.title = title;
        this.year = year;
        this.description = description;
        this.width = width;
        this.height = height;
        this.profileWidth = width * 1.5
        this.profileHeight = height * 1.5;
    }
    
}

const artDataMap = new Map();

artDataMap.set("charcoal_pastel_pencil_still", new ArtData("Charcoal/Pastel Still Life", 2024, "Items that mean something to me.", 250, 300));
artDataMap.set("charcoal_skull_bones", new ArtData("Chrarcoal Skull & Bones", 2024, "A skull with a rope in its mouth.", 300, 250));
artDataMap.set("color_pencil_marble", new ArtData("Marble", 2024, "A color pencil drawing of a marble", 250, 250));
artDataMap.set("cutest_pup", new ArtData("Cutest Pup", 2024, "A piece of my dog, Renzo.", 250, 250));
artDataMap.set("figure_drawing", new ArtData("Figure Drawing", 2025, "A drawing of my body.", 250, 300));
artDataMap.set("graphite_charcoal_mixed_fore", new ArtData("Foreshortening", 2025, "Foreshortened object on patterned background.", 250, 300));
artDataMap.set("graphite_shoes", new ArtData("Walk a Mile in My Shoes", 2024, "A pair of basketball shoes.", 300, 250));
artDataMap.set("mentos", new ArtData("Mentos", 2025, "Mentos gum.", 250, 250));
artDataMap.set("open_wrapped", new ArtData("Embrace", 2024, "Open concept -- wrapped", 250, 300));
artDataMap.set("self_portrait", new ArtData("Self Portrait", 2025, "Self Portrait using Charcoal.", 250, 300));

export default artDataMap
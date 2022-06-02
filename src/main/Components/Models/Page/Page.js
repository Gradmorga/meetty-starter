

class Page {

    constructor(route, name, label, sections) {
        this.route    = route;
        this.label    = label;
        this.sections = sections;
        this.name     = name;
        this.blocks   = sections.reduce((blocksCount, nextSection) => blocksCount + nextSection.length, 0);
    }
}

export default Page;
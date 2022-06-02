

class Section {

    constructor(label, name, title, component) {
        this.label     = label;
        this.name      = name;
        this.title     = title;
        this.component = component;
        this.length    = component.blocks;
    }
}


export default Section;
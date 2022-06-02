

class ListModel {

    constructor() {
        this.model = [];
    }


    addItem(item) {
        this.model.push(item);
        return this;
    }

    itemAt(index) {
        return this.model.at(index);
    }

    indexOfValue(value) {
        return this.model.map((modelItem) => modelItem.value).indexOf(value);
    }
}


export default ListModel;
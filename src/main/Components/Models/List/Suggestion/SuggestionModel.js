

import ListModel from "../ListModel";
import ModelItem from "../ModelItem";


export default new ListModel()
    .addItem(new ModelItem("Select subject", ""))
    .addItem(new ModelItem("Bug", "1"))
    .addItem(new ModelItem("Feature", "2"))
    .addItem(new ModelItem("Improvement", "3"));
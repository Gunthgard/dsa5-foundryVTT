import DSA5_Utility from "../system/utility-dsa5.js";
import DSA5 from "../system/config-dsa5.js"
import ActorSheetDsa5 from "./actor-sheet.js";


export default class ActorSheetdsa5Creature extends ActorSheetDsa5 {
    static get defaultOptions() {
        const options = super.defaultOptions;
        mergeObject(options, {
            classes: options.classes.concat(["dsa5", "actor", "creature-sheet"]),
            width: 680,
            height: 740,
        });
        return options;
    }

    get template() {
        if (!game.user.isGM && this.actor.limited) return "systems/dsa5/templates/actors/creature-limited.html";
        return "systems/dsa5/templates/actors/creature-sheet.html";

    }

    activateListeners(html) {
        super.activateListeners(html);

    }

    async getData() {
        const data = super.getData();

        data["sizeCategories"] = DSA5.sizeCategories

        return data;
    }

}
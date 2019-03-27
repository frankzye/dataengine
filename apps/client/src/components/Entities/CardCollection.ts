import {CardInfo} from "./CardInfo";

export class CardCollection {
    cards: CardInfo[];
    types: Set<string>;

    constructor() {
        this.cards = [];
        this.types = new Set<string>();
    }

    getCardsByType(type: string) {
        return this.cards.filter(c => c.type === type);
    }
}

/**
 * register service lines.
 */
import {CardInfo} from "./CardInfo";
import {CardCollection} from "./CardCollection";

export class ServiceBus {
    cardCollection: CardCollection = new CardCollection();

    register(c: CardInfo) {
        this.cardCollection.types.add(c.type);
        this.cardCollection.cards.push(c);
    }

    static getInstance() {
        return (window as any).SerivceBus as ServiceBus;
    }

    getCardInfo(name: string) {
        return this.cardCollection.cards.find(c => c.name === name);
    }
}

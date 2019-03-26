/**
 * register service lines.
 */
export class ServiceBus {
    components: any[] = [];

    register(c: any) {
        this.components.push(c);
    }

    static getInstance() {
        return (window as any).SerivceBus as ServiceBus;
    }
}

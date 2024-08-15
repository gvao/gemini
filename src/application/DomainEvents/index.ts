import DomainEvent from "./interface/DomainEvent.interface"
import DomainHandler from "./interface/DomainHandler.interface"

export default class DomainEvents {
    static handlers: DomainHandler[] = []
    static cadaster(domainHandler: DomainHandler) {
        this.handlers.push(domainHandler)
    }
    static emit(domainEvent: DomainEvent) {
        for (const event of this.handlers){
            if(event.name !== domainEvent.name) continue
            event.handler(domainEvent)
        }
    }
}


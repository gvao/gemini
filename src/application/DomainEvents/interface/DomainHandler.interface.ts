import DomainEvent from "./interface/DomainEvent.interface"

export default interface DomainHandler {
    name: string
    handler(domainEvent: DomainEvent): Promise<void>
}


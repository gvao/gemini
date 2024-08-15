import DomainEvent from "../interface/DomainEvent.interface";

export default class SendedMessageEvent implements DomainEvent {
    name = 'SendedMessage';
    constructor(public role: string, public message: string) {}
}
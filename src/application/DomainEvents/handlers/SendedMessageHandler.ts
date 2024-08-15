import DomainEvents from "..";
import Message from "../../../domain/Message";
import IMessage from "../../../domain/Message/interface";
import { SaveRepository } from "../../repository/interface";
import SendedMessageEvent from "../events/SendedMessageEvent";
import GeneratedAnswerEvent from "../events/GeneratedAnswerEvent";
import DomainHandler from "../interface/DomainHandler.interface";

export default class SendedMessageHandler implements DomainHandler {
    name = 'SendedMessage';
    constructor(private messageRepository: SaveRepository<IMessage>) { }
    async handler(domainEvent: SendedMessageEvent): Promise<void> {
        

        const message = new Message('assistent', 'resposta do teste')
        this.messageRepository.save(message)
        const event = new GeneratedAnswerEvent(message.message, message.role)
        DomainEvents.emit(event)
    }
}
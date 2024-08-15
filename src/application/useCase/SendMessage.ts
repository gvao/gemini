import Message from "../../domain/Message";
import DomainEvents from "../DomainEvents";
import SendedMessageEvent from "../DomainEvents/events/SendedMessageEvent";
import { SaveRepository } from "../repository/interface";
import UseCase from "./interface";

export default class SendMessage implements UseCase<Input> {
    constructor(private messagesRepository: SaveRepository<IMessage>) {}
    async execute({ role, message }: Input){
        const messageDomain = new Message(role, message)
        await this.messagesRepository.save(messageDomain)
        const sendedMessageEvent = new SendedMessageEvent(role, message)
        DomainEvents.emit(sendedMessageEvent)
    }
}

interface Input {
    message: string;
    role: string;
}


interface IMessage {}
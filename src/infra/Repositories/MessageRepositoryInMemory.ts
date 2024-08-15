import { GetAllRepository, SaveRepository as SaveRepository } from "../../application/repository/interface";
import IMessage from "../../domain/Message/interface";

export default class MessageRepositoryInMemory implements MessageRepository {
    messages: IMessage[] = []
    async save(message: IMessage): Promise<void> {
        this.messages.push(message)
    }
    async getAll(): Promise<IMessage[]> {
        return this.messages
    }
}

type MessageRepository = SaveRepository<IMessage> & GetAllRepository<IMessage>
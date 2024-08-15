import IMessage from "./interface";

export default class Message implements IMessage {
    constructor(readonly role: string, readonly message: string) { }
}
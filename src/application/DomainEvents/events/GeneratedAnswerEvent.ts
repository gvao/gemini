import DomainEvent from "../interface/DomainEvent.interface";

export default class GeneratedAnswerEvent implements DomainEvent {
    name = "GeneratedAnswer"
    constructor(readonly message: string, readonly from: string){}
}
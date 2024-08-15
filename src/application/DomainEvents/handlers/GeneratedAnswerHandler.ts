import GeneratedAnswerEvent from "../events/GeneratedAnswerEvent";
import DomainHandler from "../interface/DomainHandler.interface";

export default class GeneratedAnswerHandler implements DomainHandler {
    name = 'GeneratedAnswer';
    async handler(domainEvent: GeneratedAnswerEvent): Promise<void> {

        process.stdout.write(domainEvent.message)
    }
}
import DomainEvents from "./src/application/DomainEvents"
import SendedMessageHandler from "./src/application/DomainEvents/handlers/SendedMessageHandler"
import GeneratedAnswerHandler from "./src/application/DomainEvents/handlers/GeneratedAnswerHandler"
import SendMessage from "./src/application/useCase/SendMessage"
import MessageRepositoryInMemory from "./src/infra/Repositories/MessageRepositoryInMemory"

const { stdin, stdout, exit, } = process


// async function sendMessage(message: string) {
//     const gen = new Gemini()
//     const chatSession = gen.createChatSession()
//     // const { response } = await chatSession.sendMessage(message);
//     // const functionCalls = response.functionCalls()
//     // if (functionCalls) {
//     //     const history = await chatSession.getHistory()
//     //     functionCalls.forEach(functionCall => console.log(functionCall))
//     // }
//     // return response.text()
// }

const messageRepository = new MessageRepositoryInMemory()
const sendMessage = new SendMessage(messageRepository)

//handlers
const sendedMessageHandler = new SendedMessageHandler(messageRepository)
const generatedAnswerHandler = new GeneratedAnswerHandler()

DomainEvents.cadaster(sendedMessageHandler)
DomainEvents.cadaster(generatedAnswerHandler)

stdin.on('data', async chunk => {
    const data = chunk.toString()
    if (data.trim().toLowerCase() === 'exit') {
        stdout.write(`process exit\n`)
        exit()
    }
    await sendMessage.execute({ message: data, role: 'user' })
})


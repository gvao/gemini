import { config } from "dotenv"
config()
import { GenerativeModel, GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai"

export default class Gemini {
    private generativeModel: GenerativeModel

    constructor(apiKey = process.env.GOOGLE_GEMINI_API_KEY) {
        const genAi = new GoogleGenerativeAI(apiKey!)
        const safetySettings = [
            {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.BLOCK_NONE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_NONE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: HarmBlockThreshold.BLOCK_NONE,
            },
            // ß{
            //     category: HarmCategory.HARM_CATEGORY_UNSPECIFIED,
            //     threshold: HarmBlockThreshold.BLOCK_NONE,
            // },
        ]
        const generationConfig = {
            // stopSequences: ["red"],
            maxOutputTokens: 500,
            // temperature: 0.9,
            // topP: 0.1,
            // topK: 16,
        };
        const model = "gemini-1.5-flash"
        this.generativeModel = genAi.getGenerativeModel({ model, safetySettings,  })

    }

    async generateContent(content: string) {
        const { response } = await this.generativeModel.generateContent(content)
        return response.text()
    }

}
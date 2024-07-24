import { config } from "dotenv"
config()
import { GoogleGenerativeAI } from "@google/generative-ai"

const apiKey = process.env.GOOGLE_GEMINI_API_KEY
const genAi = new GoogleGenerativeAI(apiKey)
const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" })

model.generateContent('que criou a inteligencia artificial?')
    .then(({ response }) => console.log(response.text()))


'use server'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai';
import prompts from "@/app/prompts.json"

export interface catType {
    cat: "promotional-mail" | "informal-mail" | "outreach-mail" | "professional-linkedin" | "casual-linkedin" | "story-linkedin" | "thought-linkedin"
}

async function addPromptToDB(prompt: string, category: string, response: string, userId: string, token: number, model: string, type: string) {
    const res = await prisma.response.create({
        data: {
            prompt: prompt,
            category: category,
            response: response,
            userId: userId,
            tokens: token,
            model: model,
            type: type,
        },
    })

    return res
}



export async function getResponse(prompt: string, category: catType['cat'], userId?: " " ) {
    
    var textTemplate = prompts[category]

    const { text, usage} = await generateText({
      model: openai('gpt-4o-mini'),
      prompt: (textTemplate).replace("{context}", prompt) + " \n\n Answer in the same language as the input. \n\n Make sure to remove styling and formatting from the output. ",
    });


    const tokens = usage.totalTokens
    const model = 'gpt-4o-mini'
    const type = category.split("-")[0]
    const cat = category.split("-")[1]
    const response = await addPromptToDB(prompt, cat, text, userId || "NA", tokens, model, type)
    console.log(response)
    console.log("Response added to DB")

    return text
   
}
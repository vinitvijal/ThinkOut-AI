'use server'

import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai';
import prompts from "@/app/prompts.json"

export interface catType {
    cat: "promotional-mail" | "informal-mail" | "outreach-mail" | "professional-linkedin" | "casual-linkedin" | "story-linkedin" | "thought-linkedin"
}


export async function getResponse(prompt: string, category: catType['cat']) {
    
    var textTemplate = prompts[category]

    const { text } = await generateText({
      model: openai('gpt-4o-mini'),
      prompt: (textTemplate).replace("{context}", prompt),
    });
    
    return text
    // if (!textTemplate) {
    //     throw new Error("Invalid prompt template");
    // }
    // const text = textTemplate.replace("{content}", prompt);
    // return text;      
}
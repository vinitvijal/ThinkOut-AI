'use server'

import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai';
import { generateText } from 'ai';

export async function getStreamedResponse(prompt: string) {
    const result = streamText({
        model: openai('gpt-4o-mini'),
        prompt: prompt
      });
    
    return result.toDataStreamResponse();
}

export async function getResponse(prompt: string) {
    const { text } = await generateText({
        model: openai('gpt-4o-mini'),
        prompt,
      });
    return text;      
}
'use server'
import { ChatOpenAI } from "@langchain/openai";


export async function getResult(prompt: string, modal: string, username: string,type : string){
    const llm = new ChatOpenAI({
        model: "gpt-4o-mini",
        temperature: 0,
      });

    const res = await llm.invoke(prompt)
    console.log(res)

    return res.content

}
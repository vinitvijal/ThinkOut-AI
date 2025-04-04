'use server'

export async function getResult(name: string, message: string){
    return "Hello" + name + " " + message
}
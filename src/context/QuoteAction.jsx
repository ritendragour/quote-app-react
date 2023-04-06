export const getQuote = async()=>{
    const response = await (await fetch('https://quotable.io/random')).json()
    return response
}
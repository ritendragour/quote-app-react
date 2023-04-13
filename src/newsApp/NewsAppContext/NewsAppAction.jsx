export const GetNews = async (topic) => {

    var res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_2028019d6fdb5375f779ccaa625633b1d319e&q=${topic}`)
    var findNews = await res.json()
    return findNews.results
}



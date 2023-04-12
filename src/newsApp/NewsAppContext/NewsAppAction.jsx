export const GetNews = async (topic) => {
    var res = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2023-03-11&sortBy=publishedAt&apiKey=6386d7740a064a90b22e801c1618ad77`)
    // https://newsdata.io/api/1/news?apikey=pub_2028019d6fdb5375f779ccaa625633b1d319e&q=cryptocurrency
    var findNews = await res.json()
    return findNews.articles

}



import { createContext, useReducer } from "react";
import NewsFinalReducer from "./NewsFinalReducer";

const NewsAppContext = createContext()

export const NewsAppProvider = ({ children }) => {
    const initialstate = {
        newsss: [
            // {"source":{ "id": null, "name": "L'Express" }, 
            // "author": "Eric Charles",
            //  "title": "Voitures électriques : il y a les convertis ravis et ceux qui... s'en mordent les doigts", 
            //  "description": "Voitures électriques : il y a les convertis ravis et ceux qui... s'en mordent les doigts", 
            //  "url": "https://www.lexpress.fr/economie/voitures-electriques-il-y-a-les-convertis-ravis-et-ceux-qui-sen-mordent-les-doigts-BK6QGWIFSJH7PCUPPTC3EDQCGQ/", 
            //  "urlToImage": "https://www.lexpress.fr/resizer/kOWb_kf4g8HDKp6_1UI2qSaY5H0=/1200x630/filters:focal(1193x802:1203x812)/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/G7YSFRTOIBAQZEX7QILRBKXWM4.jpg", 
            //  "publishedAt": "2023-04-10T15:33:32Z", "content": "\"Elle a changé mon rapport à la route\"\r\nSébastien a tout juste la quarantaine, trois ados, une maison en banlieue parisienne. La start-up dont il est le responsable informatique lui a attribué une Re… [+3594 chars]"
            // }
        ]
}
const [state, dispatch] = useReducer(NewsFinalReducer, initialstate)

return (
    <NewsAppContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </NewsAppContext.Provider>
)

}

export default NewsAppContext
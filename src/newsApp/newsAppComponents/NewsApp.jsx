import React, { useContext } from 'react'
import NewsAppContext, { NewsAppProvider } from '../NewsAppContext/NewsAppContext'
import ViewNewsAPP from './ViewNewsAPP'
import NewNavbar from './NewNavbar'
import NewContainer from './NewContainer'
const NewsApp = () => {

  return (
    <div className="bgImage">
    <NewsAppProvider>
      <NewNavbar />
      <NewContainer/>
    </NewsAppProvider>
    </div>
  )
}

export default NewsApp

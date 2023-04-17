import React, { useContext, useEffect } from "react";
import ViewNewsAPP from "./ViewNewsAPP";
import NewsAppContext from "../NewsAppContext/NewsAppContext";
import { GetNews } from "../NewsAppContext/NewsAppAction";
import Reload from "../../commonComponents/Reload";

const NewContainer = () => {
  const { newsss, dispatch } = useContext(NewsAppContext);

  const handleNews = async () => {
    const data = await GetNews("india");
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  useEffect(() => {
    handleNews();
  }, []);

  if(!newsss){
    return (
      <>
      <Reload/>
      </>
    )
  }


  return (
    <div>
      {newsss.map((news, index) => (
        <ViewNewsAPP key={index} news={news} />
      ))}
    </div>
  );
};

export default NewContainer;

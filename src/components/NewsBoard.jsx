import { useEffect } from "react";
import { useState } from "react"
import NewsItems from "./NewsItems";


const NewsBoard = ({category}) => {
    
    const[articles,setArticles] = useState([]);
    useEffect(()=>{
        // constructing the url
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        // fetching the url
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
        // now we have got articles on our articles variable now to display the articles we will go to NewsItems and design it
    },[])

  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-dark text-light fs-4">News</span></h2>
        {articles.map((news,index) =>{
            return <NewsItems key = {index} title={news.title} description=
            {news.description} src = {news.urlToImage} url = {news.url}/>
        })}
    </div>
  )
}

export default NewsBoard
import React, {useState, useEffect} from 
'react'
//import ReactRoundedImage from "react-rounded-image";
//import MyPhoto from "./Image/newsimg.jpg";

import NavigationBar from "./component/NavigationBar"

 
const  App = () => {
  const [articles, setArticles] = useState([])
  const [term, setTerm] = useState('everything')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    const fetchArticles = async () => {
    try{
     
        const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=We3y0NgvYixCffsT10ZjWWyOxjoC8UOU`
        )
        const articles = await res.json()
        console.log(articles.response.docs)
        setArticles(articles.response.docs)
      } catch (error){
        console.error(error);
    } 
    }
   fetchArticles()
  
  }, [])


  return (
    <>
    <NavigationBar></NavigationBar>
   <section className="all_news">
 
     {articles.map((article) =>{
     const {abstract,
       headline: {main},
        byline:{original},
        lead_paragraph,
        pub_date,
        _id} = article
     return (

      <div className="news">
      
       <article key={_id}>
         <a href="#"> <h2>{main}</h2></a>
       <p>{pub_date}</p>
       <p> {original}</p>
        
       </article>
      
       </div>
     )
     })}
   </section>
   
   <section>
 
   </section>

   
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard'

const News = (props) => {
    // console.log(props.news.news && props.news.news)
    const [news, setNews] = useState([])
    console.log(props)

    let name = props.news.data && props.news.data.map(x => 
        x.companyName.split(' ').shift()
        )

  

    // async function fetchCompanyNews() {
    //     console.log(name)
    //     const companyNews = await fetch(`https://newsapi.org/v2/top-headlines?q=${name}&apiKey=236f90419a1d4edd8fc1e698c62220af`)
    //         .then(res => res.json())
    //         .then(data => data)
    //         setNews({data: companyNews})
    // }
       
        
    // useEffect(() => {
    //     let name = props.news.data && props.news.data.map(x => 
    //         x.companyName.split(' ').shift()
    //         )
    //     console.log(name)
    //        fetch(`https://newsapi.org/v2/top-headlines?q=${name}&apiKey=236f90419a1d4edd8fc1e698c62220af`)
    //        .then(res => res.json())
    //         .then(data => {
         
    //           setNews(data)
    //         })
    //           setNews({data: news})
    //     }, []);

    console.log(news)
    // const newsCards = 
    //     props.news.news && props.news.news.map(news => 
    //         <NewsCard key={news.id} news={news}/>
    //     )

    return (
        <div>
            <p>Test News</p>
            {/* <div>
                {newsCards}
            </div> */}
        </div>
    )
}

export default News;
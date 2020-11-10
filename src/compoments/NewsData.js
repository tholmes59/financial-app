import React, { useState, useEffect } from 'react'
import News from './News'

const NewsData = (props) => {
    // console.log(props.news.news && props.news.news)
    // const [news, setNews] = useState([])
    // console.log(props)

    // let name = props.news.data && props.news.data.map(x => 
    //     x.companyName.split(' ').shift()
    //     )

    // console.log(name)

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

        // let name = props.news.data && props.news.data.map(x => 
        //         x.companyName.split(' ').shift()
        //         )
        // console.log(name)
        //     let API_URL = `https://newsapi.org/v2/top-headlines?q=${name}&apiKey=236f90419a1d4edd8fc1e698c62220af`
       
        //     useEffect(() => {
        //       loadNews();
        //     }, []);

            
        // const loadNews = async () => {
        //     console.log(API_URL)
        //     const response = await fetch(API_URL);
        //     console.log(response)
        //     const data = await response.json();
        //     setNews(data)
        // }
        // const loadNews = (API_URL) => {
        //     console.log(API_URL)
        //     fetch(API_URL)
        //       .then(res => res.json())
        //       .then(data => {
        //           setNews(data)
        //       })

        // }

    // console.log(news)
    // const companyNews = 
    //     <News news={fetchCompanyNews()}/>
        

    return (
        <div>
            {/* {companyNews} */}
        </div>
    )
}

export default NewsData;
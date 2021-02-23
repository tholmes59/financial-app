import React, {useState} from 'react'
import NewsCard from './NewsCard'
import Pagination from './Pagination'

const News = ({news}) => {
    // console.log(props.news.news && props.news.news)
    // const [news, setNews] = useState([])
    // console.log(news && news.length)
    // let storiesLength = news && news.length
    // console.log(news.data.articles)
    const [currentPage, setCurrentPage] = useState(1);
    const [storiesPerPage] = useState(5);

    const indexOfLastStory = currentPage * storiesPerPage;
    const indexOfFirstStory = indexOfLastStory - storiesPerPage;
    const currentStories = news.data && news.data.articles.slice(indexOfFirstStory, indexOfLastStory);
    const totalStories = news.data && news.data.articles.length
    // let name = props.news.data && props.news.data.map(x => 
    //     x.companyName.split(' ').shift()
    //     )
    console.log(currentStories)
    console.log(totalStories)
  

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

    // console.log(news)

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const newsCards = 
        news.data && currentStories.map((news, id) => 
            <NewsCard key={id} news={news}/>
        )
        // news && news.data.articles.map((news, id) => 
        //     <NewsCard key={id} news={news}/>
        // )

    return (
        <div>
            <div>
                {news.data && <h1>In the news</h1>}
                {newsCards}
                <Pagination 
                    storiesPerPage={storiesPerPage}
                    totalStories={totalStories}
                    paginate={paginate}
                 />
            </div>
        </div>
    )
}

export default News;
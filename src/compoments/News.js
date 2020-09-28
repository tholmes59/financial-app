import React from 'react'

const News = (props) => {
    console.log(props.news.news && props.news.news)

    return (
        <div>
            <p>Test News</p>
                {props.news.news && props.news.news.map(x => 
                    <p>{x.title}</p>
                )}
        </div>
    )
}

export default News;
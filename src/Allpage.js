import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import TopPost from './TopPost';
import DownArrow from "./downArrow.svg"

function Allpage() {
    const [data, setData] = useState();
    const [loaded, setLoaded] = useState(false);
    const params = useParams();
    let titleString = params.category;
    titleString = titleString.toUpperCase();
    const [count, setCount] = useState(7);
    // const date = new Date();
    // const dateString =
    //     date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

    useEffect(() => {
        var url="https://niyaz30cs.onrender.com/"+params.category;
        
        // var url = "https://blogdata.onrender.com/" + params.category;
        // var url = "https://newsapi.org/v2/everything?q=" +
        //     params.category +
        //     "&from=" +
        //     dateString +
        //     "sortBy=popularity&" +
        //     "apiKey=f64582dcc19545d08902cbb3f5fe11ad";


        var req = new Request(url);
        fetch(req).then((response) => {
            response.json().then((data) => {

                setData(data);
                setLoaded(true);
                console.log(data);
            });
        });
    }, [params]);
    if (loaded) {
        return (
            <div className='maincontainer'>
                <div className='container'>
                    <h1 className='line'>{titleString}</h1>
                    {data.map((article, index) => {
                        if (index < count) {
                            return (
                                <div className='article' key={index}>
                                    <img
                                        className='image'
                                        src={article.urlToImage}
                                        alt="imageshow"
                                    />
                                    <div className='text-content'>
                                        {/* <Link to={`/Info/${article.title}`} className='anchor'><p className='title'>{article.title}</p></Link> */}
                                        <Link to={`/Info/${article.title}`} state={article}>
                                            <h3>{article.title}</h3>
                                        </Link>
                                        <p className='content'>{article.content}</p>
                                        <p className='published'>{article.publishedAt}</p>
                                    </div>
                                </div>
                            );
                        }

                    })}
                    {<button onClick={() => {
                    setCount(count + 3);
                }} className='btnarrow'>Load More <img src={DownArrow} alt='down2' />
                </button>}
                </div>
                <TopPost />
            </div>
        );

    }
    else {
        return <div>loaded</div>
    }
}

export default Allpage

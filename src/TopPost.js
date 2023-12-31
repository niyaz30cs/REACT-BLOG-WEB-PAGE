import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import DownArrow from "./downArrow.svg"

function TopPost({ props }) {
    // const focus = [50, 51, 52, 53];
    const [data, setData] = useState();
    const [loaded, setLoaded] = useState(false);
    const params = useParams();
    const [count, setCount] = useState(3);
    // const date = new Date();
    // const dateString =
    //     date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

    useEffect(() => {
        var url = "https://blogdata.onrender.com/" + params.category;
        // var url = 'https://newsapi.org/v2/everything?q=' +
        //     params.category +
        //     "&from=" +
        //     dateString +
        //     'sortBy=popularity&' +
        //     'apiKey=f64582dcc19545d08902cbb3f5fe11ad';


        var req = new Request(url);
        fetch(req).then((response) => {
            response.json().then((data) => {

                setData(data);
                setLoaded(true);
                console.log("value in state : ",data);
            });
        });
    }, [params]);
    if (loaded) {
        return (
            <div className='container2'>
                <h2 className='line'>Top Posts</h2>
                {/* <h1>{titleString}</h1> */}
                {data.map((article,index) => {
                    // var article = props[value];
                    if (index < count) {
                        return (
                            <div className='article2' key={index}>
                                <img
                                    className='image2'
                                    src={article.urlToImage}
                                    alt="imageshow"
                                />
                                <div className='text-content2'>
                                    <Link to={`/Info/${article.title}`} state={ article } className='anchor2'>
                                        <p className='title'>{article.title}</p>
                                    </Link>
                                    <p className='content'>{article.content}</p>
                                    <p className='published'>{article.publishedAt}</p>
                                </div>
                            </div>
                        );
                    }
                
                }
                )}


                <div className='advertize'>
                    <h3>Advertisement</h3>
                </div>
                {<button onClick={() => {
                    setCount(count + 3);
                }} className='btnarrow'>Load More <img src={DownArrow} alt='down2' />
                </button>}
            </div>
        );

    }
    else {
        return <div>loaded</div>
    }

}

export default TopPost

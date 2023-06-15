import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import TopPost2 from './TopPost2';
import DownArrow from "./downArrow.svg"

function LatestArticle({ props }) {
    // const focus = [50, 51, 52, 53];
    const [data, setData] = useState();
    const [loaded, setLoaded] = useState(false);
    const params = useParams();
    const [count, setCount] = useState(4);
    // const date = new Date();
    // const dateString =
    //     date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

    useEffect(() => {
        // var url = "https://blogdata.onrender.com/" + params.category;
        // var url = 'https://newsapi.org/v2/everything?q=' +
        //     params.category +
        //     "&from=" +
        //     // dateString +
        //     'sortBy=popularity&' +
        //     'apiKey=f64582dcc19545d08902cbb3f5fe11ad';

        var url = 'https://newsapi.org/v2/everything?q=' +
            params.category +
            '&from=&' +
            'sortBy=popularity&' +
            'apiKey=f64582dcc19545d08902cbb3f5fe11ad';



        var req = new Request(url);
        fetch(req).then((response) => {
            response.json().then((data) => {

                setData(data);
                setLoaded(true);
                console.log("value in state : ", data);
            });
        });
    }, [params]);
    if (loaded) {
        return (
            <div><h2 className='line'>Latest Articles</h2>
                <div className='latestHole'>
                    <div className='latestArticle'>
                        {/* <h2 className='line'>The Latest</h2> */}
                        {/* <h1>{titleString}</h1> */}
                        {/* <div className='latestBoder'> */}
                        {data.articles.map((article, index) => {
                            // var article = props[value];
                            if (index < count) {
                                return (
                                    <div className='article3' key={index}>
                                        <img
                                            className='LatestArticleimage'
                                            src={article.urlToImage}
                                            alt="imageshow"
                                        />
                                        <div className='latesttext-content2'>
                                            <Link to={`/Info/${article.title}`} state={article} className='anchor2'>
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


                        {/* <div className='advertize'>
                    <h3>Advertisement</h3>
                </div> */}
                        {/* {<button onClick={() => {
                    setCount(count + 3);
                }}>Load More
                </button>} */}
                {<button onClick={() => {
                    setCount(count + 3);
                }} className='btnarrow'>Load More <img src={DownArrow} alt='down2' />
                </button>}
                </div>
                        <TopPost2 />
                    </div>
                </div>

            // </div>
        );

    }
    else {
        return <div>loaded</div>
    }

}

export default LatestArticle

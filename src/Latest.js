import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./Home2.css";
function Latest(props) {
    const [count, setCount] = useState(4);
    console.log("Props", props.props);

    const { data1, data2, data3, data5 } = props.props
    // if (loaded) {
    return (
        <div>
            <div>
                <h1 className="LatestArticlesLines">Latest Articles</h1>

                <div className="latestArticle">
                    <img className="latestArticleImage" src={data1[55].urlToImage} alt="lod.." />
                    <div className="tata">
                        <Link to={`/Info/${data1[55].title}`} state={data1[55]}>
                            <h4 className="heading">{data1[55].title} </h4>
                        </Link>
                        <h5>{data1[55].content}</h5>
                        <p>{data1[55].publishedAt}</p>
                    </div>
                </div>


                <div className="latestArticle">
                    <img className="latestArticleImage" src={data3[17].urlToImage} alt="lod.." />
                    <div className="tata">
                        <Link to={`/Info/${data3[55].title}`} state={data3[55]}>
                            <h4 className="heading">{data3[55].title} </h4>
                        </Link>
                        <h5>{data3[55].content}</h5>
                        <p>{data3[55].publishedAt}</p>
                    </div>
                </div>


                <div className="latestArticle">
                    <img className="latestArticleImage" src={data5[55].urlToImage} alt="lod.." />
                    <div className="tata">
                        <Link to={`/Info/${data5[55].title}`} state={data5[55]}>
                            <h4 className="heading">{data5[55].title} </h4>
                        </Link>
                        <h5>{data5[55].content}</h5>
                        <p>{data5[55].publishedAt}</p>
                    </div>
                </div>


                <div className="latestArticle">
                    <img className="latestArticleImage" src={data2[55].urlToImage} alt="lod.." />
                    <div className="tata">
                        <Link to={`/Info/${data2[55].title}`} state={data2[55]}>
                            <h4 className="heading">{data2[55].title} </h4>
                        </Link>
                        <h5>{data2[55].content}</h5>
                        <p>{data2[55].publishedAt}</p>
                    </div>
                </div>


            </div>
            <button onClick={() => { setCount(count + 4); }}
                className="lM">Load More ⬇️</button>
        </div>
    );
    // } else {
    //   return (
    //     <div className="lodwalpart">
    //       <h1 className="loading">Loading...</h1>;
    //     </div>
    //   );
    // }
}

export default Latest;
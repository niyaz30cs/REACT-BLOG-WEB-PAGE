import React from "react";
import { Link, } from "react-router-dom";
import "./App.css";

function ReTop(props) {

    const { data1, data2, data3, data4 } = props.props;
    return (
        <div className="rightSide">
            <div className="">
                <h1 className="line">Top Post</h1>
                <div className="mainfake">
                    <img
                        src={data4[31].urlToImage}
                        alt="loading"
                        className="reimage"
                    />
                    <div className="recontant">
                        <Link to={`/Info/${data4[31].title}`} state={data4[31]}>
                            <h5 className="linkSize">{data4[31].title} </h5>
                        </Link>
                        <h5 className="Content">{data4[31].content}</h5>
                        <p className='published'>{data4[31].publishedAt}</p>
                    </div>
                </div>


                {/* Down Tree */}

                <div className="mainfake">
                    <img className="reimage" src={data1[88].urlToImage} alt="loading" />
                    <div className="recontant">
                        <Link to={`/Info/${data1[88].title}`} state={data1[88]}>
                            <h5 className="">{data1[88].title} </h5>
                        </Link>
                        <h5>{data1[88].content}</h5>
                        {/* <br /> */}
                    </div>
                    

                </div>
                <div className="mainfake">
                    <img className="reimage" src={data3[68].urlToImage} alt="loading" />
                    <div className="recontant">
                        <Link to={`/Info/${data3[68].title}`} state={data3[68]}>
                            <h4 className="">{data3[68].title} </h4>
                        </Link>
                        <h5>{data3[68].content}</h5>
                        {/* <br /> */}
                    </div>
                    

                </div>
                <div className="mainfake">
                    <img className="reimage" src={data2[91].urlToImage} alt="loading" />
                    <div className="recontant">
                        <Link to={`/Info/${data2[91].title}`} state={data2[91]}>
                            <h4 className="">{data2[91].title} </h4>
                        </Link>
                        <h5>{data2[91].content}</h5>
                        {/* <br /> */}
                    </div>
                    

                </div>
            </div>
            {/* <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Lode More
            </button> */}
        </div>
    );
}

export default ReTop;
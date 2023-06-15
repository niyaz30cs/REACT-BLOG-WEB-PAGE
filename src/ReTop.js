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
                        src={data4[28].urlToImage}
                        alt={<img src="" alt="The" />}
                        className="reimage"
                    />
                    <div className="recontant">
                        <Link to={`/Info/${data4[28].title}`} state={data4[28]}>
                            <h4 className="">{data4[28].title} </h4>
                        </Link>
                        <p className="">{data4[28].content}</p>
                        <p className='published'>{data4[28].publishedAt}</p>
                    </div>
                </div>


                {/* Down Tree */}

                <div className="mainfake">
                    <img className="reimage" src={data1[88].urlToImage} alt="loding...." />
                    <div className="recontant">
                        <Link to={`/ClickPage/${data1[88].title}`} state={data1[88]}>
                            <h5 className="">{data1[88].title} </h5>
                        </Link>
                        <p>{data1[88].content}</p>
                        <br />
                    </div>
                    <hr />
                </div>
                <div className="mainfake">
                    <img className="reimage" src={data3[64].urlToImage} alt="loding...." />
                    <div className="recontant">
                        <Link to={`/ClickPage/${data3[64].title}`} state={data3[64]}>
                            <h5 className="">{data3[64].title} </h5>
                        </Link>
                        <p>{data3[64].content}</p>
                        <br />
                    </div>
                    <hr />
                </div>
                <div className="mainfake">
                    <img className="reimage" src={data2[91].urlToImage} alt="loding...." />
                    <div className="recontant">
                        <Link to={`/ClickPage/${data2[91].title}`} state={data2[91]}>
                            <h5 className="">{data2[91].title} </h5>
                        </Link>
                        <p>{data2[91].content}</p>
                        <br />
                    </div>
                    <hr />
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
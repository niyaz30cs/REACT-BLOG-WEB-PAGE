import React, { useEffect, useState } from "react";
import Latest from "./Latest";
import "./Home2.css";
import "./Responsive.css";
import "./App.css";
import ReTop from "./ReTop";
import LawStory from "./LawStory";
import { Link, useParams } from "react-router-dom";
// import Info from "./Info";
// import Navbar from "./Navbar";
// import "./App.css";

function Home() {
  const params = useParams();

  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const [data4, setData4] = useState();
  const [data5, setData5] = useState();
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [loaded3, setLoaded3] = useState(false);
  const [loaded4, setLoaded4] = useState(false);
  const [loaded5, setLoaded5] = useState(false);


  useEffect(() => {

    var url1 = "https://niyaz30cs.onrender.com/bollywood";
    var url2 = "https://niyaz30cs.onrender.com/hollywood";
    var url3 = "https://niyaz30cs.onrender.com/food";
    var url4 = "https://niyaz30cs.onrender.com/fitness";
    var url5 = "https://niyaz30cs.onrender.com/technology";


    const req1 = new Request(url1);
    fetch(req1).then((resp) => {
      resp.json().then((data1) => {
        setData1(data1);
        setLoaded1(true);
        // console.log(data);
      });
    });
    const req2 = new Request(url2);
    fetch(req2).then((resp) => {
      resp.json().then((data2) => {
        setData2(data2);
        setLoaded2(true);
        // console.log(data2);
      });
    });
    const req3 = new Request(url3);
    fetch(req3).then((resp) => {
      resp.json().then((data3) => {
        setData3(data3);
        setLoaded3(true);
        console.log("Data3", data3);
      });
    });
    const req4 = new Request(url4);
    fetch(req4).then((resp) => {
      resp.json().then((data4) => {
        setData4(data4);
        setLoaded4(true);
        console.log("Data4", data4);
      });
    });
    const req5 = new Request(url5);
    fetch(req5).then((resp) => {
      resp.json().then((data5) => {
        setData5(data5);
        setLoaded5(true);
        console.log("Data3", data5);
      });
    });
  }, [params]);

  if (loaded1 && loaded2 && loaded3 && loaded4 && loaded5) {
    return (
      <>
        {/* <Navbar /> */}
        <div className="TopHomePage">
          <div className="boxPage1">
            <img
              className="photo1"
              src={data1[14].urlToImage}
              alt="load"
              onError={() => {
                console.log("Having Error");
              }}
            />
            <Link className="TopTitle" to={`/Info/${data1[12].title}`} state={data1[12]}>
              <h3>{data1[12].title} </h3>
            </Link>
          </div>
          <div className="boxPage2">
            <img
              className="photo2"
              src={data2[29].urlToImage}
              alt="load"
            />
            <Link className="TopTitle2" to={`/Info/${data2[29].title}`} state={data2[29]}>
              <h5>{data2[29].title} </h5>
            </Link>
          </div>
          <div className="boxPage3">
            <img
              className="photo2"
              src={data3[77].urlToImage}
              alt="load"
            />
            <Link className="TopTitle3" to={`/Info/${data3[77].title}`} state={data3[77]}>
              <h5>{data3[77].title} </h5>
            </Link>
          </div>
        </div>

        {/* Latest wala */}
        <h1 className="line">The Latest</h1>
        <div className="TheLatest">
          <div className="oneElement">
            <img src={data1[44].urlToImage} alt="go" className="latestImage" />
            <div className="link">
              <Link to={`/Info/${data1[44].title}`} state={data1[44]}>
                <h4>{data1[44].title} </h4>
              </Link>
              <h5>{data3[44].content}</h5>
              <p>{data3[44].publishedAt}</p>
            </div>
          </div>
          <div className="oneElement">
            <img src={data3[16].urlToImage} alt="go" className="latestImage" />
            <div className="link">
              <Link to={`/Info/${data3[16].title}`} state={data3[16]}>
                <h4>{data3[16].title} </h4>
              </Link>
              <h5>{data1[16].content}</h5>
              <p>{data1[16].publishedAt}</p>
            </div>
          </div>
          <div className="oneElement">
            <img src={data4[73].urlToImage} alt="g" className="latestImage" />
            <div className="link">
              <Link to={`/Info/${data4[73].title}`} state={data4[73]}>
                <h4>{data4[73].title} </h4>
              </Link>
              <h5>{data4[73].content}</h5>
              <p>{data4[73].publishedAt}</p>
            </div>
          </div>
        </div>

        <div className="BothPart">
        <Latest props={{ data1, data2, data3, data4, data5 }} />
        {/* <ReTop props={{ data1, data2, data3, data4, data5 }} /> */}
        <div className="bigAndReTop">
          <div className="Big">
            <img src={data5[57].urlToImage} alt="alt" className="bigImage" />
            <p className="baada">{data5[57].content}</p>
            <p className='published'>{data5[57].publishedAt}</p>
          </div>
          <ReTop props={{ data1, data2, data3, data4, data5 }} />
        </div>
        </div>

        {/* <div> */}
        <LawStory props={{ data1, data2, data3, data4, data5 }} />
        {/* </div> */}
      </>
    );
  } else {
    return (
      <div className="lodwalpart">
        <h1 className="loading">Loading*****</h1>
      </div>
    );
  }
}

export default Home;

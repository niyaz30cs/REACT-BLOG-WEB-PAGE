import React, { useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function LawStory(props) {
  // const [data, setData] = useState();
  // const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const nav = useNavigate();

  // const [count, setCount] = useState(3);


  useEffect(() => {
  }, [params]);

  console.log("Props", props.props);
  const { data1, data2} = props.props;
  console.log("Data1", data1);
  return (
    <div className="DownSide">
      <hr className="shiro" />
      <h1>Latest Stories</h1>
      <div className="gasli">
        <div className="kasama">
          <div className="side-box">
            <Link to={`/Info/${data1[0].title}`} state={data1[0]}>
              <h3 className="heading">{data1[0].title} </h3>
            </Link>
            <p className="cont">{data1[0].content}</p>
            <p className='published'>{data1[0].publishedAt}</p>
            <br />
          </div>
        </div>
        <div className="kasama">
          <div className="side-box">
            <Link to={`/Info/${data2[0].title}`} state={data2[0]}>
              <h3 className="heading">{data2[0].title} </h3>
            </Link>
            <p className="cont">{data2[0].content}</p>
            <p className='published'>{data2[0].publishedAt}</p>
            <br />
          </div>
        </div>
        <div className="kasama">
          <div className="side-box">
            <Link to={`/Info/${data1[59].title}`} state={data1[0]}>
              <h3 className="heading">{data1[59].title} </h3>
            </Link>
            <p className="cont">{data1[59].content}</p>
            <p className='published'>{data1[59].publishedAt}</p>
            <br />
          </div>
        </div>
      </div>
      <hr className="shiro" />
      <p
        className="lM"
        onClick={() => {
          nav("/bollywood");
        }}
      >
        View More ➡️
      </p>
    </div>
  );
}

export default LawStory;
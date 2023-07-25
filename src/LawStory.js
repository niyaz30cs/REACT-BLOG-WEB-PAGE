import React, { useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function LawStory(props) {
  const params = useParams();
  const nav = useNavigate();
  // const [count, setCount] = useState(3);


  useEffect(() => {
  }, [params]);

  console.log("Props", props.props);
  const { data1, data2} = props.props;
  console.log("Data1", data1);
  return (
    <div>
      <h1 className="LatestStoriesLines">Latest Stories</h1>
      <div className="comment">
          <div className="side-box">
            <Link to={`/Info/${data1[0].title}`} state={data1[0]}>
              <h3 className="heading">{data1[0].title} </h3>
            </Link>
            <h5 className="cont">{data1[0].content}</h5>
            <p className='published'>{data1[0].publishedAt}</p>
          </div>
          <div className="side-box">
            <Link to={`/Info/${data2[0].title}`} state={data2[0]}>
              <h3 className="heading">{data2[0].title} </h3>
            </Link>
            <h5 className="cont">{data2[0].content}</h5>
            <p className='published'>{data2[0].publishedAt}</p>
          </div>
          <div className="side-box">
            <Link to={`/Info/${data1[59].title}`} state={data1[0]}>
              <h3 className="heading">{data1[59].title} </h3>
            </Link>
            <h5 className="cont">{data1[59].content}</h5>
            <p className='published'>{data1[59].publishedAt}</p>
          </div>
      </div>
      <p className="lM" onClick={() => {nav("/bollywood");}}>View More ➡️</p>
    </div>
  );
}

export default LawStory;
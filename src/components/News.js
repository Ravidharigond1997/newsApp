import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  // document.title = `${capitalizaFirstLatter(
  //   props.category
  // )} - NewsHunt`;
  
  const capitalizaFirstLatter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  const updateNew = async() =>{
    props.useProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=196273d7273a408191d13bc3c7497871&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.useProgress(100);
  }

  const fetchMoreData = async () => {
    setPage({page: page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=196273d7273a408191d13bc3c7497871&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
  }
  
  useEffect(()=>{
    updateNew();
  },[])
  
  // const handlePrevClick = async () => {
  //   setPage({
  //     page: page - 1,
  //   });
  //    updateNew();
  // };

  // const handleNextClick = async () => {
  //   setPage({
  //     page: page + 1,
  //   });
  //    updateNew();
  // };

    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0px",marginTop:'90px' }}>
          News-Hunt - Top {capitalizaFirstLatter(props.category)}{" "}
          Headlines
        </h1>
        {/* {loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.lenght !== totalResults}
          loader={<Spinner/>}>
        <div className="container">
          <div className="row my-3">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll> 
      </div>
    );
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
  totalResults:0,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

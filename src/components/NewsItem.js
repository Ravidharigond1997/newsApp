import React from "react";

const NewsItem = (props) =>{
    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card">
          <div style={{display:'flex', justifyContent:'center',position:'absolute',right:0}}>
        <span class="badge rounded-pill bg-danger">
                {source}
              </span>
              </div>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://img.etimg.com/thumb/msid-99793284,width-1070,height-580,imgsize-12246,overlay-economictimes/photo.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;

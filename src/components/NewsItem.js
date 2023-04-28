import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl} = this.props
    return (
      <div>
        <div className="card">
        <img src={imgUrl?imgUrl:"https://img.etimg.com/thumb/msid-99793284,width-1070,height-580,imgsize-12246,overlay-economictimes/photo.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
        </div>
     </div>
      </div>
    )
  }
}

export default NewsItem
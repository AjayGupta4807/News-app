import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {  description, imageUrl, newsUrl, author, date ,source } = this.props
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <div>
             <span className="badge rounded-pill bg-danger">

    {source}
    
    
  </span>
  </div>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small> </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">read more</a>
            {/* btn-sm is more smalling the button */}
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
     let {title , description,imageUrl,nurl,author,date} = this.props
    return (
      <div>
          <div className="card shadow-lg mb-5 bg-white rounded" >
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()} </small></p>
            <a href={nurl} target="_blank"className="btn btn-sm btn-primary">Read Me</a>
            </div>
            </div>
        </div>
    )
  }
}

export default Newsitem

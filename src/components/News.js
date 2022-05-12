import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import propTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
      country:'in',
      pagesize:9,
      category:"in"
    }
    static propTypes = {
      country:propTypes.string,
      pagesize:propTypes.number,
      category:propTypes.string
    }
    
    constructor()
    {
        super();
        this.state = { 
            articles: [],
            loading: false,
            page: 1,
            
        }
    }
    nextclickhandler = async ()=>{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=e90f5e359ffd42a3b6505ef75ef63a84&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let prasedData = await data.json();
            console.log(prasedData);
            console.log(this.state.page+1)
            this.setState(
              {
                page: this.state.page + 1,
                articles:prasedData.articles,
                loading:false
        })
  }
  prevclickhandler = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=e90f5e359ffd42a3b6505ef75ef63a84&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
        let data = await fetch(url);
        this.setState({loading:true});
        let prasedData = await data.json()
        console.log(prasedData);
        this.setState(
          {
            page: this.state.page - 1,
            articles:prasedData.articles,
            loading :false
        })
  }


   async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=e90f5e359ffd42a3b6505ef75ef63a84&pageSize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let prasedData = await data.json()
        this.setState({articles:prasedData.articles,
          totalResults:prasedData.totalResults,
          loading: false})
   } 
  render() {
    return (
      <div className="container my-3">

          <h1 className="text-center" style={{margin:'35px 0px'}}>Today hot news are</h1>
          {this.state.loading && <Spinner/>}
          <div className="row my-3">
           {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4 my-3 " key={element.url}>
            <Newsitem title={element.title?element.title:""}  description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://images.hindustantimes.com/img/2022/03/30/1600x900/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1648604327117.jpeg"} nurl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
            
        })}

        
      </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.prevclickhandler}>&larr;Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil((this.state.totalResults)/this.props.pagesize)} type="button" className="btn btn-primary" onClick={this.nextclickhandler}>Next&rarr;</button>
            </div>
      </div>
      
    )
  }
}

export default News

import React from 'react';
import './styles/Home.css';
import { changeartStatus, removeArticle } from '../store/actionCreateDispatch';
import store from "../store/store"
import {fetchAll} from "../store/actionCreateDispatch"
class Home extends React.Component<{},{articles:Article[]}>{
  unsubscribe?:Function;
  constructor(props:{}){
    super(props);
    fetchAll();
    this.state={
    articles:store.getState().articles
    };
    
  }

  componentDidMount(){
    this.setState({articles:store.getState().articles})
    this.unsubscribe=store.subscribe(() =>this.setState({articles:store.getState().articles}));
  }

  componentWillUnmount(){
    if(this.unsubscribe){this.unsubscribe()}
  }
  render(){
    return(
    <div>
      {this.state.articles.map(article=>{
        return(
      <div key={article._id}>
        <h2>{article.heading}</h2>
        <p>{article.body}</p><br/>
        <button onClick={()=>removeArticle(article)}>Delete</button>
        <button onClick={()=>changeartStatus(article)}>{article.published?"Draft":"Publish"}</button>
      </div>);
      })}
    </div>
  );
  }
}

export default Home;

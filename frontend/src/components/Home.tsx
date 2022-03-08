import React from 'react';
import './styles/Home.css';
import store from "../store/store"
import {fetchAll} from "../store/actionCreateDispatch"
import ArticleCom from './Article';

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
    <>
      {this.state.articles.map(article=><ArticleCom article={article}></ArticleCom>)}
    </>
  );
  }
}

export default Home;

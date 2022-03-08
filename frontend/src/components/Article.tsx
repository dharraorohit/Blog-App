import React from "react";
import { changeartStatus, removeArticle } from '../store/actionCreateDispatch';

class ArticleCom extends React.Component<{article:Article},{}>{
    constructor(props:{article:Article}){
        super(props);
    }
    render(){
        return(
        <div>
            <h2>{this.props.article.heading}</h2>
            <p>{this.props.article.body}</p><br/>
            <button onClick={()=>removeArticle(this.props.article)}>Delete</button>
            <button onClick={()=>changeartStatus(this.props.article)}>{this.props.article.published?"Draft":"Publish"}</button>
        </div>
        );
    }
}

export default ArticleCom;
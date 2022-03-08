import React from "react";
import { addArticle } from "../store/actionCreateDispatch";
import store from "../store/store";
import {Navigate} from "react-router-dom";
class AddArt extends React.Component<{},{heading:string,body:string,published:boolean,redirect:boolean}>{

    constructor(props:{}){
        super(props);
        this.state={
            heading:"",
            body:"",
            published:true,
            redirect:false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody=this.updateBody.bind(this);
        this.updateHeading=this.updateHeading.bind(this);
    }


    handleSubmit(event:any){
        addArticle({_id:0,...this.state});
        event.preventDefault();
        this.setState({redirect:true});
    }

    updateHeading(event:any){
        this.setState({heading:event.target.value});
    }

    updateBody(event:any){
        this.setState({body:event.target.value})
    }

    render(): React.ReactNode {
        if(this.state.redirect){return (<Navigate to='/'></Navigate>)}
        return(
            <form action="/" onSubmit={this.handleSubmit}>
                Heading: <input type="text" value={this.state.heading} onChange={this.updateHeading }></input>
                Body: <textarea value={this.state.body} onChange={this.updateBody}></textarea>
                <input type="submit" value="Submit"/>
            </form>
        ); 
    }
}

export default AddArt
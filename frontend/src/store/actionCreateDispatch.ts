import * as actions from "./actionTypes"
import store from "./store"
import * as api from "../api/articles"

export async function fetchAll(){
    try{
        const {data}= await api.fetchArticles();
        const action={
            type:actions.FetchAll,
            articles:data
        }
        store.dispatch(action);
    }catch(err){
        console.log(err)
    }
}

export async function addArticle(article: Article){
    try{
        const {data}= await api.addArticle(article);
        const action:ArticleAction= {
            type:actions.ArticleAdded,
            articles:[data]
        }
        store.dispatch(action)
    }catch(err){
        console.log(err);
    }
}

export async function removeArticle(article: Article){
    try{
        console.log("removeArticle");
        console.log(article._id);
        const {data}=await api.removeArticle(article._id);
        console.log(data);
        const action:ArticleAction= {
            type:actions.ArticleRemoved,
            articles:[article]
        }
        store.dispatch(action)
    }catch(err){
        console.log(err);
    }
    
}

export async function changeartStatus(article: Article){
    try{
        await api.changeStatusArticle(article._id);
        const action:ArticleAction= {
            type:actions.DraftedPublished,
            articles:[article]
        }
        store.dispatch(action)
    }catch(err){
        console.log(err);
    }
}
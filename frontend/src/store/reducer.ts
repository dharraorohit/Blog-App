import * as actions from "./actionTypes"

let lastId:number = 2
const initialState:StoreInit={
  userId:0,
  articles:[]
}


export default function reducer(state:StoreInit=initialState,action:ArticleAction):StoreInit{
    switch(action.type){
      case actions.FetchAll:
        return{
          ...state,
          articles:action.articles
        }

        case actions.ArticleAdded:
            return{
              ...state,
              articles:state.articles.concat(action.articles[0])
          }
        
        case actions.ArticleRemoved:
            return {
              ...state,
              articles:state.articles.filter(article=>article._id!==action.articles[0]._id)
            }

        case actions.DraftedPublished:
            return {
              ...state,
              articles:state.articles.map(article=>article._id!==action.articles[0]._id?article:{...article,published:!article.published})
            }

        default:
            return state
    }
}
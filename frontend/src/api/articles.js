import axios from "axios";

const url = "http://localhost:5000/articles";

export const fetchArticles = ()=> axios.get(url);
export const addArticle = (newArticle)=>axios.post(url, newArticle);
export const removeArticle = (id)=>axios.delete(`${url}/${id}`);
export const changeStatusArticle = (id)=>axios.patch(`${url}/${id}`);

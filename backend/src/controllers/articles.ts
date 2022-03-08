import mongoose from "mongoose";
import {Request, Response } from "express";
import ArticleModel from "../models/articleModel";


export const getArticles= async(req:Request,res:Response)=>{
    try{
        const articles = await ArticleModel.find();
        res.status(200).json(articles);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

export const addArticle= async(req:Request,res:Response)=>{
    const {tid, heading, body, published}=req.body;

    const newArticle =  new ArticleModel({ heading, body, published});
    try{
        await newArticle.save();
        res.status(201).json(newArticle);
    }catch(err){
        res.status(409).json({message:err.message});
    }
}

export const removeArticle=async(req:Request,res:Response)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Post with Id: ${id}`);

    await ArticleModel.findByIdAndDelete(id);

    res.json({message: "Article Removed successfully."});
}

export const changeStatusArticle=async(req:Request,res:Response)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Post with Id: ${id}`);

    const article = await ArticleModel.findById(id);

    const updatedArticle= await ArticleModel.findByIdAndUpdate(id,{published:!article.published},{new:true});

    res.json(updatedArticle);
}
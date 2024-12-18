const ideas = require("../models/ideas.model")
let id = 5;

exports.getAllIdeas = (req,res)=>{
    res.status(200).send(ideas)
}

exports.getIdeasById = (req,res)=>{
      const idea_id = req.params.id;
      if(ideas[idea_id]){
        res.status(200).send(ideas[idea_id])
      }else{
        res.status(404).send("NOT FOUND !")
      }
}

exports.createIdea = (req,res)=>{
    idea_body = req.body;
    id++;
    idea_body["id"] = id
    ideas[id] =  idea_body

    res.status(201).send(idea_body)
}

exports.updateIdea = (req,res)=>{
    idea_id = req.params.id
    
    if(ideas[idea_id]){
        idea_obj = req.body
        ideas[idea_id] = idea_obj
        res.status(200).send(idea_obj)
    }else{
        return res.status(404).send("IDEA WITH GIVEN ID NOT FOUND ")
    }
}

exports.deleteIdea = (req,res)=>{
    idea_id = req.params.id

    if(ideas[idea_id]){
        delete ideas[idea_id] 
        res.status(200).send({
             messsage: "Successfully deleted"
        })
    }else{
        return res.status(404).send("IDEA THAT YOU WISH TO DELETE IS NOT PRESENT")
    }
}
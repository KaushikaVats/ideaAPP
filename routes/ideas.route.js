const idea_controller = require("../controllers/ideas.controller")


module.exports= (app)=>{
    app.get("/IdeaApp/api/v1/ideas",idea_controller.getAllIdeas)

    app.get("/IdeaApp/api/v1/ideas/:id" , idea_controller.getIdeasById)

    app.post("/IdeaApp/api/v1/ideas" , idea_controller.createIdea)

    app.put("/IdeaApp/api/v1/ideas/:id" ,idea_controller.updateIdea)

    app.delete("/IdeaApp/api/v1/ideas/:id", idea_controller.deleteIdea)

}

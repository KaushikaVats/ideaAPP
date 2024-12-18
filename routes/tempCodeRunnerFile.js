module.exports= (app)=>{
    app.get("/IdeaApp/api/v1/ideas",idea_controller.getAllIdeas)
}
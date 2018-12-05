
module.exports = function(app){
    
    require('./userRoutes')(app)    
    require('./noteRoute')(app)
    require('./birdRoute')(app)
    require('./userRoute')(app)
    
}
var imageList = require('./images');
var apiUtils = require('./apiUtils');

module.exports = {
  getAllImages: function(req, res){
    res.send(imageList); 
  },
  getAllDestinations: function(req, res){
    apiUtils.getDestinations(function(data){
      res.send(data);
    })
  }
};
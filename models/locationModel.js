var mongoose = require('mongoose'),
    Schema = mongoose.Schema;



var locationModel = new Schema({
    address: {type: String},
    managerName: {type: String},
    isOpen: {type: Boolean, default: false}
});


module.exports = mongoose.model('Location', locationModel);
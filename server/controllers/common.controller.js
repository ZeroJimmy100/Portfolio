const { Common } = require('../models/common.model');

module.exports.createCommon = (request, response) => {
    const { name, texts, opinion, improve, likes, dislikes, edit } = request.body;
    Common.create({
        name,
        texts,
        opinion,
        improve,
        likes,
        dislikes,
        edit
    })
    .then(thetext => response.json(thetext))
    .catch(err => response.status(400).json(err))
}

module.exports.getAllCommon = (request, response) => {
    Common.find({})
    .then(theTexts => response.json(theTexts))
    .catch(err => response.json(err))
}

module.exports.getCommon = (request, response) => {
    Common.findOne({_id:request.params.id})
        .then(thetext => response.json(thetext))
        .catch(err => response.json(err))
}

module.exports.updateCommon = (request, response) => {
    Common.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedText => response.json(updatedText))
        .catch(err => response.json(err))
}

module.exports.deleteCommon = (request, response) => {
    Common.deleteOne({ _id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
const { Portfolio } = require('../models/portfolio.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Welcome to my portfolio"
    });
} 

module.exports.createText = (request, response) => {
    const {company, name, texts, opinion, improve, likes, dislikes, edit } = request.body;
    Portfolio.create({
        company,
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

module.exports.getAllText = (request, response) => {
    Portfolio.find({})
    .then(theTexts => response.json(theTexts))
    .catch(err => response.json(err))
}

module.exports.getText = (request, response) => {
    Portfolio.findOne({_id:request.params.id})
        .then(thetext => response.json(thetext))
        .catch(err => response.json(err))
}

module.exports.updateText = (request, response) => {
    Portfolio.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedText => response.json(updatedText))
        .catch(err => response.json(err))
}

module.exports.deleteText = (request, response) => {
    Portfolio.deleteOne({ _id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

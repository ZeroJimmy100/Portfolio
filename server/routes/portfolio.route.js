const PortfolioController = require('../controllers/portfolio.controller');
const CommonController = require('../controllers/common.controller');

module.exports = function(app){
    app.get('/api/', PortfolioController.index);
    app.get('/api/portfolio', PortfolioController.getAllText);
    app.get('/api/portfolio/:id', PortfolioController.getText);
    app.put('/api/portfolio/:id', PortfolioController.updateText);
    app.post('/api/portfolio/new', PortfolioController.createText);
    app.delete('/api/portfolio/:id', PortfolioController.deleteText);
    app.get('/api/common', CommonController.getAllCommon);
    app.get('/api/common/:id', CommonController.getCommon);
    app.put('/api/common/:id', CommonController.updateCommon);
    app.post('/api/common/new', CommonController.createCommon);
    app.delete('/api/common/:id', CommonController.deleteCommon);
}
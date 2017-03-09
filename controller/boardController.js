var models = require('../models');

var controller = {
		getAll : function(paranoid,cb,errcb) {
		return models.Board.findAll({
			//paranoid : paranoid || false,
		})
		.then(cb).catch(errcb);
		},

		add : function(board,cb,errcb){
			var newBoard = models.Board.build(board);
			return newBoard.save()
			.then(cb).catch(errcb);
		},

		update : function(id,updatedBoard,cb,errcb) {
		return models.Board.update(updatedBoard,{where: { id : id }})
		.then(cb).catch(errcb);
		},

		delete : function(id,cb,errcb) {
		return models.Board.destroy({where: {id : id},force:true})
		.then(cb).catch(errcb);
		}

};


module.exports = controller;
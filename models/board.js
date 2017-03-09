module.exports = function(sequelize, DataTypes){

	//Column of Board Table
	var boardColumns = {
		name : {
			type : DataTypes.STRING(100),
			allowNull : false,
			field : 'name',
			unique : true
		}

	};

	//Configration of board table
	var boardConfig = {
		tableName : 'board', //table name
		timestamps : true, //two column of timestamp create_at and update_at
		paranoid : false, //Won't delete object, add colums deleted_at to table
		underscored : true, //underscored b/w column name ex: firstName = first_name
		freezeTableName : true 


	};

	//model of Board table
	var Board = sequelize.define("Board", boardColumns, boardConfig);

	return Board;

};
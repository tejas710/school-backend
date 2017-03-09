module.exports = function(sequelize, DataTypes){

	var branchColumns = {
		name : {
			type : DataTypes.STRING(15),
			allowNull : false,
			field : 'name',
			unique : true
		}

	};

	var branchConfig = {
		tableName : 'branch',
		timestamps : true,
		paranoid: false, //Won't delete object, add colums deleted_at to table
		underscored : true,
		freezeTableName : true,
		classMethods: {
			associate : function(models) {

			}
		}
	};

	var Branch = sequelize.define("Branch", branchColumns, branchConfig);

	return Branch;

};

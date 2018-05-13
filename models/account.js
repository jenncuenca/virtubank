module.exports = function(sequelize, DataTypes) {
    var Account = sequelize.define("Account", {
           
           //first field

           id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            validate: { }
           },

            customer_no: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            validate: { }     

        },

        ac_balance: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            validate: { }
           },

           ac_currency: {
            type: DataTypes.CHAR,
            allowNull: false,
            unique: false,
            validate: { }
           },

    });
    return Account;
};
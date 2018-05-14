module.exports = function(sequelize, DataTypes) {
    var Txnjournal = sequelize.define("Txnjournal", {
           
           //first field

           id: {
            type: DataTypes.CHAR,
            primaryKey: true,
            allowNull: false,
            unique: true,
            validate: { }
           },

            txn_date: {
            type: DataTypes.DATE,
            allowNull: false,
            unique: false,
            validate: { }     
        },

        customer_no: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            validate: { }
           },

         txn_type: {
            type: DataTypes.CHAR,
            allowNull: false,
            unique: false,
            validate: { }
           },

        txn_amt: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            validate: { }
           },

        txn_sign: {
            type: DataTypes.CHAR,
            allowNull: false,
            unique: false,
            validate: { }
           },

    });
    return Txnjournal;
};
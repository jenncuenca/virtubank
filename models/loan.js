module.exports = function(sequelize, DataTypes) {
    var Loan = sequelize.define("Loan", {
           
           //first field

           ac_number: {
            type: DataTypes.INTEGER,
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

        loan_amt: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            validate: { }
           },

        loan_vdata: {
            type: DataTypes.DATE,
            allowNull: false,
            unique: false,
            validate: { }
           },

        loan_mdate: {
            type: DataTypes.DATE,
            allowNull: false,
            unique: false,
            validate: { }
           },

        loan_rate: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            validate: { }
           },

    });
    return Loan;
};
const Sequelize = require("sequelize");
const sequelize = require("../utils/database");
//TODO: the file and model name should be same
// and there should be not suffix
const AttendanceModel = sequelize.define("attendance", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    //TODO: status should be `enum`, read about enum
    type: Sequelize.STRING,
    allowNull: false,
  },
  dateId: {
    type: Sequelize.INTEGER, // Assuming dateId is an integer
    allowNull: false,
  },
});

module.exports = AttendanceModel;

module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define("Transaction", {
    //Joe updated the below lines, to
    // lenderId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    // lendeeId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    // TODO: create foreign key for Movie ID

    checkoutDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    returnDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    transactionId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  // Transaction.associate = function (models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint

  //   //Team.hasOne(Game, {as: 'HomeTeam', foreignKey : 'homeTeamId'});
  //   //Team.hasOne(Game, {as: 'AwayTeam', foreignKey : 'awayTeamId'});
  //   Transaction.belongsTo(models.User, {
  //     foreignKey: { as: "lenderId", foreignKey: id },
  //     foreignKey: { as: "lendeeId", foreignKey: id }
  //     //changed this from false to true to be able to stage data, need to think if this has to be this way

  //   }

  return Transaction;
};

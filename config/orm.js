var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {
    selectAll: (tableName)=> {
        // var queryString = "SELECT * FROM burgers WHERE burgers_name = ?";
        var queryString = "SELECT * FROM ?";
        connection.query(queryString, [tableName], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: (whatToSelect, table, orderCol)=> {
        var queryString = "SELECT burgers FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol],(err, result)=> {
            if (err) throw err;
            console.log(result);
        });
    },
    findWhoHasMost: (tableOneCol, tableTwoForeignKey, tableTwo)=> {
        var queryString =
        "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

        connection.query(
            queryString,
            [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo,tableTwoForeignKey, tableOne, tableOneCol],
            (err, result)=> {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

module.exports = orm;
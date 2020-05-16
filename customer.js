var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon",
});

connection.connect(function (err) {
  if (err) throw err;
});

var display = function () {
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    console.table(results);
  });
};

var run = function () {
  // query the database for all products available for purchase
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    // once you have the products, prompt the user for which they'd like to purchase
    inquirer
      .prompt([
        {
          name: "product",
          type: "list",
          choices: function () {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].productName);
            }
            return choiceArray;
          },
          message: "What product would you like to purchase?",
        },
        {
          name: "amount",
          type: "input",
          message: "How many would you like to purchase?",
        },
      ])
      .then(function (answer) {
        var chosenProduct;
        for (var i = 0; i < results.length; i++) {
          if (results[i].productName === answer.product) {
            chosenProduct = results[i];
          }
        }

        if (chosenProduct.stockQuantity > parseInt(answer.amount)) {
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stockQuantity:
                  chosenProduct.stockQuantity - parseInt(answer.amount),
              },
              {
                id: chosenProduct.id,
              },
            ],
            function (error) {
              if (error) console.log("\n\n");
              console.log("==============================================");
              console.log("Product purchased successfully!");
              console.log("==============================================");
              console.log("Purchase Summary");
              console.log("-----------------------------");
              console.log("Item Name: " + chosenProduct.productName);
              console.log("Item Count: " + parseInt(answer.amount));
              console.log("-----------------------------");
              console.log(
                "Total: " + "$" + chosenProduct.price * parseInt(answer.amount)
              );
              console.log("==============================================");
              console.log("\n\n");
              display();
              run();
            }
          );
        } else {
          console.log("==============================================");
          console.log("Insufficient stock.");
          console.log("==============================================");
          display();
          run();
        }
      });
  });
};

display();
run();

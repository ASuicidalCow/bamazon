create DATABASE bamazon;
use bamazon;


CREATE TABLE products (
    itemId INT not null AUTO_INCREMENT  ,
    productName VARCHAR(60),
    departmentName VARCHAR(50),
    price DECIMAL(10 , 2 ),
    stockQuantity INT,
    primary key(itemId)
);
 insert into products(productName, departmentName, price, stockQuantity)
 VALUES ("Harry Potter: Complete 8-Film Collection", "Movies", "46.99", "8");
 insert into products(productName, departmentName, price, stockQuantity)
 VALUES ("Cuties", "Produce", "3.00", "10");
  insert into products(productName, departmentName, price, stockQuantity)
 VALUES ("Cotton T-Shirt", "Clothing", "5.00", "30");
  insert into products(productName, departmentName, price, stockQuantity)
 VALUES ("Printer Paper", "Office", "8.00", "13");
  insert into products(productName, departmentName, price, stockQuantity)
 VALUES ("Keyboard & Mouse Combo", "Electronics", "43.99", "2");
  insert into products(productName, departmentName, price, stockQuantity)
 VALUES ("Fidget Spinner", "MISC", "2.55", "55");
  insert into products(productName, departmentName, price, stockQuantity)
 VALUES ("Microphone", "Electronics", "256.00", "10");
  insert into products(productName, departmentName, price, stockQuantity)
 VALUES ("The Matrix", "Movies", "7.99", "1");
  insert into products(productName, departmentName, price, stockQuantity)
 VALUES ("Samurai Sword", "Misc", "6000.00", "200");
  insert into products(productName, departmentName, price, stockQuantity)
 VALUES ("Cabbage", "Produce", ".50", "10");

SELECT 
    *
FROM
    products;
    show table status
    
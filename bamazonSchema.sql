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
 VALUES ("Harry Potter: Complete 8-Film Collection [Blu-ray]", "Movies", "46.99", "8");

SELECT 
    *
FROM
    products;
    show table status
    
// 1. Find all the information about each products
db.Products.find() 

// Find the product price which are between 400 to 800
db.Products.find({product_price:{$gte:400,$lte:800}});

// Find the product price which are not between 400 to 600
db.Products.find({$or : [{product_price:{$lte:400}},{product_price:{$gte:600}}]})

// List the four product which are greater than 500 in price 
db.Products.find({product_price:{$gte:500}},{},{limit:4})

// Find the product name and product material of each products
db.Products.find({},{product_name:1,product_material:1})

// Find the product with a row id of 10
db.Products.find({id:"10"})   

// Find only the product name and product material
db.Products.find({},{product_name:1,product_material:1,_id:0}) 

// Find all products which contain the value of soft in product material 
db.Products.find({product_material:{$regex:"Soft"}})  

// Find products which contain product color indigo  and product price 492.00
db.Products.find({product_color:"indigo", product_price:492}) //No matching document 
db.Products.find({product_color:"indigo", product_price:911}) 


// Delete the products which product price value are 28
db.Products.deleteOne({product_price:28})   
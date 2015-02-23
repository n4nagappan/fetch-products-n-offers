//Register for your access credentials at https://semantics3.com
var api_key = '';
var api_secret = '';
var sem3 = require('semantics3-node')(api_key,api_secret);

// Build the query
sem3.products.products_field( "cat_id", 4992 );
sem3.products.products_field( "brand", "Toshiba" );
sem3.products.products_field( "weight", "gte", 1000000 );
sem3.products.products_field( "weight", "lt", 1500000 );
sem3.products.products_field( "sitedetails", "name", "newegg.com" );
sem3.products.products_field( "sitedetails", "latestoffers", "currency", "USD" );
sem3.products.products_field( "sitedetails", "latestoffers", "price", "gte", 100 );

// Let's make a modification - say we no longer want the weight to be greater than 1000000 attribute
sem3.products.remove( "products", "brand", "weight" );

// Let's view the JSON query we just constructed. This is a good starting point to debug, if you are getting incorrect 
// results for your query
var constructedJson = sem3.products.get_query_json( "products" );
console.log( constructedJson );

// Make the query
sem3.products.get_products(
   function(err, result) {
      if (err) {
         console.log("Couldn't execute query: get_products");
         return;
      }   
    console.log(result);
   }   
);


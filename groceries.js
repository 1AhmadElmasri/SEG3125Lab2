	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
        organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
        organic: true,
		price: 10.00
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
        organic: true,
		price: 12.00
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
        organic: true,
		price: 8.00
	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 2.00
	},
	{
		name: "orange",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 2.00
	},
	{
		name: "banana",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 3.00
	},
	{
		name: "plant based bagel",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 5.00
	},
	{
		name: "radish",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 3.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
    var restrictions = restriction.split(',');
//    console.log(restrictions);
	for (let i=0; i<prods.length; i+=1) {
        var productVegetarian = prods[i].vegetarian;
        var productGlutenFree = prods[i].glutenFree;
        var productOrganic = prods[i].organic;
        var restrictVeg = false;
        var restrictGlu = false;
        var restrictOrg = false;
        var None = false;
//        console.log(restrictions.length);
        
        if(restrictions.length >= 2){
            for(let j = 0; j < restrictions.length; j++){
                if(restrictions[j] == "Vegetarian") restrictVeg = true;
                if(restrictions[j] == "GlutenFree") restrictGlu = true;
                if(restrictions[j] == "Organic") restrictOrg = true;
            }
            if ((restrictVeg && restrictOrg && restrictGlu) && (productVegetarian && productOrganic && productGlutenFree)){
			     product_names.push(prods[i].name + ":" + prods[i].price);
            }else if ((restrictGlu && restrictVeg && !restrictOrg) && (productVegetarian && productGlutenFree)){
			     product_names.push(prods[i].name + ":" + prods[i].price);
		    }else if ((restrictGlu && restrictOrg && !restrictVeg) && (productGlutenFree&& productOrganic)){
			     product_names.push(prods[i].name + ":" + prods[i].price);
            }else if ((restrictVeg && restrictOrg && !restrictGlu) && (productVegetarian && productOrganic)){
			     product_names.push(prods[i].name + ":" + prods[i].price);
            }
        }else{
            if ((restrictions[0] == "Vegetarian") && (productVegetarian)){
                product_names.push(prods[i].name + ":" + prods[i].price);
            }else if ((restrictions[0] == "GlutenFree") && (productGlutenFree)){
                product_names.push(prods[i].name + ":" + prods[i].price);
            }else if ((restrictions[0] == "Organic") && (productOrganic)){
                product_names.push(prods[i].name + ":" + prods[i].price);
            }else if (restrictions[0] == "None"){
                product_names.push(prods[i].name + ":" + prods[i].price);
            }
        }
        

	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

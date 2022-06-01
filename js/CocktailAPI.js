class CocktailAPI {
	
	//get recipe by name
	async getDrinksByName(name) {
		
		//search by name
		const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
		
		//returns json response
		const cocktails = await apiResponse.json();
		
		return {
			cocktails
		}
	}
	
	//get recipe by ingredient
	async getDrinksByIngredient(ingredient) {
		//search by ingredient
		const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
		
		//returns the json response
		const cocktails = await apiResponse.json();
		
		return {
			cocktails
		}
	}
	
	//get single recipe
	async getSingleRecipe(id) {
		
		const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
		
		const recipe = await apiResponse.json();
		
		return {
			recipe
		}
	}
	
	// Get the drink categories
	async getCategories() {
		const apiResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
		
		const categories = await apiResponse.json();
		
		return {
			categories
		}
	}
	
	// Get drinks by category
	async getDrinksByCategory(category) {
		const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
		
		const cocktails = await apiResponse.json();
		
		return {
			cocktails
		}
	}
	
	//Filter by alocohol/non-alcohol
	async getDrinksByAlcohol(category) {
		const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${category}`);
		
		const cocktails = await apiResponse.json();
		
		return {
			cocktails
		}
	}
}
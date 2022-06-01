class CocktailDB {
	
	
	// Save  the recipes into storage
	saveIntoDB(drink) {
		const drinks = this.getFromDB();
		
		drinks.push(drink);
		
		// add new array to array in local storage
		localStorage.setItem('drinks', JSON.stringify(drinks) );
	}
	
	//removes element from local storage
	removeFromDB(id) {
		const drinks = this.getFromDB();
		
		//loop
		drinks.forEach((drink, index ) => {
			if(id === drink.id) {
				drinks.splice(index, 1);
			}
		});
		// Set array into local storage
		localStorage.setItem('drinks', JSON.stringify(drinks));
	}
	
	// Return recipes from storage
	getFromDB() {
		let drinks;
		// Check from local stoarage
		
		if(localStorage.getItem('drinks') === null) {
			drinks = [];
		} else {
			drinks = JSON.parse(localStorage.getItem('drinks') )
		}
		return drinks;
	}
}
const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealCard(data.meals))
}
// display card
displayMealCard = meals => {
    console.log(meals);
    const mealsContainer = document.getElementById('card-container');
    mealsContainer.innerText = "";
    meals.forEach((meal) => {
        console.log(meal);
      const mealDiv = document.createElement('div');
        mealDiv.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl mb-8 mx-4">
        <figure><img src="${meal.strMealThumb}" alt="Movie"/></figure>
        <div class="card-body">
          <h2 class="card-title">${meal.strMeal}</h2>
          <p>"People who love to eat are always the best people." "To eat is a necessity, but to eat intelligently is an art." "We all eat, an it would be a sad waste of opportunity to eat badly." "If you really want to make a friend, go to someone's house and eat with him...the people who give you their food give you their heart."</p>
          <div class="card-actions justify-end">
            <button onclick="" class="btn btn-primary">View details</button>
          </div>
        </div>
      </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeals = () => {
    const searchText = document.getElementById("search-input").value;
    loadMeals(searchText);
  };

loadMeals('fish');
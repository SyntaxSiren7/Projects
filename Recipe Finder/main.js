let input = document.getElementById('input');
let firstButton = document.getElementById('first-button');
let clearButton = document.getElementById('clear');

firstButton.addEventListener('click',fetchInfo)

let inputValue = '';
let mealInfo = '';

function fetchInfo() {
    inputValue = input.value ;
    let recipes = document.getElementById('display');
    recipes.innerHTML = '';

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(res=>res.json())
    .then(data => {
        console.log(data.meals)
        if (data.meals) {
            data.meals.forEach(element => {
                mealInfo = `<div class = "picture">
                            <h2 id="heading-two">${element.strMeal}</h2>
                            <img src=${element.strMealThumb} alt="">
                            <div class="meal-body"></div>
                        </div>`
                        let items = document.createElement('div');
                        items.innerHTML = mealInfo;
                        recipes.appendChild(items)
            });
            
        } else {
             recipes.innerHTML = `No meals found!`;
        }
        clearButton.addEventListener('click', ()=>{
            inputValue= '';
            recipes.innerHTML = '';
        })
    })
}

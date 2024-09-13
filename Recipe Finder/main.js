let input = document.getElementById("input");
let firstButton = document.getElementById("first-button");
let clearButton = document.getElementById('clear');

firstButton.addEventListener('click', e => {
    e.preventDefault();
    fetchInfo();
})

let inputValue = "";
let mealInfo = "";
function fetchInfo() {
    inputValue = input.value;
    let recipes = document.getElementById("display");
    recipes.innerHTML = "";



    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.meals)
            if (data.meals) {
                data.meals.forEach(element => {
                    mealInfo =
                        `<div class = "picture" style= >
                <h2 id="heading-two">${element.strMeal}</h2>
   <img src=${element.strMealThumb} alt="">
  <div class="meal-body">
   </div>
 </div>`;

                    let items = document.createElement("div")
                    items.innerHTML = mealInfo
                    recipes.appendChild(items);
                    items.addEventListener('click', () => {

                        detailsID(element.idMeal);
                    });
                });
            } else {
                recipes.innerHTML = `No meals found!`
            }


            clearButton.addEventListener('click', () => {
                inputValue = '';
                recipes.innerHTML = '';
                document.getElementById('details').innerHTML = '';

            })
        })
}

let searchable = ["spaghetti",
    "chicken",
    "beef",
    "salad",
    "sushi",
    "pasta",
    "fish",
    "tofu",
    "cake",
    "rice",
    "patato",
    "pizza",
    "pork"
]
const searchWrapper = document.querySelector(".container");
const results = document.querySelector('.results');
input.addEventListener('input', (e) => {

    let inputValue = e.target.value.toLowerCase();
    results.innerHTML = "";

    let filteredArr = [];
    if (inputValue.length > 0) {
        filteredArr = searchable.filter((item) => {
            return item.includes(inputValue);// pravim nov masiv koito shte vrushta true ako inputvalue se sudurja v nego
        });
    }
    if (filteredArr.length > 0) {
        filteredArr.forEach(element => {
            let listElement = document.createElement('li');
            listElement.textContent = element;
            listElement.addEventListener('click', () => {
                input.value = element; // dopisva input-a
                results.innerHTML = ""; // izchistva rezultata
            });
            results.appendChild(listElement);

        });
    }

});

function detailsID(id) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(r => r.json())
        .then(detail => {
            let meal = detail.meals[0];
            let divDetails = document.getElementById('details');
            divDetails.innerHTML = '';
            let newDiv = document.createElement('div');
            newDiv.innerHTML = `<div class = "picture">
                <h3 id="heading-three">${meal.strMeal}</h3>
   <img src=${meal.strMealThumb} alt="${meal.strMeal}">
  <div class="meal-body">
  <p>Instructions: ${meal.strInstructions}</p>
  <br>
  <p>Ingredients:</p>
  <ul> 
<li>${meal.strIngredient1} - ${meal.strMeasure1}</li>
<li>${meal.strIngredient2} - ${meal.strMeasure2}</li>
<li>${meal.strIngredient3} - ${meal.strMeasure3}</li>
<li>${meal.strIngredient4} - ${meal.strMeasure4}</li>
<li>${meal.strIngredient5} - ${meal.strMeasure5}</li>
<li>${meal.strIngredient6} - ${meal.strMeasure6}</li>
<li>${meal.strIngredient7} - ${meal.strMeasure7}</li>
<li>${meal.strIngredient8} - ${meal.strMeasure8}</li>
<li>${meal.strIngredient9} - ${meal.strMeasure9}</li>
<li>${meal.strIngredient10} - ${meal.strMeasure10}</li>
<li>${meal.strIngredient11} - ${meal.strMeasure11}</li>
<li>${meal.strIngredient12} - ${meal.strMeasure12}</li>
<li>${meal.strIngredient13} - ${meal.strMeasure13}</li>
<li>${meal.strIngredient14} - ${meal.strMeasure14}</li>
<li>${meal.strIngredient15} - ${meal.strMeasure15}</li>
<li>${meal.strIngredient16} - ${meal.strMeasure16}</li>
<li>${meal.strIngredient17} - ${meal.strMeasure17}</li>
<li>${meal.strIngredient18} - ${meal.strMeasure18}</li>
<li>${meal.strIngredient19} - ${meal.strMeasure19}</li>
<li>${meal.strIngredient20} - ${meal.strMeasure20}</li>
  </ul>
   </div>
 </div>`;
            divDetails.appendChild(newDiv)

shareButton()

        })
}
function shareButton(){
    shareButton = document.createElement('button')
// const shareButton = document.getElementById('share-button');

shareButton.id = 'share-button';
shareButton.textContent = 'SHARE';
 const shareOptions = document.querySelector('.share-options');
shareOptions.appendChild(shareButton);

shareButton.addEventListener('click', () => {
    const open = shareOptions.classList.toggle("show_share-options");
    if (open) {
        shareButton.style.backgroundColor = '#48556a';
        let divShareButton = document.createElement('div');
        shareOptions.appendChild(divShareButton);
        divShareButton.innerHTML = `
    <a class="facebook" href="https://www.facebook.com/" target="_blank">
    <img src="./images/20673.png" alt="Share on Facebook"></a>`

    } else {
        shareButton.style.backgroundColor = '';
    }
})
}

const printButton = document.getElementById('print');
printButton.addEventListener('click', () => {
    printDiv('details');
});
function printDiv(divName) {
    const printContents = document.getElementById(divName).innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = `<div id="${divName}">${printContents}</div>`;
    window.print();

    document.body.innerHTML = originalContents;
    window.location.reload();
}


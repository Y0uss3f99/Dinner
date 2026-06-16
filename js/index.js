
const recipes = [
  {
    title: "French Onion Soup",
    img:"img/photo-1.avif",
    rating: 4.7,
    reviews: 267,
    prepTime: "15 min",
    cookTime: "60 min",
    servings: 4,
    level: "Intermediate",
    cuisine: "Mediterranean",
    ingredients: [
      "4 large onions, thinly sliced",
      "1/2 cup white wine",
      "1 liter beef broth",
      "4 tablespoons butter"
    ],
    instruction: [
      "Melt butter in a large pot and caramelize onions for 40 minutes.",
      "Add white wine and deglaze the pot.",
      "Add beef broth, bay leaves, and thyme. Simmer 20 minutes.",
      "Toast baguette slices.",
      "Top soup with bread and cheese, then broil 3-5 minutes."
    ],
    nutrition: {
      calories: 380,
      protein: "18g",
      carbs: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg"
    }
  },

  {
    title: "Chicken Alfredo Pasta",
    rating: 4.8,
    reviews: 421,
    img:"img/photo-2.avif",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 3,
    level: "Easy",
    cuisine: "Italian",
    ingredients: [
      "250g fettuccine pasta",
      "2 chicken breasts, sliced",
      "1 cup heavy cream",
      "1 cup grated parmesan",
      "2 tablespoons butter"
    ],
    instruction: [
      "Cook pasta until al dente.",
      "Sauté chicken until golden.",
      "Melt butter, add cream and parmesan to form sauce.",
      "Mix pasta with sauce and chicken.",
      "Serve hot with parsley."
    ],
    nutrition: {
      calories: 520,
      protein: "32g",
      carbs: "45g",
      fat: "22g",
      fiber: "3g",
      sodium: "640mg"
    }
  },

  {
    title: "Beef Tacos",
    rating: 4.2,
    reviews: 310,
    img:"img/photo-3.avif",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    level: "Easy",
    cuisine: "Mexican",
    ingredients: [
      "500g ground beef",
      "1 packet taco seasoning",
      "8 small tortillas",
      "1 cup shredded lettuce",
      "1 cup cheddar cheese"
    ],
    instruction: [
      "Brown beef in a skillet.",
      "Add taco seasoning and water; let simmer.",
      "Warm tortillas.",
      "Fill tortillas with beef, lettuce, and cheese.",
      "Serve immediately."
    ],
    nutrition: {
      calories: 290,
      protein: "20g",
      carbs: "28g",
      fat: "12g",
      fiber: "2g",
      sodium: "760mg"
    }
  },

  {
    title: "Vegetable Stir Fry",
    rating: 4.6,
    reviews: 189,
    img:"img/photo-4.avif",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 2,
    level: "Easy",
    cuisine: "Asian",
    ingredients: [
      "1 bell pepper, sliced",
      "1 carrot, sliced",
      "1 broccoli head, chopped",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil"
    ],
    instruction: [
      "Heat oil in a wok.",
      "Add garlic then vegetables; stir fry 5 minutes.",
      "Add soy sauce and sesame oil.",
      "Cook another 2 minutes.",
      "Serve over rice or noodles."
    ],
    nutrition: {
      calories: 210,
      protein: "8g",
      carbs: "32g",
      fat: "6g",
      fiber: "5g",
      sodium: "540mg"
    }
  },

  {
    title: "Margherita Pizza",
    rating: 4.9,
    reviews: 502,
    img:"img/photo-5.avif",
    prepTime: "25 min",
    cookTime: "15 min",
    servings: 2,
    level: "Intermediate",
    cuisine: "Italian",
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella",
      "Fresh basil leaves",
      "1 tablespoon olive oil"
    ],
    instruction: [
      "Spread pizza dough on a tray.",
      "Add tomato sauce evenly.",
      "Place mozzarella slices and basil.",
      "Bake at high heat for 12–15 minutes.",
      "Drizzle olive oil before serving."
    ],
    nutrition: {
      calories: 430,
      protein: "19g",
      carbs: "50g",
      fat: "14g",
      fiber: "3g",
      sodium: "720mg"
    }
  }
];

const displayId = document.getElementById("display");
const nextButton = document.getElementById("nextRecipe");
let index = 0;

function cleck() {
    let i = index;
    let cro ;
      cro=`
     <div class="row my-5 equal-row m-4">
            <div
              class=" rounded-start  bg-dark col-md-12 col-lg-4   p-0  bg-colna rounded-4 mx-0  position-relative "
            >
             <img src="${recipes[i].img}" class="w-100 full-img h-100" alt="">

                <div
                  class="mx-3 rounded-5 py-2 position-absolute top-0 my-3 bg-white w-35 text-center"
                >
                  <span><i class="text-warning fa-solid fa-star"></i></span><span id="rarating">${recipes[i].rating}</span> 
                  <span class="text-secondary">(${recipes[i].reviews} reviews)</span>
                </div>

                <div
                  class="d-flex flex-wrap justify-content-center position-absolute bottom-0 bg-white mx-lg-4 mx-5 text-center w-75 rounded-4"
                >
                  <div class="p-2">
                    <i class="mx-3 fs-5 fa-solid fa-clock"></i>
                    <p class="text-secondary m-0">Prep Time</p>
                    <p class="m-0 fa-bolt" id="prepTime">${recipes[i].prepTime} min</p>
                  </div>
                  <div class="p-2">
                    <i class="fa-solid fs-5 mx-3 fa-fire-burner"></i>
                    <p class="text-secondary m-0">Cook Time</p>
                    <p class="m-0 fa-bolt" id="cookTime">${recipes[i].cookTime} min</p>
                  </div>
                  <div class="p-2">
                    <i class="fa-solid fs-5 mx-3 fa-people-group"></i>
                    <p class="text-secondary m-0">Servings</p>
                    <p class="m-0 fa-bolt" id="servings">${recipes[i].servings} people</p>
                  </div>
                          
            </div>
        
            </div>

            <div
              class="col-md-12 h-100  col-lg-8 p-2  bg-white rounded-4 rounded-start-0 mx-0"
            >
              <div class="mx-5">
                <span
                  class="mx-2 badge rounded-pill bg-success bg-opacity-25 text-success"
                  id="level"
                >
                  ${recipes[i].level}</span
                >
                <span
                  class="mx-2 badge rounded-pill bg-info bg-opacity-25 text-info"
                  id="cuisine"
                  >${recipes[i].cuisine}</span
                >
              </div>
              <div class="d-flex flex-wrap justify-content-between">
                <div class="p-4">
                  <h2 id="title">${recipes[i].title}</h2>
                  <p class="m-0 text-secondary">
                    Fresh Italian sandwich with mozzarella, tomato, and basil
                  </p>
                </div>
                <div class="p-3 mx-2">
                  <span>
                    <i
                      class="fa-solid fa-bookmark icon2_hover py-2 rounded-3 fs-4"
                    ></i>
                    <i
                      class="fa-solid fa-share-nodes icon2_hover py-2 rounded-3 fs-4"
                    ></i>
                  </span>
                </div>
              </div>
              
<div class="d-flex justify-content-center mt-5">
  <ul class="nav nav-underline" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button">
        Ingredients
      </button>
    </li>

    <li class="nav-item" role="presentation">
      <button class="nav-link" id="link1-tab" data-bs-toggle="tab" data-bs-target="#link1" type="button">
        Instructions
      </button>
    </li>

    <li class="nav-item" role="presentation">
      <button class="nav-link" id="link2-tab" data-bs-toggle="tab" data-bs-target="#link2" type="button">
        Nutrition
      </button>
    </li>
     <li class="nav-item" role="presentation">
      <button class="nav-link" id="y3-tab" data-bs-toggle="tab" data-bs-target="#y3" type="button">
       Chef's Tips
      </button>
    </li>
    
  </ul>
  
</div>
<div class="w-75  m-auto">
    <hr>
  </div>

<div class="tab-content mt-4 h-m  overflow-auto">
  <div class="tab-pane h-350px show active  px-5" id="home">
    <div class="  bg-IDN  w-100 p-3 rounded-4 mx-4 ">
       <p class="text-start mx-5">
      <span class="  mx-2 badge text-white rounded-5  bg-span bg-opacity-25 text-success">${i+1}</span>
      ${recipes[i].ingredients[0]}</p>
    <p class="text-start mx-5">
      <span class=" mx-2 badge text-white rounded-5  bg-span bg-opacity-25 text-success">${i+2}</span>
      ${recipes[i].ingredients[1]}</p>
    <p class="text-start mx-5">
      <span class="mx-2 badge text-white rounded-5  bg-span bg-opacity-25 text-success">${i+3}</span>
      ${recipes[i].ingredients[2]}</p>
    <p class="text-start mx-5">
      <span class="mx-2 badge text-white rounded-5  bg-span bg-opacity-25 text-success">${i+4}</span>
      ${recipes[i].ingredients[3]}</p>
    <p class="text-start mx-5">
      <span class="mx-2 badge text-white rounded-5  bg-span bg-opacity-25 text-success">${i+5}</span>
      ${recipes[i].ingredients[4]}</p>
    <p class="text-start mx-5">
    </div>
   
  </div>
  <div class="tab-pane h-350px  h-m  px-5" id="link1">
    <div class=" ">
       <p class="text-start mx-5 py-3 ">
      <span class="mx-2 badge text-white rounded-4  fs-5  bg-span bg-opacity-25 ">1</span>
      ${recipes[i].instruction[0]}</p>
    <p class="text-start mx-5 py-3">
      <span class="mx-2 badge text-white rounded-4  fs-5  bg-span bg-opacity-25 ">2</span>
      
${recipes[i].instruction[1]}</p>
    <p class="text-start mx-5 py-3">
      <span class="mx-2 badge text-white rounded-4  fs-5  bg-span bg-opacity-25 ">3</span>
     ${recipes[i].instruction[2]}</p>
    <p class="text-start mx-5 py-3">
      <span class="mx-2 badge text-white rounded-4  fs-5  bg-span bg-opacity-25 ">4</span>
     ${recipes[i].instruction[3]}</p>
    <p class="text-start mx-5 py-3">
      <span class="mx-2 badge text-white rounded-4  fs-5  bg-span bg-opacity-25 ">5</span>
     ${recipes[i].instruction[4]}</p>

    </div>
  </div>
  <div class="tab-pane " id="link2">
    <div class="">
      <div class="  d-flex flex-wrap justify-content-between">
      <div class="w-50  p-2">
        <div class="inner gap-2 bg-light w-100 p-3 rounded-4 d-flex flex-wrap justify-content-center">
        <div class=" bg-danger  bg-opacity-25 text-danger p-1 rounded-3"><i class="fa-solid fa-fire"></i></div>
        <div class=" p-2">Calories</div>
        <div class="p-2" id="calories">${recipes[i].nutrition.calories} kcal</div>
        </div>
        
      </div>
       <div class="w-50 p-2">
        <div class="inner gap-2 bg-light w-100 p-3 rounded-4 d-flex flex-wrap justify-content-between">
        <div class=" color1 p-1 rounded-3"><i class="fa-solid fa-dumbbell"></i></div>
        <div class=" p-2">Protein</div>
        <div class="p-2" id="protein">${recipes[i].nutrition.protein}g</div>
        </div>
        
      </div>
   
    </div>
    <div class="  d-flex flex-wrap justify-content-between">
      <div class="w-50  p-2">
        <div class="inner gap-2 bg-light w-100 p-3 rounded-4 d-flex flex-wrap justify-content-center">
        <div class="color2  p-1 rounded-3"><i class="fa-solid fa-wheat"></i></div>
        <div class=" p-2">Carbohydrates</div>
        <div class="p-2" id="carbs">${recipes[i].nutrition.carbs}g </div>
        </div>
        
      </div>
       <div class="w-50 p-2">
        <div class="inner gap-2 bg-light w-100 p-3 rounded-4 d-flex flex-wrap justify-content-between">
        <div class=" color3  p-1 rounded-3"><i class="fa-solid fa-droplet"></i></div>
        <div class=" p-2">fat</div>
        <div class="p-2" id="fat">${recipes[i].nutrition.fat}g</div>
        </div>
        
      </div>
   
    </div>
    <div class="  d-flex flex-wrap justify-content-between">
      <div class="w-50  p-2">
        <div class="inner gap-2 bg-light w-100 p-3 rounded-4 d-flex flex-wrap justify-content-center">
        <div class=" color4 p-1 rounded-3"><i class="fa-solid fa-leaf"></i></div>
        <div class=" p-2">fiber</div>
        <div class="p-2" id="fiber">${recipes[i].nutrition.fiber}g</div>
        </div>
        
      </div>
       <div class="w-50 p-2">
        <div class="inner gap-2 bg-light w-100 p-3 rounded-4 d-flex flex-wrap justify-content-between">
        <div class=" color5 p-1 rounded-3"><i class="fa-solid fa-box"></i></div>
        <div class=" p-2">sodium</div>
        <div class="p-2" id="sodium">${recipes[i].nutrition.sodium}mg</div>
        </div>
        
      </div>
   
    </div>
    
  </div>
  <div class="tab-pane fade  px-5 h-m" id="link3">Link3 Content</div>
</div>
  <div class="tab-pane fade h-350px  px-5" id="y3">
    <div class="container  bg-chef fs-5 shadow_left p-3 my-3 rounded-3">
   <span class="mx-2 badge text-white rounded-5    bg-span "><i class="fa-solid fa-check"></i></span>
   <span>Use room temperature eggs for a smoother sauce consistency</span>
   
    </div>
     <div class="container  bg-chef fs-5 shadow_left p-3 my-3 rounded-3">
   <span class="mx-2 badge text-white rounded-5    bg-span "><i class="fa-solid fa-check"></i></span>
   <span>Work quickly when mixing eggs with hot pasta to avoid scrambling</span>
   
    </div>
     <div class="container bg-chef fs-5 shadow_left p-3 my-3 rounded-3">
   <span class="mx-2 badge text-white rounded-5    bg-span "><i class="fa-solid fa-check"></i></span>
   <span>Reserve extra pasta water - it's the secret to perfect creaminess</span>
   
    </div>
     <div class="container  bg-chef fs-5 shadow_left  p-3 my-3 rounded-3">
   <span class="mx-2 badge text-white rounded-5    bg-span "><i class="fa-solid fa-check"></i></span>
   <span>Freshly grated cheese makes all the difference in flavor</span>
   
    </div>
     <div class="container  bg-chef fs-5 shadow_left  p-3 my-3 rounded-3">
   <span class="mx-2 badge text-white rounded-5    bg-span "><i class="fa-solid fa-check"></i></span>
   <span>Never add cream - authentic carbonara is made with eggs only</span>
   
    </div>
  </div>
          </div>
          <div class="w-75  m-auto">
    <hr>
  </div>
        </div>
        
          </div>
    `;
    displayId.innerHTML = cro;
}

cleck();


nextButton.addEventListener("click", function() {
    index++;
    if (index >= recipes.length) {
        index = 0;
    }
    cleck();
});


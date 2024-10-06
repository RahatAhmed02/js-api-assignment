const URL = 'https://dummyjson.com/recipes';


fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        const containerDiv = document.getElementById("container");

        data.recipes.forEach(recipe => {
            const recipeDiv = document.createElement("div");

            const titleH2 = document.createElement("h2");
            titleH2.textContent = recipe.name;

            const img = document.createElement("img");
            img.src = recipe.image;

            const ingredientsList = document.createElement("ul");
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement("li");
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });

            const instructionsList = document.createElement("ol");
            recipe.instructions.forEach(instruction => {
                const li = document.createElement("li");
                li.textContent = instruction;
                instructionsList.appendChild(li);
            });

            const ratingSpan = document.createElement("span");
            ratingSpan.textContent = `Rating: ${recipe.rating} / 5`;

            const reviewCountSpan = document.createElement("span");
            reviewCountSpan.textContent = `Reviews: ${recipe.reviewCount}`;

            const instructionHeading = document.createElement("h3");
            instructionHeading.textContent = "Instructions";

            const ingredientsHeading = document.createElement("h3");
            ingredientsHeading.textContent = "Ingredients";

            recipeDiv.appendChild(titleH2);
            recipeDiv.appendChild(img);
            recipeDiv.appendChild(ingredientsHeading);
            recipeDiv.appendChild(ingredientsList);
            recipeDiv.appendChild(instructionHeading);
            recipeDiv.appendChild(instructionsList);
            recipeDiv.appendChild(ratingSpan);
            recipeDiv.appendChild(reviewCountSpan);

            containerDiv.appendChild(recipeDiv);
        });
    })

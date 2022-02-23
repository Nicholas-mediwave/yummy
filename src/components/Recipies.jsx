import { RecipieBox } from "./RecipieBox";
import { useState } from "react";

export const Recipies = () => {
  const recipiesLists = [
    {
      ids: "1642067929941",
      recipieName: "Grill Chicken",
      foodType: "NV",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        urlpath: "../images/home/Recipes/RecipesImg/GrillChicken",
        altInfos: "Biriani Images",
      },
    },
    {
      ids: "1642067929941",
      recipieName: "Butter Chicken",
      foodType: "NV",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        urlpath: "../images/home/Recipes/RecipesImg/GrillChicken",
        altInfos: "Biriani Images",
      },
    },
    {
      ids: "1642067929941",
      recipieName: "Butter Masala",
      foodType: "NV",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        urlpath: "../images/home/Recipes/RecipesImg/GrillChicken",
        altInfos: "Biriani Images",
      },
    },
  ];

  const [recipies, setrecipies] = useState(recipiesLists);

  return (
    // <!-- Recipe STARTING -->
    <div id="Recipe" className="Recipe">
      <h1 className="OurRecipes">Our recipes</h1>
      <h1 className="PopularRecipes">POPULAR RECIPES</h1>
      {/* <!-- RecipeContainerBox STARTING --> */}
      <div className="RecipeContainerBox">
        <div className="AddRecipesBtn">
          <a href="addRecipe.html" className="AddRecipes">
            ADD RECIPES
          </a>
        </div>

        <RecipieBox recipies={recipies} />
      </div>
      {/* <!-- RecipeContainer ENDING --> */}
    </div>
    //   <!-- RecipeContainerBox ENDING -->

    // <!-- Recipe STARTING -->
  );
};

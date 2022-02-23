import { RecipieBox } from "./RecipieBox";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Recipies = () => {
  const recipiesLists = [
    {
      ids: "164206792941",
      recipieName: "Grill Chicken",
      foodType: "NV",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        urlpath:
          "https://cdn.cdnparenting.com/articles/2020/04/28171606/Grilled-Chicken-Recipe-696x476.jpg",
        altInfos: "Biriani Images",
      },
    },
    {
      ids: "164067929941",
      recipieName: "Butter Chicken",
      foodType: "NV",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        urlpath:
          "https://static.toiimg.com/thumb/53205522.cms?imgsize=302803&width=800&height=800",
        altInfos: "Biriani Images",
      },
    },
    {
      ids: "1642067941",
      recipieName: "Butter Masala",
      foodType: "V",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        urlpath:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5-500x375.jpg",
        altInfos: "Biriani Images",
      },
    },
    {
      ids: "12067929931",
      recipieName: "Tomato Pizza",
      foodType: "V",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        urlpath:
          "https://www.halfbakedharvest.com/wp-content/uploads/2021/12/Crispy-Tomato-Herb-Cheese-Pan-Pizza-1-500x375.jpg",
        altInfos: "Biriani Images",
      },
    },
    {
      ids: "164206792994",
      recipieName: "Butter Masala",
      foodType: "V",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        urlpath:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5-500x375.jpg",
        altInfos: "Biriani Images",
      },
    },
    {
      ids: "16420679291",
      recipieName: "Tomato Pizza",
      foodType: "V",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        urlpath:
          "https://www.halfbakedharvest.com/wp-content/uploads/2021/12/Crispy-Tomato-Herb-Cheese-Pan-Pizza-1-500x375.jpg",
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
          <Link to="/AddRecipies" className="AddRecipes">
            ADD RECIPES
          </Link>
        </div>

        <RecipieBox recipies={recipies} />
      </div>
      {/* <!-- RecipeContainer ENDING --> */}
    </div>
    //   <!-- RecipeContainerBox ENDING -->

    // <!-- Recipe STARTING -->
  );
};

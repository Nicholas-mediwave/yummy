import { ReactComponent as BacktoHome } from "../images/addrecipice/BacktoHome.svg";

export const AddRecipiesForm = () => {
  return (
    <>
      {/* <!-- AddRecipeFormContainer STARTING --> */}

      <div className="AddRecipeFormContainer">
        {/* <!-- BackToHome a tag div STARTING --> */}
        <div className="BackToHome">
          <a href="index.html">
            <BacktoHome /> Back to home
          </a>
        </div>
        <div className="FormTitle">
          <h1>Add your new recipe</h1>
        </div>
        {/* <!-- BackToHome a tag div ENDING --> */}

        <form id="AddRecipesForm" className="AddRecipesForm">
          <div>
            <div className="FormInput">
              <label htmlFor="RecipeName">Name of your recipe</label>
              <input type="text" id="RecipeName" name="RecipeName" />
            </div>

            <div className="FormInput">
              <label htmlFor="mtUpdate">Recipe image</label>
              <input type="text" id="RecipeImg" name="RecipeName" />
            </div>
            <div className="uploadBtn">
              <label id="uploadBtn">UPLOAD</label>
            </div>
          </div>

          <div className="FormInput">
            <label htmlFor="RecipeName">Food type</label>
            <div className="Radio_button">
              <div className="Radio_button_INPUT">
                <input
                  type="radio"
                  id="veg"
                  name="Food_type"
                  value="Vegetarian"
                />
                <label htmlFor="veg">Vegetarian</label>
              </div>
              <div className="Radio_button_INPUT">
                <input
                  type="radio"
                  id="nv"
                  name="Food_type"
                  value="Non-Vegetarian"
                />
                <label htmlFor="nv">Non-Vegetarian</label>
              </div>
            </div>
          </div>

          <div className="FormInput">
            <label htmlFor="Discription">Recipe Discription</label>
            <textarea
              name="Discription"
              id="Discription"
              className="discription"
            ></textarea>
          </div>

          <div className="FormInput">
            <label htmlFor="Ingredients">Ingredients required</label>
            <textarea
              name="Ingredients"
              id="Ingredients"
              className="ingrediants"
            ></textarea>
          </div>

          <div className="FormInput">
            <label htmlFor="StepstoPrepare">Steps to prepare</label>
            <textarea
              name="StepstoPrepare"
              id="StepstoPrepare"
              className="stepstoprepare"
            ></textarea>
          </div>

          <div className="mt-Add-Recipes">
            <a href="viewRecipes.html">
              <input type="submit" value="ADD RECIPE" />
            </a>
          </div>
        </form>
      </div>

      {/* <!-- AddRecipeFormContainer ENDING --> */}
    </>
  );
};

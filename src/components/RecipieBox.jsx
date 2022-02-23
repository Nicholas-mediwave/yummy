export const RecipieBox = (props) => {
  return (
    <div className="RecipeContainer">
      {props.recipies.map((r) => (
        <div className="RecipeBox">
          <div class="RecipeBoxContent">
            <div class="RecipeBoxContentName">
              <p>{r.recipieName}</p>
              if(r.foodType == "NV")
              <p>Non veg</p>
            </div>
            <div class="Description">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

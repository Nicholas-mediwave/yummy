import { ReactComponent as NvVIcon } from "../images/home/Recipes/VegNVIcon/NV.svg";
export const RecipieBox = (props) => {
  return (
    <div className="RecipeContainer">
      {props.recipies.map((r) => (
        <div className="RecipeBox" key={r.ids}>
          <img src={r.image.urlpath} alt="" />
          <div className="RecipeBoxContent">
            <div className="RecipeBoxContentName">
              <p>{r.recipieName}</p>
              {r.foodType === "NV" ? (
                <NvVIcon fill="#a70000" stroke="#a70000" />
              ) : r.foodType === "V" ? (
                <NvVIcon fill="#346000" stroke="#346000" />
              ) : (
                <p></p>
              )}
            </div>
            <div className="Description">
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

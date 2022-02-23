import { ReactComponent as Search } from "../images/home/hero-image/search.svg";
export const HeroImage = (props) => {
  return (
    <div id="header" className="heroImgWithLinear">
      <div className="heroImgContainer">
        <h1>{props.Discription}</h1>
        {props.ShowSearch && (
          <form className="searchBox">
            <i>
              <Search />
            </i>
            <input type="text" placeholder="Search" id="searchBox" />
          </form>
        )}
      </div>
    </div>
  );
};

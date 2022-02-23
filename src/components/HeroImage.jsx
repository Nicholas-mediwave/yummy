import { ReactComponent as Search } from "../images/home/hero-image/search.svg";
export const HeroImage = () => {
  return (
    <div id="header" className="heroImgWithLinear">
      <div className="heroImgContainer">
        <h1>Delicious recipes just click away</h1>
        <form className="searchBox">
          <i>
            <Search />
          </i>
          <input type="text" placeholder="Search" id="searchBox" />
        </form>
      </div>
    </div>
  );
};

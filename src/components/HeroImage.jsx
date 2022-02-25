import Search from "../images/home/hero-image/search.svg";
export const HeroImage = (props) => {
  return (
    <div id="header" className="heroImgWithLinear">
      <div className="heroImgContainer">
        <h1>{props.Discription}</h1>
        {props.ShowSearch && (
          <form className="searchBox">
            {/* <i>
              <Search />
            </i> */}
            <input
              type="text"
              placeholder="Search"
              id="searchBox"
              autoComplete="off"
              style={
                props.SearchIcon && {
                  backgroundImage: `url("${Search}")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 20px top 12px",
                }
              }
            />
          </form>
        )}
      </div>
    </div>
  );
};

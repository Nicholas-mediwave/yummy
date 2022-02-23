import { ReactComponent as YummyLogo } from "../images/yummylogo/Yummy.svg";
import { ReactComponent as Hamber } from "../images/nav/hamber/Hamber.svg";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      {/* <!-- NAVIGATION BAR STARTING --> */}

      <div className="Nav">
        {/* <!-- Navigation bar Inner container for logo and Menus --> */}
        <div className="Nav-InnerContainer">
          {/* <!-- Yummy Logo as SVG --> */}
          <div className="Nav-InnerContainer-Logo">
            {/* <!--  Using <a> tag for Logo--> */}
            <Link to="/">
              <YummyLogo fill="#00b158" />
            </Link>

            {/* <!-- Using checkbtn to use CheckBtn img using background Image attributes --> */}
            <div className="hamber" id="hamber-id">
              <div className="hamber-icon" id="hamber-icon-id">
                <Hamber />
              </div>
              <div className="hamberClose-icon" id="hamberClose-icon-id">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26px"
                  viewBox="0 0 24 24"
                  width="26px"
                  fill="#17285a"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg>
              </div>
            </div>
          </div>
          {/* <!--  Nav-InnerContainer-Menu for Home and Recipe <a> tag --> */}
          <div
            className="Nav-InnerContainer-Menu"
            id="Nav-InnerContainer-Menu-id"
          >
            <a href="#header" className="active">
              Home
            </a>
            <a href="#Recipe">Recipe</a>
          </div>
        </div>
      </div>
      {/* <!-- NAVIGATION BAR ENDING --> */}
    </>
  );
};

import { ReactComponent as YummyLogo } from "../images/yummylogo/Yummy.svg";
import { ReactComponent as Hamber } from "../images/nav/hamber/Hamber.svg";
import { ReactComponent as CloseIcon } from "../images/nav/hamber/CloseIcon.svg";
import { Link, useLocation } from "react-router-dom";

export const Nav = () => {
  const Location = useLocation();
  console.log(Location.pathname);
  const HamberClick = () => {
    const Movform = document.querySelector("#Nav-InnerContainer-Menu-id");
    Movform.classList.add("d-block");
    const CloseIcon = document.querySelector("#hamberClose-icon-id");
    CloseIcon.classList.add("d-block");
    const HamberIcon = document.querySelector("#hamber-icon-id");
    HamberIcon.classList.add("d-none");
  };

  const CloseClick = () => {
    const Movform = document.querySelector("#Nav-InnerContainer-Menu-id");
    Movform.classList.remove("d-block");
    const CloseIcon = document.querySelector("#hamberClose-icon-id");
    CloseIcon.classList.remove("d-block");
    const HamberIcon = document.querySelector("#hamber-icon-id");
    HamberIcon.classList.remove("d-none");
  };

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
                <Hamber onClick={HamberClick} />
              </div>
              <div className="hamberClose-icon" id="hamberClose-icon-id">
                <CloseIcon onClick={CloseClick} />
              </div>
            </div>
          </div>
          {/* <!--  Nav-InnerContainer-Menu for Home and Recipe <a> tag --> */}
          <div
            className="Nav-InnerContainer-Menu"
            id="Nav-InnerContainer-Menu-id"
          >
            {Location.pathname === "/" ? (
              <a href="#header" className="active" onClick={CloseClick}>
                Home
              </a>
            ) : (
              <a href="/#header" className="active" onClick={CloseClick}>
                Home
              </a>
            )}
            {Location.pathname === "/" ? (
              <a href="#Recipe" onClick={CloseClick}>
                Recipe
              </a>
            ) : (
              <a href="/#Recipe" onClick={CloseClick}>
                Recipe
              </a>
            )}
          </div>
        </div>
      </div>
      {/* <!-- NAVIGATION BAR ENDING --> */}
    </>
  );
};

import { ReactComponent as YummyLogo } from "../images/yummylogo/Yummy.svg";
import { ReactComponent as Twitter } from "../images/footer/social-media-icon/Twitter.svg";
import { ReactComponent as Facebook } from "../images/footer/social-media-icon/Facebook.svg";
import { ReactComponent as Instragram } from "../images/footer/social-media-icon/Instragram.svg";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    // <!-- Footer bar STARTING-->
    <>
      <div className="YammyFooter">
        <div className="footerMenu">
          <div className="footerMenuLogo">
            <Link to="/">
              <YummyLogo fill="#FFFFFF" />
            </Link>
          </div>
          <div className="footerMenuAncor">
            <a href="#header">Home </a>
            <a href="#Recipe">Recipe</a>
          </div>
          <div className="footerMenuIcon">
            <Link to="https://twitter.com/">
              <Twitter />
            </Link>
            <Link to="https://www.facebook.com/">
              <Facebook />
            </Link>
            <Link to="https://www.instagram.com/">
              <Instragram />
            </Link>
          </div>
        </div>
        <div className="footerCopyRights">
          <p>©2022 by yummy.</p>
        </div>
      </div>

      {/* <!-- Footer bar ENDING--> */}
    </>
  );
};

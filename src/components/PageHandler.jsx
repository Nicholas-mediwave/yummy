import { Nav } from "./Nav";
import { Footer } from "./Footer";
import "../css/NavAndFooter.css";

export const PageHandler = (props) => {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
};

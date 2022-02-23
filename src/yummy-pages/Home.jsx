import { HeroImage } from "../components/HeroImage";
import { PageHandler } from "../components/PageHandler";
import { Recipies } from "../components/Recipies";
import "../css/HeroImage.css";
import "../css/Recipies.css";

export const Home = () => {
  return (
    <PageHandler>
      <div className="HomeMainContainer">
        <HeroImage ShowSearch Discription="Delicious recipes just click away" />
        <Recipies />
      </div>
    </PageHandler>
  );
};

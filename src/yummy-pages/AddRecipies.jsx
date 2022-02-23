import { AddRecipiesForm } from "../components/AddRecipiesForm";
import { HeroImage } from "../components/HeroImage";
import { PageHandler } from "../components/PageHandler";
import "../css/AddRecipiesForm.css";

export const AddRecipies = () => {
  return (
    <PageHandler>
      <div className="AddRecipeMainContainer">
        <HeroImage Discription="New recipe" />
        <AddRecipiesForm />
      </div>
    </PageHandler>
  );
};

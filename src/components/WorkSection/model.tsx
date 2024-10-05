import pickMeals from "../../assets/images/pick-meals-image.png";
import chooseMeals from "../../assets/images/choose-image.png";
import deliveryMeals from "../../assets/images/delivery-image.png";
import { WorkInfoDataInterface } from "../../types/workSection.type";

export const useWorkSectionModel = () => {
  const workInfoData: WorkInfoDataInterface[] = [
    {
      image: pickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore aliquam eveniet?",
    },
    {
      image: chooseMeals,
      title: "Choose Meals",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore aliquam eveniet?",
    },
    {
      image: deliveryMeals,
      title: "Delivery Meals",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore aliquam eveniet?",
    },
  ];

  return { workInfoData };
};

import { useTestimonialSectionModel } from "./model";
import profilePic from "../../assets/images/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

export const TestimonialSectionView = ({}: ReturnType<
  typeof useTestimonialSectionModel
>) => {
  return (
    <div className="work-section-wrapper" id="testimonials">
      <header className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sit
          cum, deserunt ipsa reprehenderit magnam.
        </p>
      </header>
      <footer className="testimonial-section-bottom">
        <img src={profilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi
          facere impedit minus animi obcaecati eligendi sint alias ducimus in!
        </p>
        <div className="testimonials-stars-container">
          {[0, 1, 2, 3, 4].map(() => {
            return <AiFillStar />;
          })}
        </div>
        <h2>John Doe</h2>
      </footer>
    </div>
  );
};

import { useContactSectionModel } from "./model";

export const ContactSectionView = ({}: ReturnType<
  typeof useContactSectionModel
>) => {
  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Have Question in Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="youremail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

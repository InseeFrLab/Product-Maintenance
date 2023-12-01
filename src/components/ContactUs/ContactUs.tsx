import { AppDictionary } from "../../i18n";
import { environment } from "../../utils/read-env-vars";
import "./ContactUs.css";
const { emailBusiness, emailInfo } = environment;

export const ContactUs = () => (
  <div className="contact-us">
    <h2>{AppDictionary.CONTACT_US}</h2>
    <div>
      <a href={`mailto:${emailBusiness}`}>{AppDictionary.BUSINESS_TEAM}</a>
    </div>
    <div>
      <a href={`mailto:${emailInfo}`}>{AppDictionary.INFO_TEAM}</a>
    </div>
  </div>
);

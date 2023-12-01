import { AppDictionary } from "../../i18n";
import "./Title.css";

export const Title = () => (
  <h1>
    <div>🛠️</div>
    <div>{AppDictionary.TITLE}</div>
    <div>🛠️</div>
  </h1>
);

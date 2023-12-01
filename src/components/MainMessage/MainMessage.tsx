import { AppDictionary } from "../../i18n";
import { environment } from "../../utils/read-env-vars";
import "./MainMessage.css";

const { productName, maintenanceReason } = environment;

export const MainMessage = () => (
  <div className="main-message">
    <p>
      <b>{productName}</b>
      {AppDictionary.MAINTENANCE}
    </p>
    <p>{AppDictionary.SORRY}</p>
    <p>{AppDictionary.THANKS}</p>
    {maintenanceReason && (
      <p className="maintenance-reason">{maintenanceReason}</p>
    )}
  </div>
);

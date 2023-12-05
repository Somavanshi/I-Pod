import "./styles.css";
import { Ipod } from "./components/Iphod/Iphod";
import appStyle from "./app.module.css";

export default function App() {
  return (
    <div className={appStyle.App}>
      <Ipod />
    </div>
  );
}

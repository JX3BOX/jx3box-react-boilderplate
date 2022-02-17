import { useTitle } from "react-use";
import Jx3AppRouter from "@/router";
import "antd/dist/antd.css";
import "@/assets/less/app.less";

const Jx3App = () => {
  useTitle("Jx3box app");

  return (
    <div id="app">
      <Jx3AppRouter />
    </div>
  );
};

export default Jx3App;

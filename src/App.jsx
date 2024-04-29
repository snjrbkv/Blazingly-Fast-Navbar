import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hello from "./components/Hello";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hello />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;

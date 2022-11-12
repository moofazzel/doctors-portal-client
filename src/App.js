
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="w-5/6 mx-auto ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

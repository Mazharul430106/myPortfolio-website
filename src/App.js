
import './App.css';
import { RouterProvider } from "react-router-dom";
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="lg:w-[90%] w-full mx-auto">
        <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainMenu } from "./pages/MainMenu";
import { Layoute } from "./components/Layoute";
import { About } from "./pages/About";
import { Cuisine } from "./pages/Cuisine";
import { Form } from "./pages/Form";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layoute />}>
          <Route path="/about" element={<About />} />
          <Route path="/get-menu" element={<MainMenu />} />
          <Route path="/get-menu/:menuId" element={<Cuisine />} />
          <Route path="/add-menu-form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

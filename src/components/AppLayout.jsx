import { useState } from "react";
import NavBar from "./NavBar";
import Home from "../pages/Home";

const AppLayout = () => {
  const [category, setCategory] = useState(null);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div id="app-layout">
      <NavBar onCategoryChange={handleCategoryChange} />
      <main>
        {/* Load the news based on category passed by props*/}
        <Home category={category} />
      </main>
    </div>
  );
};

export default AppLayout;

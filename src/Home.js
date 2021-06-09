import { useState } from "react";
import moonIcon from "./images/icon-moon.svg";
import sunIcon from "./images/icon-sun.svg";

const Home = () => {
  const [themeIcon, setThemeIcon] = useState(moonIcon);

  const handleChangeTheme = () => {
    if (themeIcon === moonIcon) {
      setThemeIcon(sunIcon);
    } else {
      setThemeIcon(moonIcon);
    }
  };

  return (
    <div className="home">
      <div className="home__box">
        <div className="home__title-bar">
          <h1 className="heading-primary">todo</h1>
          <img
            src={themeIcon}
            alt=""
            className="home__theme-icon"
            onClick={handleChangeTheme}
          />
        </div>

        <div className="input mt-md mb-sm">
          <div className="checkbox"></div>
          <input
            type="text"
            className="input__field"
            placeholder="Create a new todo..."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useContext, useState } from "react";
import ".././assets/main.css";
import { AuthContext } from './../authContext/AuthContext';

export default function Theme() {
  const [open, setOpen] = useState(false);

  const toggleOpenTheme = () => {
    setOpen(!open);
  };

  const setTheme = (theme) => {
    document.body.className = theme;
  };

  const themes = [
    "firstColor",
    "secondColor",
    "thirdColor",
    "fourthColor",
    "fifthColor",
    "sixthColor",
    "seventhColor",
    "eighthColor"
  ];

  const changeTheme = (index) => {
    setTheme(themes[index]);
    localStorage.setItem("theme", themes[index]);
  };

  const {userData} = useContext(AuthContext)

  return (
    <div className="themeContainer">
      <div
        title="Change Theme"
        className="themeColor"
        onClick={toggleOpenTheme}
      ></div>

      <div className={open ? "themeBox" : "transHide"}>
        <h5>Themes</h5>
        <div className="themesGrid">
          <div
            onClick={() => {
              changeTheme(0);
            }}
          title="#478792"></div>

<div
            onClick={() => {
              changeTheme(1);
            }}
          title="#478792"></div>

          <div
            onClick={() => {
              changeTheme(2);
            }}
            title="#5e29db"></div>

          <div
            onClick={() => {
              changeTheme(3);
            }}
            title="#b563ec"></div>

          <div
            onClick={() => {
              changeTheme(4);
            }}
            title="#00ccff"></div>

        </div>
      </div>
    </div>
  );
}

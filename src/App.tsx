
import "./App.css";
import AppViews from "./AppViews.jsx";
import { NavBar } from "./components/NavBar.js";


function App() {
  let isDarkMode: string | null = localStorage.getItem("darkMode");
  //function adds darkMode to local storage and adds class "dark-mode" to body element
  const enableDarkMode = () => {
    localStorage.setItem("darkMode", "true");
    document.body.classList.add("dark-mode");
  };

  //function removes dark mode from local storage and adds class of "light-mode" to body element
  const disableDarkMode = () => {
    localStorage.removeItem("darkMode");
    document.body.classList.remove("dark-mode");
  };
  
  //if darkMode object is in localStorage then keep dark mode on
  isDarkMode == "true"? enableDarkMode(): disableDarkMode();
  //function sets isDarkMode var to either null or true then enables dark or light mode respectively
  const toggleTheme = () => {
    if (isDarkMode == "true") disableDarkMode();
    else enableDarkMode();
    isDarkMode = isDarkMode == "true" ? null : "true";
  };

  return (
    <>
      <h1>TechPath <span>Pro</span></h1>
      <button className="button" onClick={toggleTheme}>
        switch theme
      </button>
      <NavBar />
      <AppViews />
    </>
  );
}

export default App;

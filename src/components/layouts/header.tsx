import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  const createTitle = (pathname: string) => {
    let title = "";
    switch (pathname) {
      case "/searched":
        title = "Seached";
        break;
      case "/statistics":
        title = "Statistics";
        break;
    }

    return title;
  };

  useEffect(() => {}, []);
  return (
    <header>
      <div>{createTitle(pathname)}</div>
      <div></div>
    </header>
  );
};

export default Header;

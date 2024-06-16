import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState("");

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

    setTitle(title);
  };

  useEffect(() => {
    createTitle(pathname);
  }, []);
  return (
    <header>
      <div>{title}</div>
      <div></div>
    </header>
  );
};

export default Header;

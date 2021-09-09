import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const unprotectedRoute = (Component: Component) => {
  return () => {
    const { isLoggedIn } = useSelector((state) => state.registerState);
    const history = useHistory();

    useEffect(() => {
      if (isLoggedIn === true) {
        history.push("/");
      }
    }, [isLoggedIn, history]);

    return <Component />;
  };
};

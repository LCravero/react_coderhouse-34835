import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";

function RouteWithNotFound(props) {
  const { children, path } = props;
  return (
    <Routes>
      {children}
      <Route path={path} element={<NotFound />} />
    </Routes>
  );
}

export default RouteWithNotFound;

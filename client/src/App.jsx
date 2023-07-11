// root
import { Routes, Route, Navigate } from "react-router-dom";

// components
import routes from "./routes/routes";
import "./App.css";

export default function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
    });

  return (
    <Routes>
      {getRoutes(routes)}
      <Route path="*" element={<Navigate to="/add-clients" />} />
      <Route path="*" element={<Navigate to="/add-projects" />} />
    </Routes>
  );
}

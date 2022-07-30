import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Private from "./components/Private";
import Header from "./components/shared/Header";
import Layout from "./components/shared/Layout";
import TaskCreate from "./components/task/Create";
import List from "./components/task/List";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Task from "./pages/Task";
import routes from "./routes";
function App() {
  return (
    <>
      <Layout>
        <div className="relative">
          <Routes>
            {/* {routes.map((route) => (
            <Route
              key={route.slug}
              path={route.path}
              element={<route.component />}
            />
          ))} */}
            <Route path="/" element={<Login />} />

            <Route path="/*" element={<Private />}>
              {/** dashboard route */}
              <Route path="dashboard" element={<Dashboard />} />
              {/** tasks route */}
              <Route path="tasks" element={<Task />} />
              <Route path="tasks/create" element={<TaskCreate />} />
            </Route>
          </Routes>
        </div>
      </Layout>
    </>
  );
}

export default App;

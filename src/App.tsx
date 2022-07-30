import React from "react";
import { Route, Routes } from "react-router-dom";
import MemberCreate from "./components/member/Create";
import MemberUpdate from "./components/member/Update";
import Private from "./components/Private";
import Layout from "./components/shared/Layout";
import TaskCreate from "./components/task/Create";
import TaskUpdate from "./components/task/Update";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Member from "./pages/Member";
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
              <Route path="tasks/update/:id" element={<TaskUpdate />} />
              <Route path="members" element={<Member />} />
              <Route path="members/create" element={<MemberCreate />} />
              <Route
                path="members/update/:memberId"
                element={<MemberUpdate />}
              />
            </Route>
          </Routes>
        </div>
      </Layout>
    </>
  );
}

export default App;

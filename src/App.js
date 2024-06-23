import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import Footer from "./Components/Footer.js";
import Contact from "./Components/Contact_Us.js";
import Error from "./Components/Error_Page.js";
import Shimmer_1 from "./Components/Shimmer_1.js";
import RestaurantDetail from "./Components/RestaurantDetail.js";
import store from "../Utility/store.js";
import UserContext from "./UserContext.js";
import { ThemeProvider } from "./ThemeContext.js";

const About = lazy(() => import("./Components/About_Us.js"));
const Cart = lazy(() => import("./Components/Cart.js"));

const Container = () => {
  const [user, setUser] = useState({
    Name: "Angad Patil",
    Email: "angadpatil1141@gmail.com",
  });

  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () => {
    setThemeMode("dark");
  };

  const lightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <Provider store={store}>
      <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
        <UserContext.Provider value={{ user: user }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </ThemeProvider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
          //Prop Drilling
          // user={{
          //   Name: "Angad Patil",
          //   Email: "angadpatil1141@gmail.",
          // }}
          />
        ),
      },
      {
        path: "/About",
        element: (
          <Suspense fallback={<Shimmer_1 />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },
      {
        path: "/Cart",
        element: (
          <Suspense fallback={<Shimmer_1 />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

/*
Pass Data From App.js to RestaurantCard.js

Container
  (state = user)
    <body user = {user}/>
      RestaurantContainer user =>
        RestaurantCard user = {user}
          <p>{user.Name}<p/>

THIS PROCESS IS CALLED AS PROPS DRILLING

*/

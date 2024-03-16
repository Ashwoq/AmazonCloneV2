import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./Global.css";
import Header from "./Header";
import Landing from "./Landing";
import Checkout from "./Checkout/Checkout";
import Login from "./Auth/Login";
import { useEffect } from "react";
import { auth } from "./Auth/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./Checkout/StateProvider";
import productItemData from "../src/assets/Data/ProductsData.json";
import AllProducts from "./AllProducts";
import Footer from "./Footer";
import Payment from "./Payment";
import Orders from "./Orders";
import SignUp from "./Auth/SignUp";

function App() {
  const mobilePhones = productItemData.mobilePhones;
  const appliancesData = productItemData.homeAppliances;
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      // console.log("the user is ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  const MainLayout = () => {
    return (
      // <div className="bg-[#e3e6e6] grid grid-rows-3">
      <div className="">
        {/* <div className=""> */}
        <Header />
        {/* </div> */}
        {/* <div className=""> */}
        <Outlet />
        {/* </div> */}
        {/* <div className=""> */}
        <Footer />
        {/* </div> */}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "/payment", element: <Payment /> },
        { path: "/orders", element: <Orders /> },
        {
          path: "/mobile",
          element: (
            <div className="lg:m-10 lg:my-5 xs:m-7 xs:my-4">
              <div className="mb-2 leading-4 text-[#565959] lg:text-sm xs:text-xs font-medium">
                <div className="font-semibold text-black lg:text-2xl xs:text-xl">
                  Results
                </div>
                Check each product page for other buying options.
              </div>{" "}
              {mobilePhones.map((productItem, index) => (
                <AllProducts key={index} productItem={productItem} />
              ))}
            </div>
          ),
        },
        {
          path: "/appliances",
          element: (
            <div className="lg:m-10 lg:my-5 xs:m-7 xs:my-4">
              <div className="mb-2 leading-4 text-[#565959] lg:text-sm xs:text-xs font-medium">
                <div className="font-semibold text-black lg:text-2xl xs:text-xl">
                  Results
                </div>
                Check each product page for other buying options.
              </div>{" "}
              {appliancesData.map((productItem, index) => (
                <AllProducts key={index} productItem={productItem} />
              ))}
            </div>
          ),
        },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

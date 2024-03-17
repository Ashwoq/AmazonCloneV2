import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./Auth/firebase";
import { useStateValue } from "./Checkout/StateProvider";
import CheckOutProducts from "./Checkout/CheckOutProducts";
import moment from "moment";

const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const q = query(
          collection(db, "users", user.uid, "orders")
          //   orderBy("created", "desc")
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });

        return unsubscribe;
      } else {
        setOrders([]);
      }
    };

    fetchData();
  }, [user]);

  return (
    <div className="bg-[#eaeded]">
      <div className="w-full mx-auto lg:flex sm:block">
        <div className="m-5 mx-auto my-8 bg-white w-max-8xl lg:p-5">
          <div className="flex justify-between border-[#dddddd] border-b-[1px] pb-3 mb-3 xs:m-5 font-semibold mr-5">
            <div className="lg:text-3xl xs:text-lg">
              {orders.length > 0 ? "Previous Orders" : "No Order"}
            </div>
            {/* <div className="relative text-s text-[#565959] top-7">Price</div> */}
          </div>
          {orders?.map((order, i) => (
            <div key={i}>
              <div className="p-4 mx-5 bg-[#f1f1f192] font-semibold my-5 border-[1px] ">
                Order Date :{" "}
                {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
              </div>

              {/* {order.id} */}
              {order.data.basket?.map((item, i) => (
                <div key={i} className="p-4 mx-5 bg-[#f1f1f192] border-[1px] ">
                  <CheckOutProducts
                    title={item.title}
                    price={item.price}
                    src={item.image}
                    sellerName={item.SellerName}
                    description={item.description}
                    qty={item.qty}
                    sellerCompany={item.sellerCompany}
                    hideButton
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* <div className="bg-[#eaeded] lg:w-[22%] sm:w-[95%] lg:m-5 lg:ml-0 lg:mt-8 sm:mx-auto">
          <SubTotal />{" "}
        </div> */}
      </div>
      {/* <div className="py-4 text-2xl mx-5 bg-[#f1f1f192] font-semibold text-center border-[1px] ">
        Previous Orders
      </div>{" "}
      <div>
        {orders?.map((order, i) => (
          <div key={i}>
            <div className="p-4 mx-5 bg-[#f1f1f192] font-semibold my-5 border-[1px] ">
              Order Date :{" "}
              {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
            </div>
            {order.data.basket?.map((item, i) => (
              <div key={i} className="p-4 mx-5 bg-[#f1f1f192] border-[1px] ">
                <CheckOutProducts
                  title={item.title}
                  price={item.price}
                  src={item.image}
                  sellerName={item.SellerName}
                  description={item.description}
                  sellerCompany={item.sellerCompany}
                  hideButton
                />
              </div>
            ))}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Orders;

import React from "react";
import { useStateValue } from "./Checkout/StateProvider";
import CheckOutProducts from "./Checkout/CheckOutProducts";
import { Link, useNavigate } from "react-router-dom";
import { db } from "./Auth/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const Payment = () => {
  const history = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     const payload = "Sd";
  //     // collection(db, "users");
  //     db.collection("users")
  //       .doc(user?.uid)
  //       .collection("orders")
  //       .doc(user.uid)
  //       .set({
  //         basket: basket,
  //         amount: 23233,
  //       });
  //     dispatch({ type: "EMPTY_BASKET" });
  //     history("/orders");
  //   };

  const handleSubmit = async () => {
    event.preventDefault();

    if (!user) {
      Swal.fire(
        "🙅",
        "You need to login / Register inorder to proceed",
        "error"
      );
      history("/login");
    }

    if (user) {
      try {
        const currentDate = Math.floor(new Date().getTime() / 1000);
        const orderId = uuidv4();

        const userOrderRef = doc(db, "users", user.uid, "orders", orderId);
        const totalAmount = basket.reduce(
          (total, item) => total + item.price,
          0
        );

        // Set document data
        await setDoc(userOrderRef, {
          basket: basket,
          amount: totalAmount,
          created: currentDate,
        });

        // Dispatch action to empty basket
        dispatch({ type: "EMPTY_BASKET" });
        Swal.fire("Hey!", "Order Placed Successfully", "success");

        history("/orders");
      } catch (error) {
        console.error("Error creating order:", error);
      }
    }
  };

  return (
    <div className="">
      <div className="lg:m-10 xs:m-5">
        <div className="py-4 lg:text-2xl xs:text-lg xs:m-1 xs:my-3 lg:mx-5 bg-[#f1f1f192] font-semibold text-center border-[1px] ">
          Checkout (
          <Link className="cursor-pointer" to={"/checkout"}>
            {basket?.length} items
          </Link>
          )
        </div>
        <div className="flex p-5 xs:m-1 lg:mx-5 lg:my-5 xs:my-3 bg-[#f1f1f192] lg:text-xl xs:text-sm font-semibold border-[1px]">
          <div className="flex-[0.2] lg:mr-0 xs:mr-2">Delivery Address</div>
          <div className="lg:text-base xs:text-xs font-normal flex-[0.8]">
            <p className="font-medium">{user?.email}</p>
            <p className="italic font-light lg:text-sm xs:text-xs">
              Address field will be included in future
            </p>
            <p className="italic font-light lg:text-sm xs:text-xs">
              For the time being this will be static
            </p>
          </div>
        </div>
        <div className="flex p-5 xs:m-1 lg:mx-5 lg:my-5 xs:my-3 bg-[#f1f1f192] lg:text-xl xs:text-sm  font-semibold border-[1px] ">
          <div className="flex-[0.2] lg:mr-0 xs:mr-2 xs:mt-3">
            Review items and delivery
          </div>
          <div className="lg:text-base xs:text-xs font-normal flex-[0.8]">
            {" "}
            {basket.map((item, i) => (
              <div key={i}>
                <CheckOutProducts
                  title={item.title}
                  src={item.image}
                  description={item.description}
                  price={item.price}
                  sellerName={item.sellerName}
                  sellerCompany={item.sellerCompany}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex p-5 xs:m-1 lg:mx-5 bg-[#f1f1f192] lg:my-5  xs:my-3 lg:text-xl xs:text-sm  font-semibold border-[1px]">
          <div className=" flex-[0.2] lg:mr-0 xs:mr-2 my-auto">
            <h3>Order Confirmation</h3>
          </div>
          <button
            onClick={handleSubmit}
            className=" rounded-xl hover:bg-[#f7ca00] transition bg-[#FFD814] lg:p-2 border text-center lg:px-8 lg:pb-2 xs:px-4 lg:text-lg xs:text-xs xs:py-0 border-[#FCD200] shadow-md lg:scale-[1] xs:scale-[0.7]"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

// hover:scale-[1.03] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]

export default Payment;

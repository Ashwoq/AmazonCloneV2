import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import TextField from "@mui/material/TextField";

const SignUp = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registor = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // console.log(auth);
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <Link to={"/"}>
        <div className="flex items-center justify-center mt-4">
          <img
            className="object-contain w-[100px] mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            alt="amazon-logo"
          />
          <span className="mt-[-8px] font-semibold text-black ">&nbsp;.in</span>
        </div>
      </Link>
      <div className="flex flex-col max-w-[360px] p-4 px-6 mt-5 bg-white border rounded-md h-fit">
        <div className="mb-3 text-[26px] font-semibold">Sign Up</div>
        <form>
          {/* <div className="ml-[1.5px] text-xs font-semibold bg-lime-500">
            Enter your Email
          </div> */}

          <div className="my-1 mt-2">
            <TextField
              className="w-full"
              type="text"
              value={email}
              required
              name="email"
              id="emaiID"
              onChange={(e) => setEmail(e.target.value)}
              label="Enter your email"
              variant="outlined"
              size="small"
              // sx={{
              //   ".MuiOutlinedInput-input": {
              //     outline: "black",
              //   },
              // }}
            />
          </div>

          {/* <input
            className="w-full px-1 mt-1 mb-2 bg-pink-500 border-2 border-black rounded-sm h-7"
            type="text"
            value={email}
            required
            name="email"
            id="emaiID"
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          {/* <h5>Password</h5>
          <input
            className="w-full px-1 mb-2 bg-pink-500 h-7"
            type="password"
            value={password}
            required
            name="pswd"
            id="pswdID"
            onChange={(e) => setPassword(e.target.value)}
          /> */}

          <div className="my-4">
            <TextField
              className="w-full"
              type="password"
              value={password}
              required
              name="pswd"
              size="small"
              id="pswdID"
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              variant="outlined"
            />
          </div>
        </form>
        <div className="my-3 text-xs">
          By continuing, you agree to Amazon's Fake Clone{" "}
          <span className="text-blue-700 ">Conditions of Use</span> and
          <span className="text-blue-700 "> Privacy Notice.</span>
        </div>
        <button
          className="w-full rounded-xl bg-[#FFD814] hover:bg-[#f7ca00] p-1 border my-2 text-center border-[#FCD200] shadow-md"
          onClick={registor}
        >
          Confirm Details
        </button>
      </div>
    </div>
  );
};

export default SignUp;

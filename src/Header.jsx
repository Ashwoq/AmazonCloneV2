import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./Checkout/StateProvider";
import { auth } from "./Auth/firebase";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const top100Films = [
    { label: "Mobile Phone", path: "/mobile" },
    { label: "Home Appliances", path: "/appliances" },
  ];

  const [open, setOpen] = React.useState(false);
  const [inputData, setInputData] = React.useState("");
  const history = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  const handleInputChange = (event, value) => {
    if (value) {
      const selectedOption = top100Films.find(
        (option) => option.label === value
      );
      if (selectedOption) {
        history(selectedOption.path);
      }
    }
  };

  const DrawerList = (
    <div
      role="presentation"
      className="p-3 m-2 text-base flex flex-col justify-between h-full bg-[#556d9385] rounded-md"
      onClick={toggleDrawer(false)}
    >
      <div className="flex items-center justify-center w-full mb-5 rounded-md bg-[#3f516d]">
        <Link to={"/"}>
          <img
            className="object-contain my-5 mt-8 w-28"
            src="https://pngimg.com/d/amazon_PNG11.png"
            alt="amazon-logo"
          />
        </Link>
      </div>{" "}
      <div className="text-lg font-semibold">Hello,</div>
      <div className="pb-5 font-medium h-[90%]">
        {[
          !user ? "Guest" : user.email,
          "Returns & Orders",
          "Checkout Cart",
        ].map((text, index) => (
          <div key={text}>
            {/* disablePadding */}
            <Link
              to={
                text === "Returns & Orders"
                  ? "/orders"
                  : text === "Checkout Cart"
                  ? "/checkout"
                  : "/"
              }
            >
              {/*  to={"/orders"} */}
              {/*  to={"/checkout"} */}
              {/* <Link to={!user && "/login"}> */}

              <div className="rounded-xl bg-[#FFD814] hover:bg-[#f7ca00] p-1 border my-3 text-center px-6 pb-2 border-[#FCD200] shadow-md ">
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                {/* <ListItemText
                  primary= */}
                {text}
                {/* /> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Divider />
      <div className="py-1 font-medium">
        {[user ? "Sign Out" : "Sign In"].map((text, index) => (
          <div key={text}>
            {/* disablePadding */}
            <Link to={!user && "/login"}>
              <div
                onClick={handleAuth}
                className="rounded-xl bg-[#FFD814] hover:bg-[#f7ca00] p-1 border my-3 text-center px-6 pb-2 mr-20 border-[#FCD200] shadow-md "
              >
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                {/* <ListItemText
                  primary= */}
                {text}
                {/* /> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* <List>
        {[user ? "Sign Out" : "Sign In"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              //  <ListItemIcon>
              //   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              // </ListItemIcon> 
              <ListItemText sx={{ fontWeight: "bold" }} primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div className="sticky top-0 z-10 flex items-center w-full h-16 bg-theme-amazonBG">
      <div className="lg:flex xs:hidden md:flex items-center justify-center w-[10%]">
        <Link to={"/"}>
          <img
            className="ml-5 mt-[14px] lg:w-24 xs:w-14 object-contain"
            src="https://pngimg.com/d/amazon_PNG11.png"
            alt="amazon-logo"
          />
        </Link>
        <span className="mr-5 text-white lg:text-xs lg:flex xs:hidden" md:flex>
          .in
        </span>
      </div>
      <div className="lg:hidden md:hidden xs:flex">
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon style={{ color: "white" }} />
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
      <div className="lg:flex xs:hidden md:flex items-center justify-center w-[13%] mx-2 text-white cursor-not-allowed ml-[-10px] mr-3">
        <div>
          <LocationOnIcon style={{ color: "white", fontSize: "27px" }} />
        </div>
        <div className="text-sm leading-4 ">
          {/* <div></div> */}
          {/* <div></div> */}
          <div className="bg-lime-0 text-[12px]">
            Delivering to Chennai 600107
          </div>
          <span className="bg-lime-0  text-[14px] font-bold">
            location Disabled
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 h-[69%]  bg-white rounded-md">
        {/* <input
          type="text"
          placeholder="Search Amazon.in"
          className="rounded-l-md w-full border-none p-[10px]"
        /> */}
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          className="w-full border-none rounded-l-md "
          sx={{
            // ".MuiButtonBase-root": {
            //   display: "none",
            // },
            // ".Mui-focused": {
            //   outline: "none!important",
            //   border: "none!important",
            // },
            // ".MuiAutocomplete-inputFocused": {
            //   outline: "none",
            //   border: "none",
            //   outline: "none!important",
            //   border: "none!important",
            // },
            // ".MuiOutlinedInput-root": {
            //   outline: "none",
            //   border: "none",
            //   outline: "none!important",
            //   border: "none!important",
            // },
            // ".MuiFormLabel-root.Mui-focused": {
            //   color: "red!important",
            // },
            ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              { borderColor: "transparent!important" },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={(e) => setInputData(e.target.value)}
              value={inputData}
              placeholder="Search Amazon.in"
            />
          )}
          onInputChange={handleInputChange}
        />
        <div className="flex items-center justify-center h-full p-1 px-2 rounded-r-md bg-theme-amazonYC">
          <SearchIcon style={{ fontSize: 30 }} />
        </div>
      </div>
      <div className="flex w-[20%] justify-evenly leading-[1.1] ">
        <Link to={!user && "/login"}>
          <div
            onClick={handleAuth}
            className="flex-col text-white lg:flex xs:hidden md:flex bg-red-0"
          >
            <span className="bg-lime-0 text-[12px]">
              Hello, {!user ? "Guest" : user.email.substring(0, 6)}...
            </span>
            <span className="bg-lime-0 text-[14px] font-bold">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to={"/orders"}>
          <div className="flex-col text-white cursor-pointer lg:flex xs:hidden md:flex bg-red-0">
            <span className="bg-lime-0 text-[12px]">Returns</span>
            <span className="bg-lime-0 text-[14px] font-bold">& Orders</span>
          </div>
        </Link>
        <Link to={"/checkout"}>
          <div className="flex items-center text-white lg:mr-[-20px]">
            <ShoppingCartOutlinedIcon fontSize="large" />
            <span className="lg:text-[12px] xs:text-[11px] xs:text-[#f3a847] lg:text-black relative lg:top-[-20px] xs:top-[-18px] lg:left-[-22px] xs:left-[-20px] font-bold lg:mr-4 rounded-full lg:px-1 lg:bg-theme-amazonYC">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

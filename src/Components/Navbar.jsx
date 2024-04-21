import React from "react";
import "./Navbar.css";
import {
  Box,
  Text,
  Flex,
  Image,
  Heading,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { Link, Link as RouterLink, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { AiFillShop, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  return (
    <div className="nav-root">
      <div className="custom-navbar">
        <div className="navbar-left">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<AiOutlineMenu size={"25px"} />}
              variant="outline"
            />
            <MenuList>
              <RouterLink to={"/"}>
                <MenuItem>Home</MenuItem>
              </RouterLink>
              <RouterLink to={"/dressespage"}>
                <MenuItem>Shop</MenuItem>
              </RouterLink>
              <RouterLink to={"/cartpage"}>
                <MenuItem>Cart</MenuItem>
              </RouterLink>
            </MenuList>
          </Menu>
          <div className="nav-logo">
            <div>
              <img
                src={"https://d1k0rbiro50qe0.cloudfront.net/davids-dark.svg"}
                alt="Logo"
                className="logo"
              />
            </div>
          </div>
        </div>
        <div className="nav-links">
          <div onClick={() => navigate("/")}>Home</div>
          <div onClick={() => navigate("/dressespage")}>Shop</div>
          <div onClick={() => navigate("/cartpage")}>Cart</div>
        </div>
        {/* {isAuthenticated ? (
          <Button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </Button>
        ) : (
          <Button onClick={() => loginWithRedirect()}>Log In</Button>
        )}
        {!isAuthenticated ? (
          <div className="last-nav">
            <Link to={"/signup"} className="signup-link">
              <div className="nav-signup">Signup</div>
            </Link>
            <Link className="login-link" to={"/login"}>
              <div className="nav-login">Login</div>
            </Link>
          </div>
        ) : (
          // <UserButton showName signInUrl="/login" />
          <Button onClick={() => loginWithRedirect()}>Log In</Button>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;

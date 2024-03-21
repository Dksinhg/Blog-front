import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { RiImageAddLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelpBook } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";

const User = () => {
  const user = true;

  const [profileOpen, setprofileOpen] = useState(false);

  const close = () => {
    setprofileOpen(false);
  };

  return (
    <>
      <div className="profile">
        {user ? (
          <>
            <button className="img" onClick={()=>setprofileOpen(!profileOpen)}>
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.NCna9ffDH2-BY2OD23lngAAAAA&pid=Api&P=0&h=180"
                alt="images"
                //width="100px"
              />
            </button>
            {profileOpen && (
              <div className="openProfile boxItems" onClick={close}>
                <Link to="account">
                  <div className="image">
                    <div className="img">
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.NCna9ffDH2-BY2OD23lngAAAAA&pid=Api&P=0&h=180"
                        alt="images"
                        // width="100px"
                      />
                    </div>
                    <div className="text">
                      <h4>Dinesh Singh </h4>
                      <h4>Delhi, India</h4>
                    </div>
                  </div>
                </Link>
                <Link to="/create">
                  <button className="box">
                    <RiImageAddLine className="icon" />
                    <h4> Create Post</h4>
                  </button>
                </Link>
                <button className="box">
                  <IoSettingsOutline className="icon" />
                  <h4> My Account</h4>
                </button>
                <button className="box">
                  <BsBagCheck className="icon" />
                  <h4> My order</h4>
                </button>
                <button className="box">
                  <AiOutlineHeart className="icon" />
                  <h4> Wishlist </h4>
                </button>
                <button className="box">
                  <GrHelpBook className="icon" />
                  <h4> help </h4>
                </button>
                <button className="box">
                  <FiLogOut className="icon" />
                  <h4> logout </h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <Link to="login">
              <button> My Account </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default User;

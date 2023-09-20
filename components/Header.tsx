import React, { useEffect, useState } from "react";

import Styles from "../styles/Header.module.scss";
import { Badge } from "@mui/material";
import Link from "next/link";


import { useRouter } from "next/router";
import { data } from "./Data";
function Header() {

  // handleShowNavbar
  const handleShowNavbar = () => {
    let wrapper = document.querySelector(
      `.${Styles.wrapper}`
    ) as HTMLDivElement;
    wrapper.style.visibility = "visible";
    wrapper.style.zIndex = "999";
    let mobileNavbar = document.querySelector(
      `.${Styles.mobileNavbar}`
    ) as HTMLDivElement;
    mobileNavbar.classList.remove(`${Styles.hideMobileNavbar}`);
    mobileNavbar.classList.add(`${Styles.showMobileNavbar}`);
  };
  // handleHideNavBar
  const handleHideNavBar = (e: React.MouseEvent<HTMLDivElement>) => {
    let mobileNavbar = document.querySelector(
      `.${Styles.mobileNavbar}`
    ) as HTMLDivElement;
    mobileNavbar.classList.remove(`${Styles.showMobileNavbar}`);
    mobileNavbar.classList.add(`${Styles.hideMobileNavbar}`);
    (e.target as HTMLDivElement).style.visibility = "hidden";
    (e.target as HTMLDivElement).style.zIndex = "-1";
    (e.target as HTMLDivElement).style.transition = "500ms";
  };
  // useSlectorHook && useDispatchHook

  let categories: string[] = [];
  useEffect(() => {

    window.addEventListener("scroll", (e) => {
      let navBarSection = document.querySelectorAll(".navBarSection");

      if (window.scrollY > 200) {
        Array.from(navBarSection).map((item: any) => {
          item.style.position = "fixed";
          item.style.top = "0px";
          item.style.left = "0px";
          item.style.width = "100%";
          item.style.zIndex = "9999";
          item.classList.remove("mt-3");
        });
      } else {
        Array.from(navBarSection).map((item: any) => {
          item.style.position = "static";
          item.style.zIndex = "0";
          item.classList.add("mt-3");
        });
      }
    });
  }, []);



  const router=useRouter();
  return (
    <div>
      <div className={Styles.headerContactBgColor}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="clearfix">
                <div className="float-start" style={{ position: "relative" }}>
                  <i
                    className={`bi bi-phone-vibrate  ${Styles.shakePhone}`}
                  ></i>
                  <span style={{ marginLeft: "20px" }}>
                    <span>(+98)</span>
                    <span style={{ marginLeft: "2px" }}>9187734420</span>
                  </span>
                </div>
                <div className="float-end">
                  <i className="bi bi-box-arrow-in-right"></i>
                  <span className="ms-1 me-2">login</span>
                  <i className="bi bi-person-add me-1"></i>
                  <span>register</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile navbar && cart */}
      <div
        className="bg-dark mt-3 text-warning d-md-none navBarSection"
        style={{ height: "30px", lineHeight: "20px" }}
      >
        <div className="container pt-1">
          <div className="row">
            <div className="col-12">
              <div className="clearfix">
                <div className="float-start">
                  <i className="bi bi-list" onClick={handleShowNavbar}></i>
                </div>
                <div className="float-end">
                  <Badge badgeContent={'0'} max={99} className=" ">
                    <i className="bi bi-cart4 "></i>
                  </Badge>
                  <Badge badgeContent={47} max={99} className=" ms-2">
                    <i className="bi bi-bag-heart "></i>
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tablet navbar */}
      <div className="bg-dark mt-3 d-none d-md-block navBarSection">
        <div className="container">
          <div className="row">
            <nav className="col-10" style={{ height: "30px", lineHeight: "30px" }}>
              <ul className="d-flex list-unstyled">
                <li className=" border-end border-muted px-2 bg-danger">
                  <Link
                    href={"/"}
                    passHref
                    className="text-decoration-none text-capitalize"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    <i className="bi bi-house-door-fill text-white"></i>
                   
                  </Link>
                </li>
                <li
                  className={` border-end border-muted px-2  ${Styles.liTablet}`}
                >
                  <Link
                    href={"/tasks"}
                    passHref
                    className="text-decoration-none text-capitalize"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    tasks
                  </Link>
                </li>
                <li
                  className={` border-end border-muted px-2  ${Styles.liTablet}`}
                >
                  <Link
                    href={"/"}
                    passHref
                    className="text-decoration-none text-capitalize"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    cart
                  </Link>
                </li>
                <li
                  className={` border-end border-muted px-2  ${Styles.liTablet}`}
                >
                  <Link
                    href={"/"}
                    passHref
                    className="text-decoration-none text-capitalize"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    wishlist
                  </Link>
                </li>
                <li
                  className={` border-end border-muted px-2  ${Styles.liTablet}`}
                >
                  <Link
                    href={"/"}
                    passHref
                    className="text-decoration-none text-capitalize"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    about us
                  </Link>
                </li>
                <li className={` px-2  ${Styles.liTablet}`}>
                  <Link
                    href={"/"}
                    passHref
                    className="text-decoration-none text-capitalize"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    contact us
                  </Link>
                </li>
              </ul>
            </nav>
            <div
            className="d-none d-md-block col-md-2 text-warning"
            style={{ height: "30px" }}
          >
            <div className="row">
              <div className="col-6 h-100 text-end">
                <Badge
                  badgeContent={'0'}
                  max={99}
                  className=" "
                  style={{ lineHeight: "20px" }}
                >
                  <i
                    className="bi bi-cart4 fs-5"
                    style={{ color: "tomato" }}
                  ></i>
                </Badge>
              </div>
              <div className="col-6 h-100">
                <Badge
                  badgeContent={1}
                  max={99}
                  className=" "
                  style={{ lineHeight: "20px" }}
                >
                  <i
                    className="bi bi-bag-heart fs-5"
                    style={{ color: "tomato" }}
                  ></i>
                </Badge>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div
        className={`${Styles.wrapper} d-md-none`}
        onClick={handleHideNavBar}
      ></div>
      {/* mobile navbar links */}
      <div
        className={` text-white d-md-none border-end border-muted ${Styles.mobileNavbar}`}
      >
        <ul className="d-flex flex-column list-unstyled">
          <li className="  px-2 bg-danger">
            <Link
              href={"/"}
              passHref
              className="text-decoration-none text-capitalize"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              <i className="bi bi-house-door-fill text-white"></i>
              
            </Link>
          </li>
          <li className={`  px-2  ${Styles.liTablet} mt-3`}>
            <Link
              href={"/tasks"}
              passHref
              className="text-decoration-none text-capitalize"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              tasks
            </Link>
          </li>
          <li className={`  px-2  ${Styles.liTablet} mt-3`}>
            <Link
              href={"/"}
              passHref
              className="text-decoration-none text-capitalize"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              cart
            </Link>
          </li>
          <li className={`  px-2  ${Styles.liTablet} mt-3`}>
            <Link
              href={"/"}
              passHref
              className="text-decoration-none text-capitalize"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              wishlist
            </Link>
          </li>
          <li className={`  px-2  ${Styles.liTablet} mt-3`}>
            <Link
              href={"/"}
              passHref
              className="text-decoration-none text-capitalize"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              about us
            </Link>
          </li>
          <li className={` px-2  ${Styles.liTablet} mt-3`}>
            <Link
              href={"/"}
              passHref
              className="text-decoration-none text-capitalize"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

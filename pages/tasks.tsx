import React from "react";
import Head from "next/head";
import { Tooltip, Switch } from "@mui/material";
import Link from "next/link";

function tasks() {
  // handleShowDescription
  const handleShowDescription = (e: React.MouseEvent<HTMLSpanElement>) => {
    // all arrow up add display none and all arrow down add display inline
    let getArroeUps = document.querySelectorAll(".bi-caret-up-fill");
    Array.from(getArroeUps).map((arrow) => {
      arrow.parentElement?.classList.add("d-none");
      arrow.parentElement?.previousElementSibling?.classList.remove("d-none");
    });
    // get descriptions and add height=0px
    let getDescriptions = document.querySelectorAll(".description");
    Array.from(getDescriptions).map((desc) => {
      desc.setAttribute(
        "style",
        "max-height:0px;overflow:hidden;transition:all 1s"
      );
    });

    let getDarkMode = document.querySelectorAll(".alert");
    Array.from(getDarkMode).map((dark) => {
      dark.classList.remove("bg-warning");
      dark.classList.remove("alert-warning");
      dark.classList.add("bg-dark");
      dark.classList.add("alert-dark");
    });
    (
      e.target as HTMLSpanElement
    ).parentElement?.parentElement?.parentElement?.parentElement?.classList.remove(
      "bg-dark"
    );
    (
      e.target as HTMLSpanElement
    ).parentElement?.parentElement?.parentElement?.parentElement?.classList.remove(
      "alert-dark"
    );
    (
      e.target as HTMLSpanElement
    ).parentElement?.parentElement?.parentElement?.parentElement?.classList.add(
      "bg-warning"
    );
    (
      e.target as HTMLSpanElement
    ).parentElement?.parentElement?.parentElement?.parentElement?.classList.add(
      "alert-warning"
    );

    // show arrow up
    (
      e.target as HTMLSpanElement
    ).parentElement?.nextElementSibling?.classList.remove("d-none");
    // own description height
    let owndescriptionHeight =
      (e.target as HTMLSpanElement).parentElement?.parentElement?.parentElement
        ?.parentElement?.nextElementSibling?.scrollHeight + "px";
    // set own description height
    (
      e.target as HTMLSpanElement
    ).parentElement?.parentElement?.parentElement?.parentElement?.nextElementSibling?.setAttribute(
      "style",
      `max-height:${owndescriptionHeight};transition:all 1s`
    );
    // add display none to own arrow up
    (e.target as HTMLSpanElement).parentElement?.classList.add("d-none");
  };
  // handleHideDescription
  const handleHideDescription = (e: React.MouseEvent<HTMLSpanElement>) => {
    (
      e.target as HTMLSpanElement
    ).parentElement?.parentElement?.parentElement?.parentElement?.classList.remove(
      "bg-warning"
    );
    (
      e.target as HTMLSpanElement
    ).parentElement?.parentElement?.parentElement?.parentElement?.classList.remove(
      "alert-warning"
    );
    (
      e.target as HTMLSpanElement
    ).parentElement?.parentElement?.parentElement?.parentElement?.classList.add(
      "bg-dark"
    );
    (
      e.target as HTMLSpanElement
    ).parentElement?.parentElement?.parentElement?.parentElement?.classList.add(
      "alert-dark"
    );
    // add display none to own arrow down
    (e.target as HTMLSpanElement).parentElement?.classList.add("d-none");
    // add display inline to own arrow up
    (
      e.target as HTMLSpanElement
    ).parentElement?.previousElementSibling?.classList.remove("d-none");

    (
      e.target as HTMLSpanElement
    ).parentElement?.parentElement?.parentElement?.parentElement?.nextElementSibling?.setAttribute(
      "style",
      `max-height:0px;overflow:hidden;transition:all 1s`
    );
  };
  return (
    <>
      <Head>
        <title>کانون فرهنگی آموزش | قلم چی</title>
        <meta
          name="description"
          content="سایت کانون فرهنگی آموزش قلم چی kanoon.ir Kanoon Farhangi Amoozesh.  آزمون های برنامه ای ، کنکور ، تیزهوشان ، تخمین رتبه ، دریافت کارنامه آزمون"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 clearfix mb-5">
            <div className="float-start fs-5">
              <Link
                href={"/"}
                className="text-decoration-none text-muted text-capitalize"
              >
                home
              </Link>
              <span className="text-muted mx-1">/</span>
              <span className="me-2 text-muted">tasks</span>
            </div>
            <div className="float-end fs-4">
              <span>
                <Tooltip title="add new task" placement="left" arrow>
                  <i className="bi bi-plus-circle-fill text-danger"></i>
                </Tooltip>
              </span>
            </div>
          </div>
          {/* start first title */}
          <div className="row ">
            <div className="col-12 col-sm-10 col-md-8 col-xl-6 mx-auto">
              <div className="row">
                {/* title and icon section */}
                <div className="col-12 bg-dark alert alert-dark mb-0 rounded-bottom-0">
                  <div className="row  text-white">
                    {/* title */}
                    <div className="col-8" style={{ fontSize: "14px" }}>
                      title
                    </div>
                    {/* icons */}
                    <div
                      className="col-4 text-end"
                      style={{ fontSize: "14px" }}
                    >
                      <span className="" onClick={handleShowDescription}>
                        <i className="bi bi-caret-down-fill"></i>
                      </span>
                      <span className="d-none" onClick={handleHideDescription}>
                        <i className="bi bi-caret-up-fill"></i>
                      </span>
                      <span className="">
                        <i className="bi bi-trash3-fill"></i>
                      </span>
                      <span className="">
                        <i className="bi bi-pen-fill"></i>
                      </span>
                      <span className="">
                        <Switch size="small" />
                      </span>
                    </div>
                  </div>
                </div>
                {/* description */}

                <div
                  className="col-12 description"
                  style={{ maxHeight: "0px", overflow: "hidden" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  corrupti molestiae odit accusamus temporibus debitis quidem
                  nihil amet libero sed, laborum adipisci hic architecto
                  alias!!!!
                </div>
              </div>
            </div>
          </div>
          {/* end first Title */}
        </div>
      </div>
    </>
  );
}

export default tasks;
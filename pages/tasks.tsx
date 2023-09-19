import React, { useState } from "react";
import Cookies from 'js-cookie'
import Head from "next/head";
import { Tooltip, Switch, TextField, Button } from "@mui/material";
import Link from "next/link";
import Styles from "../styles/Tasks.module.scss";
import { GetServerSideProps } from "next"; 
type taskType = {
  id: number;
  title: string;
  description: string;
  status: boolean;
};
type tasksTypeFromSSR = {
  tasks: taskType[];
};
function Tasks({tasks}:tasksTypeFromSSR) {

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
  //   handleShowForm
  const handleShowForm = () => {
    let getForm = document.querySelector(".formSection") as HTMLFormElement;
    getForm.classList.remove("invisible");
    getForm.classList.add(Styles.showForm);
    getForm.classList.remove(Styles.hideForm);
    let wrapper = document.querySelector(".wrapper") as HTMLDivElement;
    wrapper.style.visibility = "visible";
    wrapper.style.zIndex = "999";
  };
  //   handleHideForm
  const handleHideForm = (e: React.MouseEvent) => {
    let getForm = document.querySelector(".formSection") as HTMLFormElement;
    getForm.classList.add("invisible");
    getForm.classList.remove(Styles.showForm);
    getForm.classList.add(Styles.hideForm);
    getForm.style.transition = "all 1s";
    let wrapper = document.querySelector(".wrapper") as HTMLDivElement;
    wrapper.style.visibility = "hidden";
    wrapper.style.zIndex = "-1";
    wrapper.style.transition = "all 0.5s";
  };
  const [allTasks, setTasks] = useState<taskType[]>(tasks);
  const [titleError, setTitleError] = useState(true);
  const [descriptionError, setDescriptionError] = useState(true);
  let titleRegex = /^[a-z\d\s]{3,20}$/i;
  let descriptionRegex = /^[a-z\d\W]{3,}$/i;
// handleShowTasks
const handleShowTasks=async()=>{
    const response=await fetch(`http://localhost:3000/api/tasks`);
    const data=await response.json();
    setTasks(data);
}
  //   handleAddingTask
  const handleAddingTask = async (e:React.MouseEvent<HTMLButtonElement>) => {
    
    let title=document.querySelector('#title') as HTMLInputElement;
    let desc=document.querySelector('#description') as HTMLInputElement;
    let newTask={
        title:title.value,
        description:desc.value,
    }
   
if(!titleError && !descriptionError){
    const response=await fetch(`http://localhost:3000/api/tasks`,{
        method:"POST",
        body:JSON.stringify(newTask),
        headers:{
            "Content-Type":"application/json"
        }
    });
    const data=await response.json();
    
    handleShowTasks();
}else{
    alert('esht')
}
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
        <div
          className="wrapper"
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: -1,
            backgroundColor: "rgba(0,0,0,0.6)",
            visibility: "hidden",
          }}
          onClick={handleHideForm}
        >
          {" "}
        </div>
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
                  <i
                    className="bi bi-plus-circle-fill text-danger"
                    onClick={handleShowForm}
                  ></i>
                </Tooltip>
              </span>
              
            </div>
          </div>
        </div>
        {/* titles */}
        {allTasks.length>0 ? (
          allTasks.map((task) => {
            return (
              <div className="row" key={task.id}>
                <div className="col-12 col-sm-10 col-md-8 col-xl-6 mx-auto">
                  <div className="row">
                    {/* title and icon section */}
                    <div className="col-12 bg-dark alert alert-dark mb-0 rounded-bottom-0">
                      <div className="row  text-white">
                        {/* title */}
                        <div className="col-8" style={{ fontSize: "14px" }}>
                          {task.title}
                        </div>
                        {/* icons */}
                        <div
                          className="col-4 text-end"
                          style={{ fontSize: "14px" }}
                        >
                          <span className="" onClick={handleShowDescription}>
                            <i className="bi bi-caret-down-fill"></i>
                          </span>
                          <span
                            className="d-none"
                            onClick={handleHideDescription}
                          >
                            <i className="bi bi-caret-up-fill"></i>
                          </span>
                          <span className="">
                            <i className="bi bi-trash3-fill"></i>
                          </span>
                          <span className="">
                            <i className="bi bi-pen-fill"></i>
                          </span>
                          <span className="">
                            <Switch size="small" checked={task.status} />
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* description */}

                    <div
                      className="col-12 description"
                      style={{ maxHeight: "0px", overflow: "hidden" }}
                    >
                      {task.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="row">
            <div className="col-12 alert alert-danger text-center">
              you have not any tasks
            </div>
          </div>
        )}

        {/* end Titles */}
        {/* form for adding new tasks*/}
        <div className="row  ">
          <div
            className="col-12 col-sm-10 col-md-8 col-xl-6 mx-auto invisible border rounded-3 p-3  formSection bg-white"
            style={{
              position: "fixed",
              top: "150px",
              left: "50%",
              zIndex: 9999,
              transform: "translate(-50%)",
            }}
          >
           
              <TextField
                label="title"
                className="w-100"
                name="title"
                id="title"
                onChange={(e)=>{
                    titleRegex.test(e.target.value)?setTitleError(false):setTitleError(true)
                }}
              />
              <TextField
                label="description"
                className="w-100 mt-2"
                name="description"
                id="description"
                onChange={(e)=>{
                    descriptionRegex.test(e.target.value)?setDescriptionError(false):setDescriptionError(true)
                }}
              />
              <div className="clearfix mt-4">
                <div className="float-start">
                  <Button
                    color="info"
                    className="border border-info"
                    onClick={handleAddingTask}
                  >
                    add new task
                  </Button>
                </div>
                <div className="float-end">
                  <Button
                    color="warning"
                    className="border border-warning"
                    onClick={handleHideForm}
                  >
                    cancel
                  </Button>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Tasks;

export const getServerSideProps:GetServerSideProps=async(context)=>{
  const response = await fetch(`http://localhost:3000/api/tasks`);
  const data = await response.json();
  return {
    props: {
      tasks: data,
    },
  };
}


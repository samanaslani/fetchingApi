import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Tooltip,
  Switch,
  TextField,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
} from "@mui/material";
import Link from "next/link";
import Styles from "../../styles/Tasks.module.scss";
import { useRouter } from "next/router";
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
function Tasks({ tasks }: tasksTypeFromSSR) {
  const router = useRouter();
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
  //   handleShowFormAddingTask
  const handleShowFormAddingTask = () => {
    let getForm = document.querySelector(".formSection") as HTMLFormElement;
    getForm.classList.remove("invisible");
    getForm.classList.add(Styles.showForm);
    getForm.classList.remove(Styles.hideForm);
    let wrapper = document.querySelector(".wrapper") as HTMLDivElement;
    wrapper.style.visibility = "visible";
    wrapper.style.zIndex = "999";
  };

  //   handleHideForm
  const handleHideForm = () => {
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
  const [statusError, setStatusError] = useState(true);
  const [status, setStatus] = useState<boolean | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [taskId, setTaskId] = useState<number | null>(null);
  const [errors, setErrors] = useState<string>("");
  let titleRegex = /^[a-z\d\s]{3,20}$/i;
  let descriptionRegex = /^[a-z\d\W]{3,}$/i;
  // handleSearchProduct

  // handleUpdatingTaskByIcon
  const handleUpdatingTaskByIcon = (id: number) => {
    setTaskId(id);
    handleShowFormAddingTask();
  };

  // handleShowTasks
  const handleShowTasks = async () => {
    const response = await fetch(`http://localhost:3000/api/tasks`);
    const data = await response.json();
    setTasks(data);
  };

  //   handleAddingTask
  const handleAddingTask = async () => {
    let newTask = {
      title: title,
      description: description,
      status: status,
    };

    if (
      !titleError &&
      !descriptionError &&
      !statusError &&
      !allTasks.find((item) => item.id === 1)
    ) {
      const response = await fetch(`http://localhost:3000/api/tasks`, {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      handleHideForm();
      handleShowTasks();
      setErrors("");
    } else {
      setErrors("Oopts,something wents wrong");
    }
  };
  // handleDeleteTask
  const handleDeleteTask = async (id: number) => {
    const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    handleShowTasks();
  };
  // handleEditTask()
  const handleEditTask = async (id: number) => {
    if (
      !titleError &&
      !descriptionError &&
      !statusError &&
      !allTasks.find((item) => item.id === 1)
    ) {
      setErrors("");
      const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: `${title}`,
          description: `${description}`,
          status: status,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      handleHideForm();
      handleShowTasks();
      setErrors("");
    } else {
      setErrors("Oopts,something wents wrong");
    }
  };
  const handleSearchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    let filterProductsBySearching = allTasks.filter((item: taskType) =>
      item.title.toLocaleLowerCase().includes(e.target.value)
    );
    if (filterProductsBySearching.length > 0 && e.target.value) {
      setTasks(filterProductsBySearching);
    }else if(!e.target.value){
      handleShowTasks();
      setTasks(tasks);
    }
     else {
     
      setTasks([]);
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
        {/* wrapper section */}
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
          <div className="col-12 clearfix mb-3">
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
                    onClick={() => {
                      setTaskId(null);
                      handleShowFormAddingTask();
                    }}
                  ></i>
                </Tooltip>
              </span>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          {/* search */}
          <div className="col-12 col-md-9 mx-auto" style={{ height: "30px" }}>
            <div className="row h-100 d-flex justify-content-center">
              <div className="col-6 h-100" style={{ position: "relative" }}>
                <input
                  type="text"
                  id="searchProduct"
                  name="searchProduct"
                  className={`w-100 h-100  ${Styles.search}`}
                  style={{ position: "absolute", left: 0 }}
                  onChange={(e) => handleSearchProduct(e)}
                />
              </div>

              <div
                className="col-1 h-100  d-flex flex-row justify-content-center"
                style={{
                  backgroundColor: "tomato",
                  border: "1px  solid tomato",
                  borderLeft: "0",
                }}
              >
                <i
                  className="bi bi-search text-white "
                  style={{ lineHeight: "30px" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
        {/* titles */}
        {allTasks.length > 0 ? (
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
                          <span
                            className=""
                            onClick={() => handleDeleteTask(task.id)}
                          >
                            <i className="bi bi-trash3-fill"></i>
                          </span>
                          <span
                            className=""
                            onClick={() => handleUpdatingTaskByIcon(task.id)}
                          >
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
            <div className="text-danger mb-4">{errors}</div>
            <TextField
              label="title"
              className="w-100"
              name="title"
              id="title"
              onChange={(e) => {
                titleRegex.test(e.target.value)
                  ? setTitleError(false)
                  : setTitleError(true);
                setTitle(e.target.value);
              }}
            />
            <TextField
              label="description"
              className="w-100 mt-2"
              name="description"
              id="description"
              onChange={(e) => {
                descriptionRegex.test(e.target.value)
                  ? setDescriptionError(false)
                  : setDescriptionError(true);
                setDescription(e.target.value);
              }}
            />
            <FormControl className="mt-2">
              <FormLabel>status</FormLabel>
              <RadioGroup row>
                <FormControlLabel
                  label="complete"
                  control={
                    <Radio
                      name="complete"
                      value={true}
                      onChange={() => {
                        setStatus(true);
                        setStatusError(false);
                      }}
                    />
                  }
                />
                <FormControlLabel
                  label="unComplete"
                  control={
                    <Radio
                      name="complete"
                      value={false}
                      onChange={() => {
                        setStatus(false);
                        setStatusError(false);
                      }}
                    />
                  }
                />
              </RadioGroup>
            </FormControl>
            <div className="mt-4">
              <div className="">
                <Button
                  color="info"
                  className="border border-info"
                  onClick={() => {
                    taskId ? handleEditTask(taskId) : handleAddingTask();
                  }}
                >
                  {taskId ? "update task" : "add task"}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`http://localhost:3000/api/tasks`);
  const data = await response.json();
  return {
    props: {
      tasks: data,
    },
  };
};

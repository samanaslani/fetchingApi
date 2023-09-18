import React from "react";
import Head from "next/head";
function PageNotFound() {
  return (
    <>
      <Head>
        <title>page not found</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
        />
      </Head>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center alert alert-danger">
            Oops, page not found
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;

import { TextField, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
function Footer() {
  return (
    <div className="mt-5">
      {/* icons */}
      <div>
        <div
          className="bg-danger text-white py-3"
        >
          <div className="container">
            <div className="row" style={{fontFamily:'Roboto'}}>
              <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
                <div>
                  <i className="bi bi-truck fs-1"></i>
                </div>
                <div className="d-flex flex-column align-self-center ms-2">
                  <div style={{ fontSize: "12px" }}>free shipping</div>
                  <div style={{ fontSize: "12px" }}>free on oder over $99</div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center mt-3 mt-sm-0">
                <div>
                  <i className="bi bi-award fs-1"></i>
                </div>
                <div className="d-flex flex-column align-self-center ms-2">
                  <div style={{ fontSize: "12px" }}>warranty</div>
                  <div style={{ fontSize: "12px" }}>30 days money back</div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center mt-3 mt-md-0">
                <div className="ms-3 ms-md-0">
                  <i className="bi bi-credit-card fs-1"></i>
                </div>
                <div className="d-flex flex-column align-self-center ms-2">
                  <div style={{ fontSize: "12px" }}>safe payment</div>
                  <div style={{ fontSize: "12px" }}>
                    safe your online payment
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center mt-3 mt-md-0">
                <div>
                  <i className="bi bi-headset fs-1"></i>
                </div>
                <div className="d-flex flex-column align-self-center ms-2">
                  <div style={{ fontSize: "12px" }}>online support</div>
                  <div style={{ fontSize: "12px" }}>we have support 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details */}
      <div
        className="py-4"
        style={{
          backgroundColor: "rgba(240,240,240,1)",
          fontFamily: "Roboto Condensed",
        }}
      >
        <div className="container">
          <div className="row" style={{fontFamily:'Roboto'}}>
            <div className="col-12 col-sm-6 col-lg-3 text-center text-lg-start ">
              <div
                className="text-uppercase fw-bold "
                style={{ fontSize: "16px" }}
              >
                contact details
              </div>
              <div className="mt-3 text-muted  " style={{ fontSize: "14px" }}>
                <i className="bi bi-telephone fs-5"></i>
                <span className="ms-3">(+98)9187734420</span>
              </div>
              <div className="mt-2 text-muted " style={{ fontSize: "14px" }}>
                <i className="bi bi-geo-alt fs-5 ms-4 ms-lg-0 "></i>
                <span className="ms-3">iran,kurdistan,sanandaj</span>
              </div>
              <div className="mt-2 text-muted " style={{ fontSize: "14px" }}>
                <i className="bi bi-envelope fs-5 ms-5 ms-lg-0"></i>
                <span className="ms-3">aslanisaman1@gmail.com</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mt-3 mt-sm-0 text-center text-lg-start">
              <div
                className="text-uppercase fw-bold "
                style={{ fontSize: "16px" }}
              >
                hot line
              </div>
              <div className="mt-3 text-muted" style={{ fontSize: "14px" }}>
                <span className="">call us toll free</span>
              </div>
              <div className="mt-2 " style={{ fontSize: "30px" }}>
                <span className="text-danger">(+98)9187734420</span>
              </div>
              <div className="mt-2 d-flex justify-content-center justify-content-lg-start">
                <TextField
                  label="sign in newspaper"
                  className=""
                  size="small"
                  style={{}}
                />
                <Button className="border border-secondary ms-2" size="small">
                  submit
                </Button>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mt-3 mt-lg-0 text-center ">
              <div
                className="text-uppercase fw-bold"
                style={{ fontSize: "16px" }}
              >
                my account
              </div>
              <ul className="list-unstyled mt-3" style={{ fontSize: "13px" }}>
                <li>
                  <Link
                    href="/"
                    className="text-capitalize text-muted text-decoration-none"
                  >
                    brands
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    href="/"
                    className="text-capitalize text-muted text-decoration-none"
                  >
                    gift certification
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    href="/"
                    className="text-capitalize text-muted text-decoration-none"
                  >
                    affiliates
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    href="/"
                    className="text-capitalize text-muted text-decoration-none"
                  >
                    wishlist
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mt-3 mt-lg-0 text-center ">
              <div
                className="text-uppercase fw-bold"
                style={{ fontSize: "16px" }}
              >
                information
              </div>
              <ul className="list-unstyled mt-3" style={{ fontSize: "13px" }}>
                <li>
                  <Link
                    href="/"
                    className="text-capitalize text-muted text-decoration-none"
                  >
                    contact us
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    href="/"
                    className="text-capitalize text-muted text-decoration-none"
                  >
                    returns
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    href="/"
                    className="text-capitalize text-muted text-decoration-none"
                  >
                    site map
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    href="/"
                    className="text-capitalize text-muted text-decoration-none"
                  >
                    specials
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="mt-5 text-muted" />
          <div className="row">
            <div className="col-12 col-md-4 text-center text-md-start">
              <div className="fw-bold" style={{ fontSize: "15px" }}>
                we are using safe payment
              </div>
              <div className="mt-2 w-100" style={{ height: "25px" }}>
                <Image
                width={150}
                height={100}
                  src="/images/payment.png"
                  className="img-fluid w-100 h-100   "
                  alt="payment"
                />
              </div>
            </div>
            <div className="col-12 col-md-4 text-center  mt-3 mt-md-0">
              <div className="fw-bold" style={{ fontSize: "15px" }}>
                our social network
              </div>
              <div className="mt-2 text-muted">
                <i className="bi bi-twitter"></i>
                <i className="bi bi-whatsapp ms-2"></i>
                <i className="bi bi-telegram ms-2"></i>
                <i className="bi bi-instagram ms-2"></i>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center text-md-start">
              <div className="fw-bold" style={{ fontSize: "15px" }}>
                we are using safe payment
              </div>
              <div className="row mt-2" style={{ height: "25px" }}>
                <div className="col-6" style={{ height: "100%" }}>
                  <Image
                    width={100}
                    height={100}
                    src="/images/playStore.png"
                    className="img-fluid h-100 w-100"
                    alt="playstore"
                  />
                </div>
                <div className="col-6" style={{ height: "100%" }}>
                  <Image
                    width={100}
                    height={100}
                    src="/images/appleStore.png "
                    className="img-fluid h-100 w-100"
                    alt="appleStore"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-dark text-white text-opacity-75 pt-3 pb-1"
        style={{ fontSize: "12px", fontFamily: "Roboto Condensed" }}
      >
        <div className="container">
          <div className="row" style={{fontFamily:'Roboto'}}>
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <span>
                copy right <i className="bi bi-c-circle "></i> april 2023
                <span className="text-warning mx-1">saman aslani</span>all right
                reserved
              </span>
            </div>
            <div className="col-12 col-lg-6 mt-3 mt-lg-0">
              <nav>
                <ul className="list-unstyled d-flex justify-content-center">
                  <li className="border-end border-secondary pe-2">
                    <Link
                      href={"/"}
                      className=" text-white text-opacity-75 text-decoration-none"
                    >
                      about us
                    </Link>
                  </li>
                  <li className="border-end border-secondary px-2">
                    <Link
                      href={"/"}
                      className=" text-white text-opacity-75 text-decoration-none"
                    >
                      privacy and policy
                    </Link>
                  </li>
                  <li className="border-end border-secondary px-2">
                    <Link
                      href={"/"}
                      className=" text-white text-opacity-75 text-decoration-none"
                    >
                      returns and conditions
                    </Link>
                  </li>
                  <li className="ps-2">
                    <Link
                      href={"/"}
                      className=" text-white text-opacity-75 text-decoration-none"
                    >
                      return policy
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

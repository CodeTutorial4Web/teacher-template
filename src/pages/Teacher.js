import UserAvatar from "../compnents/general/UserAvtar";

import ".././assets/teacher.css";
import { NavLink, Outlet } from "react-router-dom";
import Btn from "../compnents/general/Btn";
import  {ShareSocial}  from "react-share-social";
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, MailruIcon, MailruShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import Swal from 'sweetalert2';
import { useState } from 'react';
import SimpleBar from "simplebar-react";
import { motion } from 'framer-motion';

  function Teacher() {



    const [showDropDown, setShowDropDown] = useState(false)

  return (
    <main className="teacherPage section">
      <div className="userData">
        <div className="images">
          <div
            className="banner"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage:
                "url(https://img.freepik.com/premium-vector/science-vector-banner_36298-510.jpg)",
            }}
          ></div>

          <UserAvatar
            width={200}
            height={200}
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s"
          />
        </div>

        <div className="user">
          <div>
            <h1> Wiliams Adamas <i className="fas fa-check-circle"></i></h1>
            <h2> Science teacher</h2>
            <p> The Best Teacher In The World </p>
            <p className="coursesCount">11 Courses | 12 Students</p>
          </div>

          <div >
            <Btn text="Interested" />



              <i onClick={async() => {
                console.log(document.baseURI);
                setShowDropDown(!showDropDown)
             
                document.querySelector(".simplebar-track.simplebar-vertical").classList.toggle("overflow-hidden")

              }} class="fas fa-share"></i>

              
              <motion.div className={showDropDown ? "dropDown show" : "dropDown"}>

                <i onClick={() => {
                  setShowDropDown(!showDropDown)
                  document.querySelector(".simplebar-track.simplebar-vertical").classList.remove("overflow-hidden")
                }} className="fas fa-multiply"></i>

                <h3>Share</h3>

                <div>
                <WhatsappShareButton url={document.baseURI}>
                    <WhatsappIcon />
                  </WhatsappShareButton>
                  <FacebookShareButton url={document.baseURI}>
                    <FacebookIcon />
                  </FacebookShareButton>
                  
                  <TwitterShareButton url={document.baseURI}>
                    <TwitterIcon />
                  </TwitterShareButton>

                  <MailruShareButton url={document.baseURI}>
                    <MailruIcon />
                  </MailruShareButton>
                  <TelegramShareButton url={document.baseURI}>
                    <TelegramIcon />
                  </TelegramShareButton>
                  <EmailShareButton url={document.baseURI}>
                    <EmailIcon />
                  </EmailShareButton>
                </div>

                <div className="copy">

                <p >
                  {document.baseURI}
                  
                </p>
                <button className="btn" onClick={async() => {
                  await navigator.clipboard.writeText(document.baseURI)
                }}> Copy </button>
                </div>



              </motion.div>

             


          </div>


        </div>
      </div>

      <div className="pages">
        <div className="nav">
          <NavLink
            to="/teacher/12"
            style={({ isActive }) => ({
              color: isActive ? "var(--main-color)" : "",
              borderColor: isActive ? "var(--main-color)" : "",
            })}
          >
            Courses
          </NavLink>
          <NavLink
            to="/teacher/12/about"
            style={({ isActive }) => ({
              color: isActive ? "var(--main-color)" : "",
              borderColor: isActive ? "var(--main-color)" : "",
            })}
          >
            About
          </NavLink>
        </div>

        <Outlet />
      </div>
    </main>
  );
}

export default Teacher;
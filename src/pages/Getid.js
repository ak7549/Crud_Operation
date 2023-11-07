import React, { useEffect, useState } from "react";
import "../style/Getid.css";
import { Avatar } from "@mui/material";
import img from "../images/profile.png"

const Getid = () => {
  const [id, setId] = useState();
  // console.log(id)
  const [name, setName] = useState();

  const [dob, setDob] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();

  const getData = () => {
    // const regisData = useNavigate();

    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setDob(localStorage.getItem("dob"));
    setEmail(localStorage.getItem("email"));
    setPhone(localStorage.getItem("phone"));
    setAddress(localStorage.getItem("address"));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="card container mt-2"
      style={{ width: "18rem", height: "28rem" }}
    >
      <div className="card-body">
      <div className="profile">
        <img src={img} alt="" />
      </div>
      
        <h2 className="card-title">{name}</h2>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Student Id: #TCS{id}#$ <br />
          Dob : {dob} <br />
          Email: {email} <br />
          Phone: {phone} <br />
          Address: {address} <br />
        </h6>

        <p className="card-text"></p>
      </div>
      <div className="last">
        <p>	&copy;TechingCenter || 2023</p>
      </div>
    </div>
  );
};

export default Getid;

import React, { useEffect, useState } from "react";
import "../style/Getid.css";

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
      style={{ width: "18rem", height: "30rem" }}
    >
      <div className="card-body">
        <h1 className="card-title">{name}</h1>
        <h6 className="card-subtitle mb-2 text-body-secondary">
            Student Id: #An{id}#$ <br />
            Dob : {dob} <br />
          Email: {email} <br />
          Phone: {phone} <br />
          Address: {address} <br />

        </h6>
        <p className="card-text">
          
        </p>
        
        
      </div>
    </div>
  );
};

export default Getid;

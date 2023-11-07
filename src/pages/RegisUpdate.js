import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const RegisUpdate = () => {
  const regisData = useNavigate();
  const [id, setId] = useState();
  // console.log(id)
  const [name, setName] = useState();
  const [dob, setDob] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();

  const getData = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4500/students/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        dob: dob,
        email: email,
        phone: phone,
        address: address,
      }),
    }).then(() => {
      swal({
        icon: "success",
        text: "Form submitted successfully",
      });
      regisData("/regisData");
    });
  };

  return (
    <div className="container mt-2">
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Full Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            // name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            DOB
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={dob}
            // name="dob"
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            // name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Phone
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={phone}
            // name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={address}
            name="address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default RegisUpdate;

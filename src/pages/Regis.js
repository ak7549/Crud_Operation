import React, { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Regis = () => {
  const regisData = useNavigate();
  const [input, setInput] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let url = fetch(` http://localhost:4500/students`, {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: input.name,
        dob: input.dob,
        email: input.email,
        phone: input.phone,
        address: input.address,
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
            name="name"
            onChange={handleInput}
            required
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
            name="dob"
            onChange={handleInput}
            required
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
            name="email"
            onChange={handleInput}
            required
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
            name="phone"
            onChange={handleInput}
            required
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
            name="address"
            onChange={handleInput}
            required
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Regis;

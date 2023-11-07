import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const RegisData = () => {
  const getId = useNavigate();
  const update = useNavigate();
  const [fetchData, setFetchData] = useState([]);
  // console.log(fetchData)

  const data = async () => {
    let url = await fetch(`http://localhost:4500/students`);
    let result = await url.json();
    setFetchData(result);

    // console.log(result)
  };

  useEffect(() => {
    data();
  }, []);

  const handleDelete = (id) => {
    // console.log("clicked");
    fetch(`http://localhost:4500/students/${id}`, {
      method: "delete",
    }).then(() => {
      swal({
        icon: "success",
        text: "Form Deleted successfully",
      });

      data();
    });
  };

  const handleUpdate = async (id, name, dob, email, phone, address) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("dob", dob);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("address", address);
    update("/regisUpdate");
  };

  const handleGetId = (id, name, dob, email, phone, address) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("dob", dob);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("address", address);
    getId("/getId");
  };
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Student Id</th>
            <th scope="col">Full Name</th>
            <th scope="col">DOB</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {fetchData.map((elem, i) => {
            const { id, name, dob, email, phone, address } = elem;
            return (
              <tr>
                <th scope="row" id="sonu">
                  {i + 1}
                </th>
                <td>{name}</td>
                <td>{dob}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{address}</td>
                <td>
                  <button
                    onClick={() => {
                      handleUpdate(id, name, dob, email, phone, address);
                    }}
                    className="mx-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() =>
                      swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this data!",

                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      }).then((willDelete) => {
                        if (willDelete) {
                          handleDelete(id);
                          swal(" Your data has been deleted!", {
                            icon: "success",
                          });
                        } else {
                          swal("Your data is safe!");
                        }
                      })
                    }
                    className="mx-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      handleGetId(id, name, dob, email, phone, address);
                    }}
                    className="mx-2"
                  >
                    Id Card
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RegisData;

import React, { useState } from "react";
import { UseData } from "../contexts/Data";
import { useNavigate, useParams } from "react-router-dom";

function Form() {
  const {
    isEdit,
    setIsEdit,
    formData,
    setFormData,
    handlePost,
    defaultValue,
    users,
    setUsers,
    handleUpdate,
  } = UseData();

  const { id } = useParams();

  return (
    <div className="container-xl px-4 mt-4">
      <div className="row justify-content-center">
        <div className="col-xl-9">
          <div className="card mb-4">
            <div className="card-header">Create Account Details</div>
            <div className="card-body">
              <form
                onSubmit={(e) => {
                  console.log(isEdit);
                  isEdit
                    ? handleUpdate(e, id, formData)
                    : handlePost(e, formData);
                }}
              >
                <div className="row gx-3 mb-3">
                  {" "}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputUsername">
                      Username (how your name will appear to other formData on
                      the site)
                    </label>
                    <input
                      className="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your username"
                      name="username"
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputFullName">
                      Full Name
                    </label>
                    <input
                      className="form-control"
                      id="inputFullName"
                      type="text"
                      placeholder="Enter your full name"
                      name="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputEmail">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      id="inputEmail"
                      type="email"
                      placeholder="name@example.com"
                      name="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputWebsite">
                      Website
                    </label>
                    <input
                      className="form-control"
                      id="inputWebsite"
                      type="text"
                      placeholder="Enter your website"
                      name="website"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputPhone">
                      Phone number
                    </label>
                    <input
                      className="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      name="phoneNumber"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-4">
                    <label className="small mb-1" htmlFor="inputStreet">
                      Street
                    </label>
                    <input
                      className="form-control"
                      id="inputStreet"
                      type="text"
                      placeholder="Enter your street"
                      name="address.street"
                      value={formData.address.street}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          address: {
                            ...formData.address,
                            street: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="small mb-1" htmlFor="inputCity">
                      City
                    </label>
                    <input
                      className="form-control"
                      id="inputCity"
                      type="text"
                      placeholder="Enter your city"
                      name="address.city"
                      value={formData.address.city}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          address: {
                            ...formData.address,
                            city: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="small mb-1" htmlFor="inputSuite">
                      Suite
                    </label>
                    <input
                      className="form-control"
                      id="inputSuite"
                      type="text"
                      placeholder="Enter your Suite"
                      name="address.zipcode"
                      value={formData.address.suite}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          address: {
                            ...formData.address,
                            suite: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                </div>{" "}
                <div className="row gx-3 mb-3">
                  <div className="col-md-8">
                    <label className="small mb-1" htmlFor="inputStreet">
                      Geo Location
                    </label>{" "}
                  </div>
                  <div className="col-md-6 ">
                    <input
                      className="form-control"
                      id="inputStreet"
                      type="text"
                      placeholder="latitude"
                      name="latitude"
                      value={formData.address.geo.lat}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          address: {
                            geo: {
                              ...formData.address.geo,
                              lat: e.target.value,
                            },
                          },
                        })
                      }
                    />{" "}
                  </div>{" "}
                  <div className="col-md-6 ">
                    <input
                      className="form-control"
                      id="inputStreet"
                      type="text"
                      placeholder="longitude"
                      name="longitude"
                      value={formData.address.geo.lng}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          address: {
                            geo: {
                              ...formData.address.geo,
                              lng: e.target.value,
                            },
                          },
                        })
                      }
                    />{" "}
                  </div>
                  <div className="col-md-4">
                    <label className="small mb-1" htmlFor="inputZip">
                      Zip-code
                    </label>
                    <input
                      className="form-control"
                      id="inputZip"
                      type="text"
                      placeholder="Enter your zipcode"
                      name="address.zipcode"
                      value={formData.address.zipcode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          address: {
                            ...formData.address,
                            zipcode: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                </div>
                {/* company details */}
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputOrgName">
                      Company Name
                    </label>
                    <input
                      className="form-control"
                      id="inputOrgName"
                      type="text"
                      placeholder="Enter your organization name"
                      name="company.name"
                      value={formData.company.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          company: {
                            ...formData.company,
                            name: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6 ">
                    {" "}
                    <label className="small mb-1" htmlFor="inputAbout">
                      Phrase
                    </label>
                    <textarea
                      className="form-control"
                      id="inputAbout"
                      placeholder="Enter Phrase"
                      value={formData.company.catchPhrase}
                      style={{
                        height: "50px",
                        width: "100%",
                      }} // Set the width here
                      name="company.about"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          company: {
                            ...formData.company,
                            catchPhrase: e.target.value,
                          },
                        })
                      }
                    ></textarea>
                  </div>{" "}
                  <div className="col-md-6 ">
                    {" "}
                    <label className="small mb-1" htmlFor="inputAbout">
                      Business Statement
                    </label>
                    <textarea
                      className="form-control"
                      id="inputAbout"
                      placeholder="Enter Business Statement"
                      value={formData.company.bs}
                      style={{
                        height: "50px",
                        width: "100%",
                      }}
                      name="company.about"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          company: {
                            ...formData.company,
                            bs: e.target.value,
                          },
                        })
                      }
                    ></textarea>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-3">
                    {isEdit ? (
                      <button className="btn btn-primary" type="submit">
                        Update
                      </button>
                    ) : (
                      <button className="btn btn-primary" type="submit">
                        Submit
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;

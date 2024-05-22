/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { UseData } from "../contexts/Data";
import { useParams } from "react-router-dom";

function Card() {
  const { viewData } = UseData();

  const { id } = useParams();
  console.log(id);

  const user = viewData;
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="card col-sm-6 m-2">
          <h2 className="card-header text-center  h-25 ">{user.name}</h2>
          <div className="card-body">
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <img
              src={user.avatar}
              className="rounded rounded-5 float-end"
              alt="..."
            />
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href={user.website}> {user.website}</a>{" "}
            </p>
            <div>
              <h3>Address:</h3>
              <p>
                {user.address.street}, {user.address.suite}
              </p>
              <p>
                {user.address.city}, {user.address.zipcode}
              </p>
              <p>
                <strong>Geo-Location: </strong>
                {user.address.geo.lat}, {user.address.geo.lng}
              </p>
            </div>
            <div>
              <h3>Company:</h3>
              <p>
                <strong>Name:</strong> {user.company.name}
              </p>
              <p>
                <strong>Catch Phrase:</strong> {user.company.catchPhrase}
              </p>
              <p>
                <strong>Business:</strong> {user.company.bs}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

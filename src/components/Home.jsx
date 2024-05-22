import React from "react";

function Home() {
  return (
    <div className="container" style={{ height: "80vh" }}>
      <h1 className="row justify-content-center align-items-center">
        WELCOME TO USER DATA MANAGEMENT
      </h1>
      <p className=" text-center fs-4 lh-1 m-5">
        In an era where data is paramount, our platform offers you the tools to
        securely manage and optimize your personal and professional data. Take
        control of your digital footprint with ease and confidence.
      </p>

      <h4 className="text-center mt-5 mb-3">Key Features</h4>
      <p className=" text-center fs-4">
        Effortlessly organize your data. Our platform provides powerful tools to
        categorize, tag, and retrieve your information quickly and efficiently.
      </p>
      <p className=" text-center fs-4">
        Your data security is our priority. With cutting-edge encryption and
        robust security protocols, your information remains safe from
        unauthorized access.
      </p>

      <h4 className="text-center mt-5 mb-3">Benefits</h4>
      <p className=" text-center fs-4">
        Customize the platform to suit your needs with tailored dashboards and
        settings.
      </p>
      <p className=" text-center fs-4">
        Automate routine tasks and workflows, reducing manual effort and saving
        you time.
      </p>
    </div>
  );
}

export default Home;

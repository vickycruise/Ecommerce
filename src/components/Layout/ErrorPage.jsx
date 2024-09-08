import React from "react";
import error from "../../assets/images/error404.jpg";

const ErrorPage = () => {
  return (
    <div className>
      <div className=" container-sm  text-center">
        <img
          class="img-fluid"
          src={error}
          height={500}
          width={500}
          alt="Error 404"
        />
      </div>
    </div>
  );
};

export default ErrorPage;

import React from "react";
import arrow from "../../images/arrow.png";

function Subscribe({ id }) {
  return (
    <div className="form-wrapper" id={id}>
      <form action="https://www.netflix.com/signup">
        <input
          className="email"
          type="email"
          name="email"
          placeholder="Email address"
          required
        />
        <button className="email-submit" type="submit">
          <div className="submit-div">
            <p> TRY IT NOW</p>
            <img className="icon" src={arrow} alt="" />
          </div>
        </button>
      </form>

      <p className="p-under-form">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
    </div>
  );
}

export default Subscribe;

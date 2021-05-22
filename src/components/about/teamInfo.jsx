import React from "react";
// SCSS
import "./teamInfo.scss";
import Button from "../ui-components/button/button";

const about = () => (
  <div className="team__info flex-center">
    <div>
      <h4 className="font20 weight800">Little About Us</h4>
      <p className="font12 weight500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        temp orincididunt ut labore et dolore magna aliqua.
      </p>
      
      <div className="mt-3">
      <Button label="Read More" target={"contact"} />
      </div>
    </div>
  </div>
);

export default about;

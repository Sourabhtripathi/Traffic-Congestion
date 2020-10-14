import React, { Fragment } from "react";
import { Dropdown, Button } from "semantic-ui-react";

import "./Home.css";

const Home = (props) => {
  const onClick = () => {
    props.history.push({
      pathname: "/lights",
      state: { message: "hello, im a passed message!" },
    });
  };
  const countryOptions = [
    { key: "af", value: "af", flag: "af", text: "Afghanistan" },
    { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
    { key: "al", value: "al", flag: "al", text: "Albania" },
    { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
    { key: "as", value: "as", flag: "as", text: "American Samoa" },
    { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
    { key: "ao", value: "ao", flag: "ao", text: "Angola" },
    { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
    { key: "ag", value: "ag", flag: "ag", text: "Antigua" },
    { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
    { key: "am", value: "am", flag: "am", text: "Armenia" },
    { key: "aw", value: "aw", flag: "aw", text: "Aruba" },
    { key: "au", value: "au", flag: "au", text: "Australia" },
    { key: "at", value: "at", flag: "at", text: "Austria" },
    { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
    { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
    { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
    { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
    { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
    { key: "by", value: "by", flag: "by", text: "Belarus" },
    { key: "be", value: "be", flag: "be", text: "Belgium" },
    { key: "bz", value: "bz", flag: "bz", text: "Belize" },
    { key: "bj", value: "bj", flag: "bj", text: "Benin" },
  ];

  const DropdownExampleSearchSelection = () => (
    <Dropdown
      placeholder="Select Country"
      fluid
      search
      selection
      options={countryOptions}
    />
  );
  return (
    <Fragment>
      <div className="home-div">
        <DropdownExampleSearchSelection></DropdownExampleSearchSelection>
      </div>
      <div className="button-div">
        <Button color="pink" onClick={onClick}>
          Show Congestion
        </Button>
      </div>
    </Fragment>
  );
};

export default Home;

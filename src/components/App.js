import React, { Component } from "react";
import AskOtp from "./AskOtp";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePage: true,
      askOtp: false,
      value: "",
      countryCode: "+1",

      fullNumber: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = (event) => {
    const { value, countryCode } = this.state;
    event.preventDefault();

    // let pattern = new RegExp(/^[0-9\b]+$/);
    if (value.length === 10) {
      localStorage.setItem("otp", "1234");
      let finalNumber = countryCode + value;
      this.setState({
        homePage: false,
        askOtp: true,
        error: "",
        fullNumber: finalNumber,
      });
    } else {
      this.setState({
        value: "",
      });
      toast("Please enter a valid phone number.", {
        position: "top-right",
        type: "info",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  onSelectFlag = (countryCode) => {
    this.setState({
      countryCode: `${countryCode}`,
    });
  };

  render() {
    const { homePage, askOtp, value, fullNumber } = this.state;
    return (
      <div>
        {homePage && (
          <form onSubmit={this.handleSubmit}>
            <label>
              Phone Number:
              <ReactFlagsSelect
                defaultCountry="US"
                searchable={true}
                onSelect={this.onSelectFlag}
                showSelectedLabel={false}
              />
              <input type="number" value={value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )}
        {askOtp && <AskOtp phoneNumber={fullNumber} />}
      </div>
    );
  }
}

export default App;

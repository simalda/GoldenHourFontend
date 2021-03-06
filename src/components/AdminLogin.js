import React from "react";

import history from "../JS/history";
import * as managerManagerManager from "./../JS/managerManagerManager";
import Button from "./Button";

import GoogleLogin from "react-google-login";

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.buttonText = "שליחה";
    this.state = { user: "", psw: "" };
    const responseGoogle = (response) => {
      console.log(response);
    };
  }

  mySubmitHandler(event) {
    console.log("mySubmitHandler");
    this.props.handleAdminLogin(this.state.user, this.state.psw);

    event.preventDefault();
  }

  handleChangeUser(event) {
    this.setState({ user: event.target.value });
  }

  handleChangePsw(event) {
    this.setState({ psw: event.target.value });
  }

  render() {
    var whatToRender;
    if (this.props.loginSucssess === -1) {
      whatToRender = (
        <div className="popup">
          Login denied
          <button className="button" onClick={() => this.props.returnToLogin()}>
            Back
          </button>
        </div>
      );
    } else {
      whatToRender = (
        <form id="adminLogin" onSubmit={(event) => this.mySubmitHandler(event)}>
          {/* <form id="adminLogin"> */}
          <label>Username</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={this.state.user}
            onChange={(event) => this.handleChangeUser(event)}
          />

          <label>Password</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={this.state.value}
            onChange={(event) => this.handleChangePsw(event)}
          />
          <button className="button" type="submit">
            Submit
          </button>
          {/* <Button
            buttonText={this.buttonText}
            type={"submit"}
            clicked={() =>
              this.props.handleAdminLogin(this.state.user, this.state.psw)
            }
          /> */}
        </form>

        //   <GoogleLogin
        // clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        // render={renderProps => (
        //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
        // )}
        // buttonText="Login"
        // onSuccess={responseGoogle}
        // onFailure={responseGoogle}
        // cookiePolicy={'single_host_origin'}
        ///>
      );
    }
    return <div>{whatToRender}</div>;
  }
}

export default AdminLogin;

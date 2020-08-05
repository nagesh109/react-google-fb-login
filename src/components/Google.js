import React, { Component } from "react";
import GoogleLogin from "react-google-login";


class Google extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
      };
    responseGoogle(response) {
      // console.log(response);
      this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      });
    };
    componentClicked = () => console.log("clicked");

    render() {
      let googleContent;
  
      if (this.state.isLoggedIn) {
        googleContent = (
          <div
            style={{
              width: "400px",
              margin: "auto",
              background: "red",
              padding: "20px"
            }}
          >
            <img src={this.state.picture} alt={this.state.name} />
            <h2>Welcome {this.state.name}</h2>
            Email: {this.state.email}
          </div>
        );
      } else {
        googleContent = (
          <GoogleLogin
          clientId="646575225776-7d4udr326bi4uao3vl894bkq42s5kn7i.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          
          cookiePolicy={'single_host_origin'}
          />
        );
      }
  
      return <div>{googleContent}</div>;
    }
  }
    
export default Google
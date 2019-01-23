import React from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};

const MyInput = (props) => {
  return (
    <input 
      ref={props.inputRef}
      type="text" /> 
  )
}

const FuncCustomComp = () => {

  let inputRef = null;
  
  const onClickHandle = () => {
    inputRef.focus();
  }

  return (
    <div>
      <span>My input:</span>
      <MyInput 
        inputRef={(input) => {inputRef = input }} />
      <button 
        onClick={onClickHandle}>input</button>
    </div>
  )
}

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if ((!this.state.password) || (this.state.password.length < 8)) {
        passwordError = "password cannot be less than 8 charactors!";
      }

    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError , passwordError});
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  onKeyUpHandle = (target, e) => {
    
    if (e.keyCode === 13) {
      switch (target) {
        case 'name':
          this.email.focus();
          break;
        case 'email':
          this.password.focus();
          break;
        case 'password':
          this.submit.focus();
          break;
        default: 
          this.name.focus();
          break;
      }
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} className="Body">
        <FuncCustomComp />
        <div>
          <input
            name="name"
            placeholder="name"
            ref={ (input) => { this.name = input} }
            onKeyUp={this.onKeyUpHandle.bind(this, 'name')}
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            ref={ (input) => { this.email = input} }
            onKeyUp={this.onKeyUpHandle.bind(this, 'email')}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            ref={ (input) => { this.password = input} }
            onKeyUp={this.onKeyUpHandle.bind(this, 'password')}
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <input type="submit" 
          ref={ (input) => { this.submit = input} }
          onKeyUp={this.onKeyUpHandle.bind(this, 'submit')}
          value="submit" />
      </form>
    );
  }
}
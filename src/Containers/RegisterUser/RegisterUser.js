import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../Components/UI/Input/input";
import classes from "./RegisterUser.css";
import * as action from "../../Store/ReduxState/Actions/Index";
import TableComponent from "../../Components/Table/Table";
class RegisterUser extends Component {
  addHobbiesSection = (event) => {
    event.preventDefault();
    let updatedCount = this.props.count + 1;
    this.props.addHobbies(event, "Hobbie1", updatedCount);
  };

  postData = (event) => {
    event.preventDefault();
    var i = 0;
    let hobbies = [];
    let hobbiesValue = [];
    while (i < this.props.count) {
      i++;
      hobbies.push(this.props.orderForm["Hobbie" + i]);
    }
    for (var i in hobbies) {
      hobbiesValue.push(hobbies[i].value);
    }
    var userHobbies = hobbiesValue.join(",");
    let payload = {
      username: this.props.orderForm.Username.value,
      email: this.props.orderForm.email.value,
      image: this.props.orderForm.image.value,
      Address: this.props.orderForm.Address.value,
      Hobbies: userHobbies,
    };

    this.props.SaveUsers(payload);
  };
  render() {
    const formElementsArray = [];

    for (let key in this.props.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.props.orderForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            uniqueKey={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.props.onInputChange(event, formElement.id)}
          ></Input>
        ))}
        <button
          onClick={(event) => this.addHobbiesSection(event)}
          className={classes.addMore}
        >
          Add More
        </button>
        <br/>
        <br />
        <button
          onClick={(event) => this.postData(event)}
          disabled={!this.props.formIsValid}
        >
          SUBMIT
        </button>
      </form>
    );
    return (
      <div className="container">
        <div className={classes.ContactData}>
          <h4>Enter your Contact Data</h4>
          {form}
        </div>
       {
         this.props.userData.length > 0 ? 
         <TableComponent userData = {this.props.userData}/>
         :
         <h1 className = "text-center">No User Found</h1>
       }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderForm: state.user.orderForm,
    formIsValid: state.user.formIsValid,
    userData: state.user.users,
    count: state.user.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (event, id) =>
      dispatch(action.hanleOnChangeEvent(event, id)),
    SaveUsers: (payload) => dispatch(action.SaveUsers(payload)),
    addHobbies: (event, id, count) =>
      dispatch(action.addMoreHobbies(event, id, count)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);

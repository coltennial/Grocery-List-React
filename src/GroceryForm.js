import React from "react";

class GroceryForm extends React.Component {
  state = { name: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: ""});
  }

  
}
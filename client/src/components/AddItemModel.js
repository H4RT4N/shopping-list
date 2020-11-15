import React, { Component } from "react";
import { Modal } from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

class AddItemModal extends Component {
  state = {
    modal: false,
    name: "",
    category: "",
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  onCatChange = (e) => {
    this.setState({ category: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      category: this.state.category,
    };

    this.props.addItem(newItem);
    this.toggle();
    setTimeout(() => window.location.reload(), 900);
  };

  render() {
    return (
      <div className="container text-center">
        <button className="btn btn-outline-primary mt-4 " onClick={this.toggle}>
          Add Item
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <div className="modal-header">
            <div className="modal-title">
              <h5>Add an item.</h5>
            </div>
            <button
              type="button"
              className="close text-danger"
              onClick={this.toggle}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="itemName">Item Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder=""
                  onChange={this.onNameChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="itemCategory">Category</label>
                <input
                  type="text"
                  category="category"
                  className="form-control"
                  placeholder=""
                  onChange={this.onCatChange}
                />
                <small className="form-text text-muted">
                  The category will be used to organize your list!
                </small>
              </div>
              <button
                type="submit"
                value="Submit"
                className="btn btn-primary float-right"
              >
                <FontAwesomeIcon icon="plus"></FontAwesomeIcon>
              </button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

AddItemModal.propTypes = {
  addItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.itemReducer,
});

export default connect(mapStateToProps, { addItem })(AddItemModal);

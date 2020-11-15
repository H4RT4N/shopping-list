import React, { Component } from "react";
import { Modal } from "reactstrap";
import { connect } from "react-redux";
import { deleteAllItems } from "../actions/itemActions";
import PropTypes from "prop-types";

class DeleteAllButton extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  onDeleteAll = (e) => {
    this.props.deleteAllItems();
    this.toggle();
    window.location.reload(false);
  };

  render() {
    return (
      <div className="container text-center">
        <button className="btn btn-outline-danger mt-4 " onClick={this.toggle}>
          Delete All Items
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="Modal">
          <div className="modal-body text-center">
            <strong>Are You Sure?</strong>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={this.onDeleteAll}
              className="btn btn-danger"
            >
              Yes
            </button>
            <button
              type="button"
              onClick={this.toggle}
              className="btn btn-primary"
            >
              No
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

DeleteAllButton.propTypes = {
  deleteAllItems: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.itemReducer,
});

export default connect(mapStateToProps, { deleteAllItems })(DeleteAllButton);

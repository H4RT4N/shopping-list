import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDelete = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <div className="container">
        <ul className="list-group m-4">
          {items
            .sort((a, b) => a.category.localeCompare(b.category))
            .map(({ _id, name, category }) => (
              <li className="list-group-item p-2" key={_id}>
                <strong> {name} </strong>
                <small className=" ml-5">
                  <i>{category}</i>
                </small>
                <button
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={() => this.onDelete(_id)}
                >
                  &times;
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.itemReducer,
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);

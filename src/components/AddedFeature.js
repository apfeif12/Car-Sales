import React from "react";
import { connect } from "react-redux";
import { removePart } from "../actions/actions.js";

const AddedFeature = (props) => {
  return (
    <li>
      <button
        className="button"
        onClick={() => {
          props.removePart(props.feature);
        }}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

// const mapStateToProps = state => {
//   console.log("addfeature state", state);
//   return({
//     name: state.feature.name,
//     });
// }

export default connect(null, { removePart })(AddedFeature);

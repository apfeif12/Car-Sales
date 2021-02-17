import React from "react";
import { connect } from "react-redux";
import { addPart } from "../actions/actions.js";

const AdditionalFeature = (props) => {
 
  return (
    <li>
      <button
        className="button"
        onClick={() => {
          props.addPart(props.feature);
        }}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  console.log("additional feature state", state);
  return {
    features: state.car.features,
  };
};

export default connect(mapStateToProps, { addPart })(AdditionalFeature);

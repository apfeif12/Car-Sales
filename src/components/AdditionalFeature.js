import React from "react";
import { connect } from "react-redux";
import { addPart } from "../actions/actions.js";

const AdditionalFeature = ({ addPart, feature }) => {
  const handleAddFeature = (e) => {
    addPart(feature);
  };

  return (
    <li>
      <button className="button" onClick={handleAddFeature}>
        Add
      </button>
      {feature.name} (+{feature.price})
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

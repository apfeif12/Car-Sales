import React from 'react';
import { connect } from 'react-redux';

import {addPart} from '../actions/carActions.js'

const AdditionalFeature = props => {

  const handleAddFeature = () => {
    props.addPart(props.feature.id)

    }

  return (
    <li>
      <button className="button" onClick={handleAddFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  console.log("additional feature state", state);
  return({
    features: state.car.features
    });
}

export default connect(mapStateToProps, {addPart})(AdditionalFeature);

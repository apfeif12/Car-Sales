import React from 'react';
import { connect } from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log("addfeature state", state);
  return({
    name: state.feature.name,
    });
}

export default connect(mapStateToProps, { })(AddedFeature);

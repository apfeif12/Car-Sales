import React from 'react';
import { connect } from 'react-redux';

const Header = state => {
  console.log("header state", state)
  return (
    <>
      <figure className="image is-128x128">
        <img src={state.car.image} alt={state.car.name} />
      </figure>
      <h2>{state.name}</h2>
      <p>Amount: ${state.car.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  console.log("header map state", state);
  return({
    car: state.car
  });
}

export default connect(mapStateToProps, { })(Header);
// export default Title;


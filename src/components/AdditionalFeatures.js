import React from 'react';
import { connect } from 'react-redux';

import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = state => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {state.additionalFeatures.length ? (
        <ol type="1">
          {state.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("additional features state", state);
  return{
    additionalFeatures: state.additionalFeatures,
    };
}

export default connect(mapStateToProps)(AdditionalFeatures);

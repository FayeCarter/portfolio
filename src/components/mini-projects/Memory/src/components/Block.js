import React from 'react';

function Block ({value, activeNumber}) {

  return (
    <div className="block" value={value}>
      <div>{value}</div>
    </div>
  );
}

export default Block;

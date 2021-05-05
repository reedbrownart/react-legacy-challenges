import React, { Component } from 'react';

const CatList = (props) => {
  const { breeds } = props;
  return (
    <div>
      {breeds.map(cat => <li>{cat}</li>)}
    </div>
  )
}

export default CatList;
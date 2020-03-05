import React from 'react';

export const Button = ({ danger }) => (
  <button
    className={danger ? 'button button--danger' : 'button button--success'}
  >
    hello
  </button>
);

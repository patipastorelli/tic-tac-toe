import PropTypes from 'prop-types';
import React from 'react';
interface IProps {
  value: string,
  onClick: () => void
}
const Square = ({ value = '', onClick }: IProps) =>  {
    //const store = createStore(rootReducer);
      return (
        <button className="square" onClick={() => onClick()}>
          {value}
        </button>
      );
  };

  Square.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };
  
  export default Square;
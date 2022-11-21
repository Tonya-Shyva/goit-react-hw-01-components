import PropTypes from 'prop-types';

export const App = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {children}
    </div>
  );
};

// для children propTypes не обов'язкові
App.propTypes = {
  children: PropTypes.node,
};

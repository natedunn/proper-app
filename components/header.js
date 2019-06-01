import PropTypes from 'prop-types';

const Header = props => {
  const { children } = props;
  return <h1 className="py-6 text-4xl">{children}</h1>;
};

Header.defaultProps = {
  children: 'Header',
};
Header.propTypes = {
  children: PropTypes.node,
};

export default Header;

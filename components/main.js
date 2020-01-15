import PropTypes from 'prop-types';
import tw from 'tailwind.macro';

const Main = props => {
  const { className, children } = props;
  return (
    <div
      css={tw`bg-white px-12 py-12 border border-gray-300`}
      className={className}
    >
      {children}
    </div>
  );
};

Main.defaultProps = {
  children: 'Header',
};
Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Main;

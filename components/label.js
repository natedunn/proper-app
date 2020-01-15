// Dependencies
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';

const Label = props => {
  const { children, className } = props;
  return (
    <span
      css={tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
      className={className}
    >
      {children}
    </span>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Label;

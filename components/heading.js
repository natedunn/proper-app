import PropTypes from 'prop-types';
import tw from 'tailwind.macro';

export const H1 = ({ className, children }) => (
  <h1 css={tw`text-4xl font-medium`} className={className}>
    {children}
  </h1>
);
export const H2 = ({ className, children }) => (
  <h2 css={tw`text-3xl font-medium`} className={className}>
    {children}
  </h2>
);
export const H3 = ({ className, children }) => (
  <h3 css={tw`text-2xl font-medium`} className={className}>
    {children}
  </h3>
);
export const H4 = ({ className, children }) => (
  <h4 css={tw`text-xl font-medium`} className={className}>
    {children}
  </h4>
);
export const H5 = ({ className, children }) => (
  <h5 css={tw`text-lg font-medium`} className={className}>
    {children}
  </h5>
);

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
const defaultProps = {
  children: 'Heading',
};

H1.propTypes = propTypes;
H1.defaultProps = defaultProps;
H2.propTypes = propTypes;
H2.defaultProps = defaultProps;
H3.propTypes = propTypes;
H3.defaultProps = defaultProps;
H4.propTypes = propTypes;
H4.defaultProps = defaultProps;
H5.propTypes = propTypes;
H5.defaultProps = defaultProps;

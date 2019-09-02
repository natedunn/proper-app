import NextLink from 'next/link';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  ${tw`text-purple-600 tracking-wide hover:text-purple-700 border-b-2 border-purple-200 hover:border-purple-400`}
`;

const Link = ({ href, children, className, external }) => {
  if (!external) {
    return (
      <NextLink href={href} passHref>
        <StyledLink className={className}>{children}</StyledLink>
      </NextLink>
    );
  }
  return (
    <StyledLink href={href} className={className}>
      {children}
    </StyledLink>
  );
};

Link.defaultProps = {};
Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  external: PropTypes.bool,
};

export default Link;

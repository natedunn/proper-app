import Link from 'component/link';
import tw from 'tailwind.macro';

const Footer = () => (
  <div
    css={tw`text-sm py-6 my-6 text-center text-gray-600 border-t-2 border-gray-300`}
  >
    Made by{' '}
    <Link href="https://twitter.com/natedunn" css={tw`text-sm`} external>
      @natedunn
    </Link>
    {` | `}
    <Link
      href="https://github.com/useproper/proper-app/releases"
      css={tw`text-sm`}
      external
    >
      View releases
    </Link>
  </div>
);

export default Footer;

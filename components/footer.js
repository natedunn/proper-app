import Link from 'component/link';
import tw from 'tailwind.macro';

const Footer = () => (
  <div className="text-sm mt-24 text-center text-gray-600 pt-6 border-t-2 border-gray-300">
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

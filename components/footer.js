import Link from 'next/link';

const Footer = () => (
  <div className="text-sm mt-6 text-center text-gray-600">
    Made by{' '}
    <Link prefetch href="https://twitter.com/natedunn">
      <a className="text-purple-600 tracking-wide hover:text-purple-800 border-b-2 border-purple-200 hover:border-purple-400">
        @natedunn
      </a>
    </Link>
  </div>
);

export default Footer;

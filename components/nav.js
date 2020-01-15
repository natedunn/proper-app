import React from 'react';
import Link from 'component/link';
import Container from 'layout/container';
import tw from 'tailwind.macro';
import Logo from '../images/proper-logo.svg';
import packageJson from '../package.json';

const NavItems = [
  {
    url: '/',
    text: 'Build',
  },
  {
    url: '/about',
    text: 'About',
  },
  {
    url: '/how',
    text: 'How to Use',
  },
];

const Nav = () => (
  <Container className="flex items-center justify-between py-6">
    <Link href="/" css={tw`font-bold flex items-center`}>
      <Logo className="w-5" />
    </Link>
    <ul className="-mr-4">
      {NavItems.map(function(item, index) {
        return (
          <li key={index} className="inline-block mr-4">
            <Link
              href={item.url}
              css={tw`text-sm font-bold uppercase tracking-wide`}
              external
            >
              {item.text}
            </Link>
          </li>
        );
      })}
    </ul>
  </Container>
);

export default Nav;

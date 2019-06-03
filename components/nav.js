import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import tw from 'tailwindcss/defaultTheme';
import Logo from '../images/proper-logo.svg';
import packageJson from '../package.json';

const Container = styled.div`
  max-width: ${tw.maxWidth['4xl']};
  margin-left: auto;
  margin-right: auto;
`;

const NavItems = [
  {
    url: '/about',
    text: 'About',
  },
  {
    url: '/how',
    text: 'How to use',
  },
  {
    url: '/about#contribute',
    text: 'Contribute',
  },
];

const Nav = () => (
  <div className="bg-white shadow-lg">
    <Container className="flex items-center justify-between py-6">
      <Link prefetch href="/">
        <a className="font-bold flex items-center">
          <Logo className="w-5" />
        </a>
      </Link>
      <ul className="-mr-4">
        {NavItems.map(function(item, index) {
          return (
            <li key={index} className="inline-block mr-4">
              <Link prefetch href={item.url}>
                <a className="text-purple-600 tracking-wide text-sm hover:text-purple-700 border-b-2 border-purple-200 hover:border-purple-400">
                  {item.text}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        href={`https://github.com/useproper/proper-app/releases/tag/${
          packageJson.version
        }`}
      >
        <a className="text-sm text-purple-600 tracking-wide hover:text-purple-800 border-b-2 border-purple-200 hover:border-purple-400">
          v {packageJson.version}
        </a>
      </Link>
    </Container>
  </div>
);

export default Nav;

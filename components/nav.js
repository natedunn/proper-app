/**
 * TODO: Dynamically set up links
 */

import React from 'react';
import Link from 'next/link';
import { css } from 'styled-components';

const NavItems = [
  {
    url: '/',
    text: 'Home',
  },
  {
    url: '/about',
    text: 'About',
  },
];

const Nav = () => (
  <div className="flex items-center justify-between">
    <span className="font-bold text-gray-500">proper</span>
    <ul>
      {NavItems.map(function(item, index) {
        return (
          <li key={index} className="inline-block mr-4">
            <Link prefetch href={item.url}>
              <a className="text-purple-700 text-lg tracking-wide font-bold hover:text-purple-500 border-b border-purple-200 hover:border-purple-500">
                {item.text}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

export default Nav;

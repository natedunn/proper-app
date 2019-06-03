import Link from 'next/link';
import Head from 'component/head';
import Nav from 'component/nav';
import styled from 'styled-components';
import tw from 'tailwindcss/defaultTheme';

const pageInfo = {
  title: 'Proper | About',
};

const Container = styled.div`
  max-width: ${tw.maxWidth['4xl']};
  margin-left: auto;
  margin-right: auto;
`;

const About = props => (
  <>
    <Head title={pageInfo.title} />
    <Nav />
    <Container className="mt-12 mb-12">
      <div className="bg-white rounded py-12 px-12 shadow-lg">
        <h1 className="text-4xl font-bold mb-4 border-b-2 border-gray-200 pb-4">
          About
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 text-purple-800">
            What is Proper?
          </h2>
          <p>
            Proper is a simple bash script to help you install and update the
            dependencies you need for you Mac
          </p>
          <p>
            The script was originally forked from{' '}
            <Link href="https://twitter.com/MinaMarkham">
              <a className="text-purple-600 tracking-wide hover:text-purple-800 border-b-2 border-purple-200 hover:border-purple-400">
                Mina Markham
              </a>
            </Link>
            's{' '}
            <Link href="https://github.com/minamarkham/formation">
              <a className="text-purple-600 tracking-wide hover:text-purple-800 border-b-2 border-purple-200 hover:border-purple-400">
                Formation
              </a>
            </Link>
            . Her work was invaluable to getting Proper started. Please consider
            supporting her on{' '}
            <Link href="https://www.patreon.com/minamarkham">
              <a className="text-purple-600 tracking-wide hover:text-purple-800 border-b-2 border-purple-200 hover:border-purple-400">
                Patreon
              </a>
            </Link>
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 text-purple-800">
            The Proper Builder
          </h2>
          <p>
            You might have noticed the script builder on the homepage. This
            builder will create a customized Proper script so you don't have to
            spend time searching for the right package names on all the various
            package managers and services. It's pretty cool, but its also still
            a work in progress, so please just be aware of that.
          </p>
        </section>

        <section id="contribute">
          <h2 className="text-2xl font-bold mb-3 text-purple-800">
            Contributing
          </h2>
          <p>
            Contribution and ideas are welcome for both the Proper script and
            the Proper builder. Feel free to discuss on via issues on Github for
            the time being.
          </p>
          <ul>
            <li>
              <Link href="https://github.com/useproper/proper">
                <a className="text-purple-600 tracking-wide hover:text-purple-800 border-b-2 border-purple-200 hover:border-purple-400">
                  Proper
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/useproper/proper-app">
                <a className="text-purple-600 tracking-wide hover:text-purple-800 border-b-2 border-purple-200 hover:border-purple-400">
                  Proper Site
                </a>
              </Link>{' '}
              (this site and builder)
            </li>
          </ul>
        </section>
      </div>
    </Container>
  </>
);

export default About;

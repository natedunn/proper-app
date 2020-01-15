import Link from 'component/link';
import Head from 'component/head';
import Nav from 'component/nav';
import Header from 'component/header';
import Main from 'component/main';
import Footer from 'component/footer';
import Container from 'layout/container';
import { H1 } from 'component/heading';
import tw from 'tailwind.macro';

const pageInfo = {
  title: 'Proper | About',
};

const About = props => (
  <>
    <Head title={pageInfo.title} />
    <Nav />
    <Container>
      <Header css={tw`rounded-b-none`}>
        <H1 css={tw`font-bold text-white mt-20`}>About Proper</H1>
      </Header>
      <Main>
        <section css={tw`mb-8`}>
          <h2 css={tw`text-2xl font-bold mb-3 text-purple-800`}>
            What is Proper?
          </h2>
          <p>
            Proper is a simple bash script to help you install and update the
            dependencies you need for you Mac.
          </p>
          <p>
            The script was originally forked from{' '}
            <Link href="https://twitter.com/MinaMarkham" external>
              Mina Markham
            </Link>
            's{' '}
            <Link href="https://github.com/minamarkham/formation" external>
              Formation
            </Link>
            . Her work was invaluable to getting Proper started. Please consider
            supporting her on{' '}
            <Link href="https://www.patreon.com/minamarkham" external>
              Patreon.
            </Link>
          </p>
        </section>
        <section css={tw`mb-8`}>
          <h2 css={tw`text-2xl font-bold mb-3 text-purple-800`}>
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
          <h2 css={tw`text-2xl font-bold mb-3 text-purple-800`}>
            Contributing
          </h2>
          <p>
            Contribution and ideas are welcome for both the Proper script and
            the Proper builder. Feel free to discuss on via issues on Github for
            the time being.
          </p>
          <ul>
            <li>
              <Link href="https://github.com/useproper/proper" external>
                Proper
              </Link>
            </li>
            <li>
              <Link href="https://github.com/useproper/proper-app" external>
                Proper Site
              </Link>{' '}
              (this site and builder)
            </li>
          </ul>
        </section>
      </Main>
      <Footer />
    </Container>
  </>
);

export default About;

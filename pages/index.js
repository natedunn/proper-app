import Link from 'component/link';
import Head from 'component/head';
import Nav from 'component/nav';
import Footer from 'component/footer';
import Container from 'layout/container';
import tw from 'tailwind.macro';

const pageInfo = {
  title: 'Proper | Get up and running',
};

const About = props => (
  <>
    <Head title={pageInfo.title} />
    <Nav />
    <Container css={tw`mt-12 mb-12`}>
      <div className="text-center mt-16 mb-12">
        <h1 className="text-4xl font-medium mb-2">
          Get your machine up and running with{' '}
          <span
            css={tw`font-bold text-purple-800 border-b-4 border-purple-300`}
          >
            Proper
          </span>
          .
        </h1>
        <div>
          Get started by <Link href="/build">building your script</Link> or
          directly{` `}
          <Link href="https://github.com/useproper/proper">
            forking the repo
          </Link>
          .
        </div>
      </div>
      <Footer />
    </Container>
  </>
);

export default About;

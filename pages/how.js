import Head from 'component/head';
import Nav from 'component/nav';
import Footer from 'component/footer';
import Container from 'layout/container';
import tw from 'tailwind.macro';
import Header from 'component/header';
import Main from 'component/main';
import { H1, H2 } from 'component/heading';

const pageInfo = {
  title: 'Proper | How to Use',
};

const About = () => (
  <>
    <Head title={pageInfo.title} />
    <Nav />
    <Container>
      <Header css={tw`rounded-b-none`}>
        <H1 css={tw`font-bold text-white mt-20`}>How to use Proper</H1>
      </Header>
      <Main>
        <span css={tw`inline-block w-full bg-gray-200 rounded mb-3 py-3 px-4`}>
          👋 This page is currently going through some changes. Better content
          incoming.
        </span>
        <H2 css={tw`font-bold`}>1. Create</H2>
        <p>
          To get started, head over to the builder and add the dependencies you
          need for your machine.
        </p>
        <H2 css={tw`font-bold`}>2. Download</H2>
        <p>
          Once you have added all your required dependencies, download your
          custom script.
        </p>
        <H2 css={tw`font-bold`}>3. Run</H2>
        <p>
          Unzip the contents of `proper.zip`, cd into the new directory, and run
          `sh proper` to start.
        </p>
      </Main>
      <Footer />
    </Container>
  </>
);

export default About;

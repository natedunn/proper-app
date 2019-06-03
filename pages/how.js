import Link from 'next/link';
import Head from 'component/head';
import Nav from 'component/nav';
import Footer from 'component/footer';
import styled from 'styled-components';
import tw from 'tailwindcss/defaultTheme';

const pageInfo = {
  title: 'Proper | How to Use',
};

const Container = styled.div`
  max-width: ${tw.maxWidth['4xl']};
  margin-left: auto;
  margin-right: auto;
`;

const How = props => (
  <>
    <Head title={pageInfo.title} />
    <Nav />
    <Container className="mt-12 mb-12">
      <div className="bg-white rounded py-12 px-12 shadow-lg">
        <h1 className="text-4xl font-bold mb-4 border-b-2 border-gray-200 pb-4">
          How to use Proper
        </h1>
        <section>
          <p>Guide and video coming soon! Apologies for the wait.</p>
        </section>
      </div>
      <Footer />
    </Container>
  </>
);

export default How;

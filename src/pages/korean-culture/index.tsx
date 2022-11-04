import { NextPage, NextPageContext } from 'next'

export async function getServerSideProps(context: NextPageContext) {
  return {
    redirect: {
      destination: `/${context.locale}/korean-culture/creative-mugs`,
    },
  }
}

const About: NextPage = () => {
  return <></>
}

export default About

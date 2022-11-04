import { NextPage, NextPageContext } from 'next'

export async function getServerSideProps(context: NextPageContext) {
  return {
    redirect: {
      destination: `/${context.locale}/study-in-korea/gks-program`,
    },
  }
}

const About: NextPage = () => {
  return <></>
}

export default About

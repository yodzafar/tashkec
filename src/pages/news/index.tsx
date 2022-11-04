import { NextPage, NextPageContext } from 'next'

export async function getServerSideProps(context: NextPageContext) {
  return {
    redirect: {
      destination: `/${context.locale}/news/center-news`,
    },
  }
}

const About: NextPage = () => {
  return <></>
}

export default About

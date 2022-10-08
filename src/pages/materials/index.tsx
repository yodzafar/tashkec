import { NextPage, NextPageContext } from 'next'

export async function getServerSideProps(context: NextPageContext) {
  return {
    redirect: {
      destination: `/${context.locale}/materials/topik`,
    },
  }
}

const Materials: NextPage = () => {
  return <></>
}

export default Materials

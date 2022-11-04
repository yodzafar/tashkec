import { NextPage, NextPageContext } from 'next'

export async function getServerSideProps(context: NextPageContext) {
  return {
    redirect: {
      destination: `/${context.locale}/courses/timetable`,
    },
  }
}

const Courses: NextPage = () => {
  return <></>
}

export default Courses

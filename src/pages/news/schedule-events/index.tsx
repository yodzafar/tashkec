import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { newsNavigation } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import { useUrlParams } from 'hooks'
import { QueryParamsConst, QueryValuesConst } from 'constants/app'
import { useMemo } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'
import { WorkPlan } from 'Components/News'
import { wrapper } from 'store'
import { fetchMonthWorkPlans, fetchYearWorkPlans } from 'models'

const ScheduleEvents: NextPage = () => {
  const { t } = useTranslation()
  const queryData = useUrlParams()
  const _type = queryData[QueryParamsConst.TYPE]

  const background = useMemo((): LayoutBackground => {
    switch (_type) {
      case QueryValuesConst.Month:
        return LayoutBackground.WorkPlanMonth
      case QueryValuesConst.Year:
        return LayoutBackground.WorkPlanYear
      default:
        return LayoutBackground.WorkPlan
    }
  }, [_type])

  return (
    <>
      <SEO title='schedule_events' />
      <MainLayout background={background} pageTitle='schedule_events'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('schedule_events')}
        </h2>
        <ContentLayout parent='news' parentTitle='news' navigation={newsNavigation}>
          <WorkPlan />
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({query}) => {
  if(!query.type) {
    await store.dispatch(fetchMonthWorkPlans({ size: 3 }))
    await store.dispatch(fetchYearWorkPlans({ size: 3 }))
  }

  if(query.type === 'MONTH') {
    await store.dispatch(fetchMonthWorkPlans())
  }

  if(query.type === 'YEAR') {
    await store.dispatch(fetchYearWorkPlans())
  }

  return {
    props: {},
  }
})

export default ScheduleEvents

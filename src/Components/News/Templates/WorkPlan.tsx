import { useAppSelector, useUrlParams } from 'hooks'
import { WorkPlanList } from 'Components/News/Organisms/WorkPlanList'
import { useCallback } from 'react'
import { WorkPlanTypeEnum } from 'entities/about'
import { useRouter } from 'next/router'

export const WorkPlan = () => {
  const { push, locale } = useRouter()
  const { year: { list: yearList }, month: { list: monthList } } = useAppSelector(state => state.workPlan)
  const urlData = useUrlParams()
  const _type = urlData?.type

  const onShowMore = useCallback((timeType: WorkPlanTypeEnum) => {
    push(`/news/schedule-events?type=${timeType}`, undefined, { locale })
  }, [locale, push])

  return (
    <>
      {
        !_type && (
          <>
            {
              monthList.length > 0
                ? <WorkPlanList
                  list={monthList}
                  title='for_a_month'
                  className='mb-[93px]'
                  onShowMore={() => onShowMore(WorkPlanTypeEnum.MONTH)}
                />
                : null
            }
            {
              yearList.length > 0
                ? <WorkPlanList
                  list={yearList}
                  title='for_a_year'
                  onShowMore={() => onShowMore(WorkPlanTypeEnum.YEAR)}
                />
                : null
            }
          </>
        )
      }
      {
        _type === 'MONTH' && (
          <WorkPlanList
            list={monthList}
            title='for_a_month'
          />
        )
      }
      {
        _type === 'YEAR' && (
          <WorkPlanList
            list={yearList}
            title='for_a_year'
          />
        )
      }
    </>
  )
}
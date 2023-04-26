import { useList } from '../hooks/useList'

export default function Home () {
  const list = useList()
  return (
    <div className='flex flex-col items-center px-6 lg:px-8'>
      <div className='mx-auto max-w-3xl lg:mx-0'>
        <h1 className='text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl'>Feature Flags Test Project </h1>
        <p className='mt-6 text-lg text-gray-200'>
          This site does nothing 😊. <br />
          It's just an example of how feature flags works with <a href='https://flagsmith.com/'>Flagsmith</a>. <br />
          Let's imagine that each Pokemon is a different feature and we can turn them on and off.
        </p>
      </div>
      <ul
        role='list'
        className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4'
      >
        {list.map((item) => {
          return (
            item.flag
              ? (
                <li key={item.name}>
                  <img className='aspect-[1/1] w-full rounded-2xl object-cover max-h-[300px] xl:max-h-[240px]' src={item.imageUrl} alt='' />
                  <h2 className='mt-1 text-xl font-semibold tracking-tight text-gray-100'>{item.name}</h2>
                </li>
                )
              : null
          )
        })}
      </ul>
    </div>
  )
}

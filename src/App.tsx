import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string
  title: string
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)
  console.log(data)

  return (
    <>
      <h1 className='text-5xl text-violet-500 font-bold'>Hello World!</h1>
      <h2 className='title'>Hello World!</h2>

      <ul>
        {data?.lessons.map((lesson) => {
          return <li key={lesson.id}>{lesson.title}</li>
        })}
        <li></li>
      </ul>
    </>
  )
}

export default App

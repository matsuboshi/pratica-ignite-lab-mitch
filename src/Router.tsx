import { Routes, Route } from 'react-router-dom'
import Event from './pages/Event'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Event />} />
      <Route path='/home' element={<h1>Home</h1>} />
      <Route path='/event/lesson/:slug' element={<Event />} />
    </Routes>
  )
}

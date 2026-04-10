import { Routes, Route } from 'react-router-dom'
import MainLayout from './UI/components/Users/UserLayout'
import HomePage from './UI/pages/Users/HomePage'
import Category from './UI/pages/Users/Category'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="category" element={<Category />} />
      </Route>
    </Routes>
  )
}
export default App

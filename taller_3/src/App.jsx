import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboutView from './views/AboutView'
import CoursesView from './views/CoursesView'
import HomeView from './views/HomeView'
import LoginView from './views/LoginView'
import NotFoundView from './views/NotFoundView'

function MainLayout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomeView />} />
        <Route path="/cursos" element={<CoursesView />} />
        <Route path="/nosotros" element={<AboutView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  )
}

export default App

import Header from './header'
import './App.css'
//import Body from './body'
import Skill from './Skills'
import About from './about'
import Project from './project'
import { lazy, Suspense } from 'react'


function App() {

  const Body = lazy(() => import('./body'));
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading</p>}>
        <Body />
      </Suspense>
      <About />
      <Skill />
      <Project />
    </>
  )
}

export default App

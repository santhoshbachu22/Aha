import One from './one'
import Two from './two'
import Three from './three'
import Four from './four'
import Nav from './navbar'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Nav/>} />
        <Route path='/one' element={<One/>} />
        <Route path='/two' element={<Two/>} />
        <Route path='/three' element={<Three/>} />
        <Route path='/four' element={<Four/>} />
      </Routes>
    </>
  );
}

export default App;
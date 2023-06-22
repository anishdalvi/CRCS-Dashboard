import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home, Sidebar, Navbar, Bar, Pie, Geography } from './components'
import { ListOfRegistered, RegistrationProcess } from './pages'
import { useStateContext } from './contexts/ContextProvider'

function App() {
  const { activeMenu } = useStateContext()

  return (
    <>
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg bg-main-bg w-full h-full'>
          {activeMenu ? ( // width = 18rem
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          <div
              className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
                activeMenu ? "md:ml-80" : "flex-2"
              }`}
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
              </div>

              <div>

                <Routes>
                  {/* Dashboard */}
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  
                  {/* Pages */}
                  <Route path="/list" element={<ListOfRegistered />} />
                  <Route path="/registrationprocess" element={<RegistrationProcess />} />

              

                  {/* Charts */}

                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/geographic" element={<Geography />} />
                
                 

                </Routes>
              </div>
            </div> 


      </div>
    </BrowserRouter>
        
    </>
  )
}

export default App

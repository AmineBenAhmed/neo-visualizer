import Dashboard from "./views/Dashboard"

function App() {

  return (
      <div className="p-2 bg-auto bg-no-repeat bg-center bg-[url('./assets/bodies.jpg')] lg:overflow-hidden md:overflow-y-auto sm:overflow-y-auto h-[100vh]" >
        <div className="m-1 overflow-hidden">
          <Dashboard />
        </div>
      </div>
  )
}

export default App

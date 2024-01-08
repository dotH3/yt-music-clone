import PlayerBar from './components/PlayerBar'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'

const App = () => {
  return (
    <div className='flex'>

      <SideBar />

      <div className='w-full'>
        <NavBar />
      </div>

      <PlayerBar />

      {/* a */}
    </div>
  )
}

export default App
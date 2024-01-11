import './App.css'
import Accordion from './components/Accordion'

function App() {

  return (
    <div>
      <Accordion title="Testing title">
        <h3>This is the h3 from the content child</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, odit?</p>
      </Accordion>
    </div>
  )
}

export default App

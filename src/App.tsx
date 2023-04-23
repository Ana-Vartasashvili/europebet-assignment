import { CashGame, FinalStage, Layout, NewYearSeries } from '@/components'
import { useState } from 'react'

function App() {
  const [activeComponent, setActiveComponent] = useState('New Year Series')

  return (
    <Layout
      setActiveComponent={setActiveComponent}
      activeComponent={activeComponent}
    >
      {activeComponent === 'Cash Games' && <CashGame />}
      {activeComponent === 'New Year Series' && <NewYearSeries />}
      {activeComponent === 'Final Stage' && <FinalStage />}
    </Layout>
  )
}

export default App

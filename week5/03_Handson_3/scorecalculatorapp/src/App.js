import React from 'react';
import { CalculateScore } from './components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore 
        Name="Ayush"
        School="LNCT"
        total={284}
        goal={3}
      />
    </div>
  );
}

export default App;

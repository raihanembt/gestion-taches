import React from 'react';
import FormTache from './FormTache';
import TacheTable from './TacheTable';

function App() {
    return (
       <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Gestion des Tâches</h1>
        <FormTache/>
        <TacheTable/>
        
       </div>
      );
}

export default App;



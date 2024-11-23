import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ajouterTache } from './Redux/actions/actionsTache.js';

const FormTache = () => { 
  const [tache, setTache] = useState({ nom: '', dateDebut: '', dateFin: '', statut: true });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTache((tacheAncien) => ({ ...tacheAncien, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tache.nom && tache.dateDebut && tache.dateFin) {
      dispatch(ajouterTache({ ...tache, id: Date.now() }));
      setTache({ nom: '', dateDebut: '', dateFin: '', statut: false});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm mx-auto"
    >
      <h2 className="text-xl font-bold text-gray-700 mb-4">Ajouter une tâche</h2>
      
      <div className="mb-4">
        <label htmlFor="nom" className="block text-gray-700 text-sm font-bold mb-2">
          Nom de la tâche
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={tache.nom}
          onChange={handleChange}
          placeholder="Nom de la tâche"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="dateDebut" className="block text-gray-700 text-sm font-bold mb-2">
          Date de début
        </label>
        <input
          type="date"
          id="dateDebut"
          name="dateDebut"
          value={tache.dateDebut}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="dateFin" className="block text-gray-700 text-sm font-bold mb-2">
          Date de fin
        </label>
        <input
          type="date"
          id="dateFin"
          name="dateFin"
          value={tache.dateFin}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Ajouter la tâche
      </button>
    </form>
  );
};

export default FormTache;

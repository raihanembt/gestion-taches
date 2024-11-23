import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { basculerStatut } from './Redux/actions/actionsTache.js';

const TacheTable = () => {
  
  const taches = useSelector(state =>  state.taches);
  const dispatch = useDispatch();

  const handleToggleStatut = (id) => {
    dispatch(basculerStatut(id));
  };

  // const handleDelete = (id) => {
  //   dispatch(supprimerTache(id));
  // };

  return (
    <table className="table-auto w-full border">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">Nom</th>
          <th className="border px-4 py-2">Date Début</th>
          <th className="border px-4 py-2">Date Fin</th>
          <th className="border px-4 py-2">Statut</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {taches.map((tache) => (
          <tr key={tache.id}>
            <td className="border px-4 py-2">{tache.nom}</td>
            <td className="border px-4 py-2">{tache.dateDebut}</td>
            <td className="border px-4 py-2">{tache.dateFin}</td>
            <td className="border px-4 py-2">
              <input
                type="checkbox"
                checked={tache.statut}
                onChange={() => handleToggleStatut(tache.id)}
              />
            </td>
            {/* <td className="border px-4 py-2">
              <button
                onClick={() => handleDelete(tache.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Supprimer
              </button>
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TacheTable;

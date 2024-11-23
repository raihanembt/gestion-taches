const etatInitial = {
    taches: [
      { id: '1', nom: 'Tâche 1', dateDebut: '2024-11-01', dateFin: '2024-11-05', statut: false },
      { id: '2', nom: 'Tâche 2', dateDebut: '2024-11-06', dateFin: '2024-11-10', statut: true },
      { id: '2', nom: 'supprimer', dateDebut: '2024-11-06', dateFin: '2024-11-10', statut: true },

    ],
  };
  
  export default function tacheReducers(state = etatInitial, action) {
    switch (action.type) {
      case 'AJOUTER_TACHE':
        return { ...state, taches: [...state.taches, action.payload] };
      case 'SUPPRIMER_TACHE':
        return {
          ...state,
          taches: state.taches.filter((item) => item.id !== action.payload),
        };
  
      case 'BASCULER_STATUT':
        return {
          ...state,
          taches: state.taches.map((tache) =>
            tache.id === action.payload ? { ...tache, statut: !tache.statut } : tache
          ),
        };
      default:
        return state;
    }
  };
  
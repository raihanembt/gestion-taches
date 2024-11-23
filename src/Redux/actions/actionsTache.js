
export const ajouterTache = (tache) => ({
    type: 'AJOUTER_TACHE',
    payload: tache,
  });
  
  export const supprimerTache = (id) => ({
    type: 'SUPPRIMER_TACHE',
    payload: id,
  });
  
  export const basculerStatut = (id) => ({
    type: 'BASCULER_STATUT',
    payload: id,
  });
  
  export const filtrerTaches = (statut) => ({
    type: 'FILTRER_TACHES',
    payload: statut, 
  });
  
  


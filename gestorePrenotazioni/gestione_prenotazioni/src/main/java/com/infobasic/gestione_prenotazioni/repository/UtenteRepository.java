package com.infobasic.gestione_prenotazioni.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infobasic.gestione_prenotazioni.model.Utente;

public interface UtenteRepository  extends JpaRepository<Utente,Long>{
    
}

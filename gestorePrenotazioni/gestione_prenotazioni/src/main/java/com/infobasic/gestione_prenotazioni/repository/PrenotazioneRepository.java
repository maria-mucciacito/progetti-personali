package com.infobasic.gestione_prenotazioni.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infobasic.gestione_prenotazioni.model.Prenotazione;

public interface PrenotazioneRepository extends JpaRepository<Prenotazione,Long>{
    
}

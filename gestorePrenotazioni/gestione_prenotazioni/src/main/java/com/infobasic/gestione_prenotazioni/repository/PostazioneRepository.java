package com.infobasic.gestione_prenotazioni.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infobasic.gestione_prenotazioni.model.Postazione;

public interface PostazioneRepository extends JpaRepository<Postazione,Long>{
    
}

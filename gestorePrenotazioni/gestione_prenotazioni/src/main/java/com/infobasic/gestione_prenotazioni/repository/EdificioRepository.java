package com.infobasic.gestione_prenotazioni.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infobasic.gestione_prenotazioni.model.Edificio;

public interface EdificioRepository extends JpaRepository<Edificio,Long>{
    
}

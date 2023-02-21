package com.infobasic.gestionemagazzino.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infobasic.gestionemagazzino.model.Utente;

public interface UtenteRepository  extends JpaRepository<Utente,Long> {
    
}

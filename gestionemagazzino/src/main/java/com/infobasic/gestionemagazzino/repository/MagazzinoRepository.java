package com.infobasic.gestionemagazzino.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infobasic.gestionemagazzino.model.Magazzino;

public interface MagazzinoRepository  extends JpaRepository<Magazzino,Long>{
    
}

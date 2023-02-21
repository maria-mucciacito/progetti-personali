package com.infobasic.gestionemagazzino.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infobasic.gestionemagazzino.model.Ordine;

public interface OrdineRepository  extends JpaRepository<Ordine,Long>{
    
}

package com.infobasic.gestionemagazzino.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infobasic.gestionemagazzino.model.Product;

public interface ProductRepository  extends JpaRepository<Product,Long>{
    
}

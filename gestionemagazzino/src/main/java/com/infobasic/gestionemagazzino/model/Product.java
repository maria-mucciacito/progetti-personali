package com.infobasic.gestionemagazzino.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String codice;
    private String descrizione;
    private Float prezzoUnitario;
    private Integer quantitaDisponibile;

    @ManyToOne
    private Scaffale scaffale;
    @ManyToOne
    private Ordine ordine;
    
}

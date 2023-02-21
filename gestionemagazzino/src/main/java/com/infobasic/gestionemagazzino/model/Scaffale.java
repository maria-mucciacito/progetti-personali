package com.infobasic.gestionemagazzino.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Scaffale {
        
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String codice;
    private String nome;
    private Integer numMaxProdotti;

    @OneToMany(mappedBy = "scaffale")
    List<Product> prodotti;
    @ManyToOne
    private Magazzino magazzino;
}

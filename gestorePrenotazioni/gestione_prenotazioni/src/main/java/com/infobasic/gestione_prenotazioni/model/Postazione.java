package com.infobasic.gestione_prenotazioni.model;

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

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Postazione {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String codice;
    private String descrizione;
    private Tipo tipo;
    private Integer numMaxOccupanti;

    @ManyToOne
    private Edificio edificio;

    @OneToMany(mappedBy = "postazione")
    private List<Prenotazione> prenotazioni;

}

package it.infobasic.gestioneuniversita.model;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Studente {

    @NonNull
    private String matricola;

    private String nome;

    private String cognome;

    @DateTimeFormat(pattern = "yyyy/MM/dd")
    private LocalDate dataNascita;

    private String indirizzo;

    private String citta;

    private String email;

    private CorsoLaurea corsoLaurea;
}

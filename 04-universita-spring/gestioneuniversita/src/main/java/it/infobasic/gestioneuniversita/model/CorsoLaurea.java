package it.infobasic.gestioneuniversita.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CorsoLaurea {
    
    @NonNull
    private String nome;
    private String codice;
    private String indirizzo;
    private Integer numeroEsami;
}

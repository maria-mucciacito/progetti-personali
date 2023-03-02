package it.infobasic.gestioneuniversita.model;

import java.util.Map;
import java.util.Collection;
import java.util.HashMap;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArchivioDati {

    private Map<String, Studente> studenti = new HashMap<>();
    private Map<String, CorsoLaurea> corsiLaurea = new HashMap<>();

    public boolean aggiungiStudente(Studente studente) {
        if (studenti.containsKey(studente.getMatricola())) {
            return false;
        } else {
            studenti.put(studente.getMatricola(), studente);
            return true;
        }
    }

    public boolean aggiornaStudente(Studente studente) {
        if (studenti.containsKey(studente.getMatricola())) {
            studenti.put(studente.getMatricola(), studente);
            return true;
        } else {
            return false;
        }
    }

    public Collection<Studente> getAllStudenti() {
        return studenti.values();
    }

    public Studente getStudenteByMatricola(String matricola) {
        return studenti.get(matricola);
    }

    public void cancellaStudente(String matricola) {
        if (studenti.containsKey(matricola)) {
            studenti.remove(matricola);
        }
    }

    //crud percorso di laurea

    public boolean aggiungiCorsoDiLaurea(CorsoLaurea corsoLaurea) {
        if (corsiLaurea.containsKey(corsoLaurea.getCodice())) {
            return false;
        } else {
            corsiLaurea.put(corsoLaurea.getCodice(), corsoLaurea);
            return true;
        }
    }

    public boolean aggiornaCorso(CorsoLaurea corsoLaurea) {
        if (corsiLaurea.containsKey(corsoLaurea.getCodice())) {
            corsiLaurea.put(corsoLaurea.getCodice(), corsoLaurea);
            return true;
        } else {
            return false;
        }
    }

    public Collection<CorsoLaurea> getAllCorsi() {
        return corsiLaurea.values();
    }

    public CorsoLaurea getCorsoByCodice(String codice) {
        return corsiLaurea.get(codice);
    }

    public void cancellaCorso(String codice) {
        if (corsiLaurea.containsKey(codice)) {
            corsiLaurea.remove(codice);
        }
    }
}
package it.infobasic.gestioneuniversita.util;

import org.springframework.boot.CommandLineRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import it.infobasic.gestioneuniversita.model.Studente;
import java.time.LocalDate;

import it.infobasic.gestioneuniversita.model.ArchivioDati;
import it.infobasic.gestioneuniversita.model.CorsoLaurea;

@Component
public class DataLoader implements CommandLineRunner {
    @Autowired
    private ApplicationContext ctx;

    @Override
    public void run(String... args) throws Exception {
        ArchivioDati archiviodati = ctx.getBean(ArchivioDati.class);
        popolaCorsoLaurea(archiviodati);
        popolaStudenti(archiviodati);
        
        
    }

    private void popolaCorsoLaurea(ArchivioDati archivioDati) {
        CorsoLaurea corsoLaurea1 = new CorsoLaurea(
            "Economia", 
            "UBIUIG6776f",
            "Economia e Managament", 
            20
        );
        CorsoLaurea corsoLaurea2 = new CorsoLaurea(
            "Ingegneria", 
            "TCYTC6677G",
            "Informatica", 
            18
        );
        archivioDati.aggiungiCorsoDiLaurea(corsoLaurea2);
        archivioDati.aggiungiCorsoDiLaurea(corsoLaurea1);
    }

    private void popolaStudenti(ArchivioDati archivioDati){
        Studente studente1 = new Studente(
            "M0001",
            "Stefano",
            "Di Blasio",
            LocalDate.now(),
            "Via Roma 1234",
            "Pianella",
            "stefanodiblasio00@gmail.com",
            archivioDati.getCorsoByCodice("UBIUIG6776f")
            );
        Studente studente2 = new Studente(
            "M0002",
            "Alessandro",
            "Di Nisio",
            LocalDate.now(),
            "Via Panoramica 1234",
            "Lanciano",
            "alessandrodinisio00@gmail.com",
            archivioDati.getCorsoByCodice("UBIUIG6776f")
            );
        Studente studente3 = new Studente(
            "M0003",
            "Vincenzo",
            "Panacciulli",
            LocalDate.now(),
            "Via Delle Rose 1234",
            "Lanciano",
            "vincenzopanaccio01@gmail.com",
            archivioDati.getCorsoByCodice("TCYTC6677G")
            );
        
        archivioDati.aggiungiStudente(studente1);
        archivioDati.aggiungiStudente(studente2);
        archivioDati.aggiungiStudente(studente3);
    }

}
package com.infobasic.gestione_prenotazioni;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.infobasic.gestione_prenotazioni.model.Edificio;
import com.infobasic.gestione_prenotazioni.model.Postazione;
import com.infobasic.gestione_prenotazioni.model.Prenotazione;
import com.infobasic.gestione_prenotazioni.model.Tipo;
import com.infobasic.gestione_prenotazioni.model.Utente;
import com.infobasic.gestione_prenotazioni.repository.*;

@Component
public class DataLoader implements CommandLineRunner{

    @Autowired
    private UtenteRepository utenteRepository;

    @Autowired
    private PostazioneRepository postazioneRepository;

    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    @Autowired
    private EdificioRepository edificioRepository;

    public void run(String... args) throws Exception {
        Utente u1 = new Utente();
        u1.setNome("Mario Rossi");
        u1.setEmail("mr@example.it");
        u1.setPassword("marior");
        u1.setUsername("marior");
        utenteRepository.save(u1);

        Edificio e1 = new Edificio();
        e1.setIndirizzo("Via Roma, 3");
        e1.setCitta("Roma");
        e1.setNome("PalazzoRomaNord");
        edificioRepository.save(e1);

        Postazione p1 = new Postazione();
        p1.setCodice("YT6GHGH");
        p1.setDescrizione("No description");
        p1.setTipo(Tipo.PRIVATO);
        p1.setNumMaxOccupanti(20);
        p1.setEdificio(e1);
        postazioneRepository.save(p1);

        Prenotazione pre1 = new Prenotazione();
        pre1.setDataPrenotata(LocalDate.of(2023, 2, 20));
        pre1.setDataPrenotazione(LocalDate.now());
        pre1.setUtente(u1);
        pre1.setPostazione(p1);
        prenotazioneRepository.save(pre1);
    }


    
}

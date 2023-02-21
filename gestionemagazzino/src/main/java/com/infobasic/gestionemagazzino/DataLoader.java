package com.infobasic.gestionemagazzino;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.infobasic.gestionemagazzino.model.Magazzino;
import com.infobasic.gestionemagazzino.model.Scaffale;
import com.infobasic.gestionemagazzino.repository.MagazzinoRepository;
import com.infobasic.gestionemagazzino.repository.OrdineRepository;
import com.infobasic.gestionemagazzino.repository.ProductRepository;
import com.infobasic.gestionemagazzino.repository.ScaffaleRepository;
import com.infobasic.gestionemagazzino.repository.UtenteRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class DataLoader implements CommandLineRunner{

    @Autowired
    private MagazzinoRepository magazzinoRepository;

    @Autowired
    private OrdineRepository ordineRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ScaffaleRepository scaffaleRepository;
    @Autowired
    private UtenteRepository utenteRepository;

    @Override
    public void run(String... args) throws Exception {
        
        Magazzino magazzino1 = new Magazzino();
        magazzino1.setCitta("Roma");
        magazzino1.setIndirizzo("Via Roma , 3");
        magazzino1.setNome("BigM");
        magazzinoRepository.save(magazzino1);

        Scaffale scaffale1 = new Scaffale();
        scaffale1.setCodice("GBGGG&");
        scaffale1.setNome("Scaffale Alimenti Bio");
        scaffale1.setNumMaxProdotti(23);
        scaffale1.setMagazzino(magazzino1);
        scaffaleRepository.save(scaffale1);
        //log.info(magazzino1.getScaffali().toString());
        
    }
    
}

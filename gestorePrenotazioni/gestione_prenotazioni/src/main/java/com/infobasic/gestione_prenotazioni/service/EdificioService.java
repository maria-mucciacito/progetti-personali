package com.infobasic.gestione_prenotazioni.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.infobasic.gestione_prenotazioni.model.*;

import com.infobasic.gestione_prenotazioni.repository.EdificioRepository;

@Service
public class EdificioService {
    @Autowired
    private EdificioRepository edificioRepository;

    public List<Edificio> getAll(){
        
        return edificioRepository.findAll(); 
    }

    public Edificio findById(Long id){
        return edificioRepository.findById(id).get();
    }

    public Edificio save(Edificio edificio){
        return edificioRepository.save(edificio);
    }

    public void deleteById(Long id){
        edificioRepository.deleteById(id);
    }

    public Edificio update(Edificio edificio2Update){
        Edificio edificioOld = findById(edificio2Update.getId());
        if(edificioOld != null){
            edificioOld.setCitta(edificio2Update.getCitta());
            edificioOld.setIndirizzo(edificio2Update.getIndirizzo());
            edificioOld.setNome(edificio2Update.getNome());
            edificioRepository.save(edificioOld);
            return edificioOld;
        }
        return null;
    }
}

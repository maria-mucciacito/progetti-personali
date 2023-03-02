package com.infobasic.gestione_prenotazioni.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import com.infobasic.gestione_prenotazioni.model.*;
import com.infobasic.gestione_prenotazioni.service.*;
import java.util.*;


@RestController
@RequestMapping("/api/v1")
public class EdificioController {
    
    @Autowired
    private EdificioService edificioService;

    @GetMapping("/edificio/all")
    public ResponseEntity<List<Edificio>> getAll(){
        return new ResponseEntity<List<Edificio>>( edificioService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/edificio/{id}")
    public ResponseEntity<Edificio> getById(@PathVariable Long id) {
        Edificio edificioTmp = edificioService.findById(id);
        // controllare se findbyid è null
        return new ResponseEntity<Edificio>(edificioTmp, HttpStatus.OK);
    }

    @DeleteMapping("/edificio/delete/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id){
        edificioService.deleteById(id);
        return new ResponseEntity<String>("Edificio eliminato",HttpStatus.OK);
    }

    @PostMapping("/edificio/create")
    public ResponseEntity<Edificio> save(@RequestBody Edificio edificioNew){
        Edificio edificioTmp = edificioService.save(edificioNew);
        return new ResponseEntity<Edificio>(edificioTmp, HttpStatus.CREATED);
    }

    @PutMapping("/edificio/update")
    public ResponseEntity<Edificio> update(@RequestBody Edificio edificioNew){
        Edificio edificioTmp = edificioService.save(edificioNew);
        return new ResponseEntity<Edificio>(edificioTmp, HttpStatus.OK);
    }
}

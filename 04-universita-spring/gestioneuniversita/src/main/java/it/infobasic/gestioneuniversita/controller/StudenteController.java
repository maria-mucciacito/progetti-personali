package it.infobasic.gestioneuniversita.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.bind.annotation.ModelAttribute;

import it.infobasic.gestioneuniversita.model.ArchivioDati;
import it.infobasic.gestioneuniversita.model.Studente;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/studenti")
public class StudenteController {

    @Autowired
    private ApplicationContext ctx;

    private ArchivioDati getArchivioDati() {
        return ctx.getBean(ArchivioDati.class);
    }

    @GetMapping("/mostraElenco")
    public ModelAndView mostraElencoStudenti() {

        ModelAndView view = new ModelAndView("elenco-studenti");
        view.addObject("studenti", getArchivioDati().getStudenti().values());
        return view;
    }

    @GetMapping("/mostraFormAggiungi")
    public ModelAndView  mostraFormAggiungi() {
        ModelAndView view = new ModelAndView("aggiungi-studente");
        Studente studente = new Studente();
        view.addObject("studente", studente);
        view.addObject("corsiLaurea", getArchivioDati().getCorsiLaurea().values() );

        return view;
    }

    @PostMapping("/aggiungi" )
    public String aggiungiStudente(@ModelAttribute("studente") Studente studente, BindingResult result, Model model) {
       
        Studente a = new Studente(studente.getMatricola(),studente.getNome(),studente.getCognome(),studente.getDataNascita(),studente.getIndirizzo(),studente.getCitta(),studente.getEmail(),studente.getCorsoLaurea());

        getArchivioDati().aggiungiStudente(a);
        return "redirect:/studenti/mostraElenco";

    }

    @GetMapping("/mostraFormAggiorna/{matricola}")
    public String mostraFormAggiornamento(@PathVariable("matricola") String matricola, Model model) {

        Studente studenteOld = getArchivioDati().getStudenteByMatricola(matricola);
        model.addAttribute("studente", studenteOld);
        model.addAttribute("corsiLaurea", getArchivioDati().getCorsiLaurea().values());

        return "aggiorna-studente";
    }

    @PostMapping("aggiorna/{matricola}")
    public String aggiornaStudente(@PathVariable("matricola") String matricola, Studente studente,
            BindingResult result, Model model) {
                getArchivioDati().aggiornaStudente(studente);
        return "redirect:/studenti/mostraElenco";
    }

    @GetMapping("elimina/{matricola}")
    public String deleteStudente(@PathVariable("matricola") String matricola, Model model) {
        getArchivioDati().cancellaStudente(matricola);
        return "redirect:/studenti/mostraElenco";
    }

}
package it.infobasic.pizzeriaspring.util;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import it.infobasic.pizzeriaspring.model.Ordine;
import it.infobasic.pizzeriaspring.model.StatoOrdine;
import it.infobasic.pizzeriaspring.model.Tavolo;
import it.infobasic.pizzeriaspring.model.food.pizza.Pizza;
import it.infobasic.pizzeriaspring.model.food.pizza.base.PizzaMargherita;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class OrdiniRunner implements CommandLineRunner {

    @Override
    public void run(String... args) throws Exception {

        log.info("System startup");

        GestoreMenu gestoreMenu = new GestoreMenu();
        gestoreMenu.stampaMenu();

        generaTavoli();

        log.info("System shutdown");

    }

    public Ordine generaTavoli() {
        Tavolo t1 = new Tavolo(1, 4);

        Ordine o1 = generaOrdine_1(t1);

        log.info(o1.toString());
        return o1;
    }

    private Ordine generaOrdine_1(Tavolo t1) {
        Ordine o = new Ordine();

        o.setCostoCoperto(1.0);
        o.setStato(StatoOrdine.IN_CORSO);
        o.setNumeroOrdine(1);
        o.setTavolo(t1);

        /** Valorizzo ordine con MenuItems */
        Pizza p1 = new PizzaMargherita();
        o.addMenuItem(p1);

        return o;
    }
}

package it.infobasic.pizzeriaspring;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import it.infobasic.pizzeriaspring.model.Ordine;
import it.infobasic.pizzeriaspring.model.StatoOrdine;
import it.infobasic.pizzeriaspring.model.Tavolo;
import it.infobasic.pizzeriaspring.model.food.drink.Drink;
import it.infobasic.pizzeriaspring.model.food.drink.DrinkLemonade;
import it.infobasic.pizzeriaspring.model.food.pizza.Pizza;
import it.infobasic.pizzeriaspring.model.food.pizza.base.PizzaMargherita;

import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest
class PizzeriaspringApplicationTests {

	@Autowired
	private PizzeriaspringApplication controller;

	@Test
	void contextLoads() {
		assertThat(controller).isNotNull();
	}

	@Test
	void addItemOrdine(){
		Tavolo t1 = new Tavolo(1, 4);

        Ordine o1 = new Ordine();

        o1.setCostoCoperto(1.0);
        o1.setStato(StatoOrdine.IN_CORSO);
        o1.setNumeroOrdine(1);
        o1.setTavolo(t1) ;
		Pizza p1 = new PizzaMargherita();
		Pizza p2 = new PizzaMargherita();
		Drink d1 = new DrinkLemonade();
        o1.addMenuItem(p1);
		o1.addMenuItem(p2);
		o1.addMenuItem(d1);
	}

}

package it.infobasic.pizzeriaspring.model;

import java.util.ArrayList;
import java.util.List;

import it.infobasic.pizzeriaspring.model.food.drink.Drink;
import it.infobasic.pizzeriaspring.model.food.pizza.Pizza;
import it.infobasic.pizzeriaspring.model.food.toppings.PizzaTopping;
import it.infobasic.pizzeriaspring.model.franchising.Franchising;
import lombok.Getter;

/* Dentro model perché contiene anche il Franchising */
@Getter
public class Menu {

    private List<Drink> menuDrink = new ArrayList<>();

    private List<Pizza> menuPizza = new ArrayList<>();

    private List<PizzaTopping> menuPizzaTopping = new ArrayList<>();

    private List<Franchising> menuFranchising = new ArrayList<>(); 

}

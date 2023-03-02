package it.infobasic.pizzeriaspring.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import it.infobasic.pizzeriaspring.model.Menu;
import it.infobasic.pizzeriaspring.model.food.drink.Drink;
import it.infobasic.pizzeriaspring.model.food.drink.DrinkCola;
import it.infobasic.pizzeriaspring.model.food.drink.DrinkWater;
import it.infobasic.pizzeriaspring.model.food.pizza.Pizza;
import it.infobasic.pizzeriaspring.model.food.pizza.PizzaFamilySize;
import it.infobasic.pizzeriaspring.model.food.pizza.base.PizzaMargherita;
import it.infobasic.pizzeriaspring.model.food.toppings.OnionsTopping;
import it.infobasic.pizzeriaspring.model.franchising.FranchisingMug;
import it.infobasic.pizzeriaspring.model.franchising.FranchsingShirt;

/*
 * Vado a configurare tutti i miei Bean
 */
@Configuration
public class MenuConfig {

    @Bean
    public Menu menu() {
        Menu menu = new Menu();

        menu.getMenuDrink().add(drinkWater());
        menu.getMenuDrink().add(cocaCola());

        menu.getMenuPizza().add(pizzaMargherita());
        menu.getMenuPizza().add(pizzaFamilySize(pizzaMargherita()));

        menu.getMenuPizzaTopping().add(onionsTopping(null));

        menu.getMenuFranchising().add(franchsingShirt());
        menu.getMenuFranchising().add(franchsingMug());

        return menu;
    }

    @Bean
    @Primary
    public PizzaMargherita pizzaMargherita() {
        return new PizzaMargherita();
    }

    @Bean
    public PizzaMargherita pizzaMargherita2() {
        return new PizzaMargherita();
    }

    @Bean
    public Drink drinkWater() {
        return new DrinkWater(); // Costruttore
    }

    @Bean
    public Drink cocaCola() {
        return new DrinkCola(); // Costruttore
    }

    @Bean
    public OnionsTopping onionsTopping(Pizza p) {
        return new OnionsTopping(p); // Costruttore
    }

    @Bean
    public Pizza pizzaFamilySize(Pizza pizzaMargherita2) {
        return new PizzaFamilySize(pizzaMargherita2);
    }

    @Bean
    public FranchsingShirt franchsingShirt() {
        return new FranchsingShirt();
    }

    @Bean
    public FranchisingMug franchsingMug() {
        return new FranchisingMug();
    }

}

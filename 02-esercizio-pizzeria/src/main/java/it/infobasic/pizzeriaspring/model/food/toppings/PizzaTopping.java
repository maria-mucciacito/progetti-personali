package it.infobasic.pizzeriaspring.model.food.toppings;

import it.infobasic.pizzeriaspring.model.food.pizza.Pizza;

/**
 * Per il Pattern Decorator
 */
public abstract class PizzaTopping implements Pizza {

    protected final Pizza pizza;

    // Polimorfismo ed ereditarietà
    public PizzaTopping(Pizza pizza) {
        this.pizza = pizza;
    }
}

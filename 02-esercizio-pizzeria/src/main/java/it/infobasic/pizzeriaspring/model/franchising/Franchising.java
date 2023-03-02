package it.infobasic.pizzeriaspring.model.franchising;

import it.infobasic.pizzeriaspring.model.MenuItem;
import lombok.AllArgsConstructor;
import lombok.Setter;

@Setter
@AllArgsConstructor
public class Franchising implements MenuItem {

    private String name;
    private Double price;

    @Override
    public String getName() {
        return name;
    }

    @Override
    public double getPrice() {
        return price;
    }

    @Override
    public String getMenuItemLine() {
        return getName() + " - price: " + getPrice();
    }

}

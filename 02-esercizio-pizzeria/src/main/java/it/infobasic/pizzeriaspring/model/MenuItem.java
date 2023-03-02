package it.infobasic.pizzeriaspring.model;

public interface MenuItem {

    public String getName(); // Item che vogliamo stampare

    public double getPrice(); // Prezzo del singolo item

    public String getMenuItemLine(); // Stampa tutte le info dell'item (sorta di "toString")
}

package it.infobasic.pizzeriaspring.util;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import it.infobasic.pizzeriaspring.config.MenuConfig;
import it.infobasic.pizzeriaspring.model.Menu;
import lombok.extern.slf4j.Slf4j;

// Classe che sa stampare il menu
@Slf4j
public class GestoreMenu {

    private Menu menu;
    private ApplicationContext ctx;

    public GestoreMenu() {
        ctx = new AnnotationConfigApplicationContext(MenuConfig.class);
        menu = (Menu) ctx.getBean("menu"); // vado a recuperare il bean che si chiama "menu" nella MenuConfig.class
    }

    public void stampaMenu() {
        log.info("***** Menu Drink *****");
        menu.getMenuDrink().forEach(p -> log.info(p.getMenuItemLine()));

        log.info("***** Menu Pizza *****");
        menu.getMenuPizza().forEach(p -> log.info(p.getMenuItemLine()));

        log.info("***** Menu Topping *****");
        menu.getMenuPizzaTopping().forEach(p -> log.info(p.getMenuItemLine()));

        log.info("***** Menu Gadgets *****");
        menu.getMenuFranchising().forEach(p -> log.info(p.getMenuItemLine()));

    }

    public Menu getMenu() {
        return menu;
    }

    

}

package it.infobasic.pizzeriaspring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import it.infobasic.pizzeriaspring.util.GestoreMenu;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class MenuController {
    @GetMapping("/menu")
    public ModelAndView getMenu() {
        String viewName = "menu";
        String modelName = "gestoreMenu";
        GestoreMenu gestoreMenu = new GestoreMenu();

        return new ModelAndView(viewName, modelName, gestoreMenu);
    }
}

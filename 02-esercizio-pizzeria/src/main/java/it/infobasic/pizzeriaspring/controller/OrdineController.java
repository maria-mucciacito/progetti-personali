package it.infobasic.pizzeriaspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import it.infobasic.pizzeriaspring.util.OrdiniRunner;

@Controller
public class OrdineController {

    @GetMapping("/ordini")
    public ModelAndView getMenu() {
        String viewName = "ordini";
        String modelName = "gestoreOrdini";
        OrdiniRunner gestoreOrdini = new OrdiniRunner();

        return new ModelAndView(viewName, modelName, gestoreOrdini.generaTavoli());
    }

}

package it.infobasic.gestioneuniversita.util;
import org.springframework.context.ApplicationContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import it.infobasic.gestioneuniversita.model.*;

@Component
public class CorsoDiLaureaConverter implements Converter<String, CorsoLaurea> {
    @Autowired
    private ApplicationContext ctx;

    @Override
    public CorsoLaurea convert(String codice){
        return ctx.getBean(ArchivioDati.class).getCorsiLaurea().get(codice);
    }
}

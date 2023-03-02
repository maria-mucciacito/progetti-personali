package it.infobasic.gestioneuniversita.util;

import it.infobasic.gestioneuniversita.model.CorsoLaurea;
import it.infobasic.gestioneuniversita.model.Studente;
import it.infobasic.gestioneuniversita.model.ArchivioDati;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.Bean;

@Configuration
public class DataConfig {
    
    @Bean
    public ArchivioDati archiviodati(){
        return new ArchivioDati();
    }

    @Bean
    @Scope("prototype")
    public Studente studente(){
        return new Studente();
    }

    @Bean
    @Scope("prototype")
    public CorsoLaurea corsoLaurea(){
        return new CorsoLaurea();
    }
}

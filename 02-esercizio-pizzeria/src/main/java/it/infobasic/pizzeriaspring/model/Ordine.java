package it.infobasic.pizzeriaspring.model;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Ordine {
    private Integer numeroOrdine;
    private Tavolo tavolo;
    private StatoOrdine stato;
    @Value("${costoCoperto}")
    private Double costoCoperto; // Da .properties
    private Map<MenuItem, Integer> ordinazione = new HashMap<>(); // Dummy DB

    public Integer addMenuItem(MenuItem item) {

        if (!ordinazione.containsKey(item)) {
            ordinazione.put(item, 1);
        } else {
            ordinazione.put(item, ordinazione.get(item) + 1);
        }

        return ordinazione.get(item);
    }

}

package it.infobasic.pizzeriaspring.model;

import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@RequiredArgsConstructor
@Getter
@Setter
@ToString
public class Tavolo {

    private @NonNull Integer numeroTavolo;
    private @NonNull Integer numeroMassimoCoperti;
    private Boolean isOccupato = false;

}

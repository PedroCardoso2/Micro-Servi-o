package com.example.eventweb.Dts;

import com.example.eventweb.model.Evento;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

public record DadosAtualizarEvento(
        @NotNull
        Long id,
        String nome,
        String decricao,
        String status,
        @JsonProperty("data_evento")
        Date dataEvento
) {
}

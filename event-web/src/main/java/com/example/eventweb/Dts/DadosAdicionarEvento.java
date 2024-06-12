package com.example.eventweb.Dts;

import com.fasterxml.jackson.annotation.JsonProperty;

// import javax.validation.constraints.NotBlank;
import java.util.Date;

public record DadosAdicionarEvento(

        @JsonProperty("nome_Evento")
        String nome,
        String descricao,
        String localizacao,
        String status,

        @JsonProperty("data_evento")
        Date dataEvento,
        Integer organizador
) {
}

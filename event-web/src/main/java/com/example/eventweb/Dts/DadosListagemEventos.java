package com.example.eventweb.Dts;

import com.example.eventweb.model.Evento;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import java.util.Date;

public record DadosListagemEventos(Long id_event, String nome, String descricao, String localizacao,  Date dataEvento) {
    public DadosListagemEventos(Evento evento){
        this(evento.getId(), evento.getNome(), evento.getDescricao(), evento.getLocalizacao(), evento.getDataEvento());
    }

}

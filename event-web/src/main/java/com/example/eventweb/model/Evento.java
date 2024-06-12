package com.example.eventweb.model;

import com.example.eventweb.Dts.DadosAdicionarEvento;
import com.example.eventweb.Dts.DadosAtualizarEvento;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "eventos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Evento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_event")
    private Long id;

    private String nome;

    @Size(max = 250)
    private String descricao;

    @Size(max = 250)
    private String localizacao;

    @Column(name = "dt")
    private Date dataEvento;


    private String status;

    @Column(name = "organizador_id")
    private Integer organizador_Id;

    @Column(name = "data_criacao")
    private Timestamp dataCriacao;


    public Evento(DadosAdicionarEvento evento) {
        this.nome = evento.nome();
        this.descricao = evento.descricao();
        this.dataEvento = evento.dataEvento();
        this.organizador_Id = evento.organizador();
        this.status = evento.status();
    }

    // Update
    public void AtualizarEvento(DadosAtualizarEvento dados) {
        if (dados.id() != null) this.id = dados.id();
        if (dados.nome() != null) this.nome = dados.nome();
        if (dados.decricao() != null) this.descricao = dados.decricao();
        if (dados.dataEvento() != null) this.dataEvento = dados.dataEvento();
        if (dados.status() != null) this.status = dados.status();
    }

}

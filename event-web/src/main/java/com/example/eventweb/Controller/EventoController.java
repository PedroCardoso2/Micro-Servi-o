package com.example.eventweb.Controller;

import com.example.eventweb.Dts.DadosAdicionarEvento;
import com.example.eventweb.Dts.DadosAtualizarEvento;
import com.example.eventweb.Dts.DadosListagemEventos;
import com.example.eventweb.Dts.DadosRemoverEvento;
import com.example.eventweb.servicesControllers.ServicesCt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;

@RestController
@RequestMapping("/event")
public class EventoController {

    @Autowired
    private ServicesCt ct;


    @PostMapping
    @Transactional
    public ResponseEntity<?> addEvent(@RequestBody @Valid DadosAdicionarEvento dados, UriComponentsBuilder builder){
        return ct.adicionarEvento(dados, builder);
    }

    @PatchMapping("/put")
    @Transactional
    public ResponseEntity<?> put(@RequestBody @Valid DadosAtualizarEvento dados){
        return ct.atualizarEvent(dados);
    }

    @GetMapping("/all")
    public ResponseEntity<Page<DadosListagemEventos>> list(@PageableDefault Pageable page){
        return ct.listagemEventos(page);
    }

    @DeleteMapping
    @Transactional
    public ResponseEntity<?> remove( @RequestBody @Valid DadosRemoverEvento dados){
        return ct.removerEvento(dados);
    }


}

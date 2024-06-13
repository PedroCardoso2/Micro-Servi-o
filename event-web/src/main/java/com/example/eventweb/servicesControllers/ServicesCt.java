package com.example.eventweb.servicesControllers;

import com.example.eventweb.Dts.DadosAdicionarEvento;
import com.example.eventweb.Dts.DadosAtualizarEvento;
import com.example.eventweb.Dts.DadosListagemEventos;
import com.example.eventweb.Dts.DadosRemoverEvento;
import com.example.eventweb.model.Evento;
import com.example.eventweb.model.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class ServicesCt {

    @Autowired
    private EventoRepository repository;

    // Add -> Event
    public ResponseEntity<DadosAdicionarEvento> adicionarEvento(DadosAdicionarEvento dados, UriComponentsBuilder builder){
        var event = new Evento(dados);
        repository.save(event);

        var uri = builder.path("/created/{id}").buildAndExpand(event.getId()).toUri();

       return ResponseEntity.created(uri).build();
    }

    //Remover -> Event
    public ResponseEntity<DadosRemoverEvento> removerEvento(Long dados){
      if(repository.existsById(Long.valueOf(dados))){
          repository.deleteById(Long.valueOf(dados));
          return ResponseEntity.status(HttpStatus.OK).body(new DadosRemoverEvento(dados));
      }else{
          return ResponseEntity.notFound().build();
      }
    }

    // List -> Event
    public ResponseEntity<Page<DadosListagemEventos>> listagemEventos(Pageable pageable){
        var page = repository.findAll(pageable).map(DadosListagemEventos::new);
        return ResponseEntity.ok(page);
    }

    // Update -> Event

    public ResponseEntity<DadosAtualizarEvento> atualizarEvent( DadosAtualizarEvento dados){
        var optionalEvento = repository.findById(dados.id());
        if (optionalEvento.isPresent()) {
            var evento = optionalEvento.get();
            evento.AtualizarEvento(dados);
            repository.save(evento);
            return ResponseEntity.status(HttpStatus.ACCEPTED)
                    .body(new DadosAtualizarEvento(evento.getId(), evento.getNome(), evento.getDescricao(), evento.getStatus(), evento.getDataEvento()));
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

}

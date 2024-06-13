/* eslint-disable no-unused-vars */
import * as React from "react";
import { useEffect, useState } from 'react';
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet'; 
import Box from '@mui/joy/Box';

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import axios from 'axios';
import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';
import { Link as RouterLink } from "react-router-dom";



function createData(nome, data, local, programacao, maisInformacoes) {
  return { nome, data, local, programacao, maisInformacoes };
}

const rows = [
  createData('DevOpsDay Fortaleza', '23/09/24', 'Estácio', 'programacao', 'Mussum Ipsum, cacilds vidis litro abertis.  Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Nulla id gravida magna, ut semper sapien. Bota 1 metro de cachacis aí pra viagem! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.'),
  createData('JavaDay Fortaleza', '23/09/24', 'Estácio', 'programacao', 'Mussum Ipsum, Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Nulla id gravida magna, ut semper sapien. Bota 1 metro de cachacis aí pra viagem! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.'),
  createData('PHP Fortaleza', '23/09/24', 'Estácio', 'programacao', 'Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Nulla id gravida magna, ut semper sapien. Bota 1 metro de cachacis aí pra viagem! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.'),
];

export default function Events() {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        try {
          const response = await axios.get('http://localhost:8686/event/all');
          const formattedEvents = response.data.content.map((event) => ({
            id: event.id_event,
            nome: event.nome,
            data: event.dataEvento ? new Date(event.dataEvento).toLocaleDateString() : '',
            local: event.localizacao || '',
            programacao: 'programacao',
            maisInformacoes: event.descricao ? `Mais Informações: ${event.descricao}` : '',
          }));
          setEvents(formattedEvents);
        } catch (error) {
          console.error('Erro ao buscar eventos:', error);
        }
      };
    

  useEffect(() => {

    fetchEvents();
  }, []);

  const handleRefresh = async () => {
    try {
      const response = await axios.get('http://localhost:8686/event/all');
      const formattedEvents = response.data.content.map((event) => ({
        id: event.id_event,
        nome: event.nome,
        data: event.dataEvento ? new Date(event.dataEvento).toLocaleDateString() : '',
        local: event.localizacao || '',
        programacao: 'programacao',
        maisInformacoes: event.descricao ? `Mais Informações: ${event.descricao}` : '',
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    }
  };


  
  const handleDelete = async (eventId) => {
    try {
      await axios.delete(`http://localhost:8686/event/${eventId}`);
      // Após a exclusão, atualizamos a lista de eventos
      fetchEvents();
    } catch (error) {
      console.error('Erro ao excluir evento:', error);
    }
  };
  

  return (
    <>
        <Typography level="h2" component="h1">
            Eventos
        </Typography>
        <Button
            color="primary"
            startDecorator={<AddCircleOutlineRoundedIcon />}
            size="sm"
            component={RouterLink} 
            to="add"
        >
            Incluir novo evento
        </Button>

        <Sheet variant="soft" sx={{ pt: 1, borderRadius: 'sm' }}>
      <Table
       
        hoverRow
        sx={{ captionSide: 'top', '& tbody': { bgcolor: '' } }}
      >
        <thead>
          <tr>
          <th>Id</th>
            <th style={{ width: '20%' }}>Nome do Evento</th>
            <th>Data</th>
            <th>Local</th>
            <th>Programação</th>
            <th>Mais Informações</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
        {events.map((event, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{event.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{event.nome}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{event.data}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{event.local}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{event.programacao}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{event.maisInformacoes}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button style={{ padding: '3px 8px', cursor: 'pointer' }} onClick={() => handleDelete(event.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
    </>
  );
}

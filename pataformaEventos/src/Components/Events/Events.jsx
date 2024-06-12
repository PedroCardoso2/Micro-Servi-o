import * as React from "react";

import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet'; 
import Box from '@mui/joy/Box';

import { Link as RouterLink } from "react-router-dom";

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

function createData(nome, data, local, programacao, maisInformacoes) {
  return { nome, data, local, programacao, maisInformacoes };
}

const rows = [
  createData('DevOpsDay Fortaleza', '23/09/24', 'Estácio', 'programacao', 'Mussum Ipsum, cacilds vidis litro abertis.  Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Nulla id gravida magna, ut semper sapien. Bota 1 metro de cachacis aí pra viagem! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.'),
  createData('JavaDay Fortaleza', '23/09/24', 'Estácio', 'programacao', 'Mussum Ipsum, Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Nulla id gravida magna, ut semper sapien. Bota 1 metro de cachacis aí pra viagem! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.'),
  createData('PHP Fortaleza', '23/09/24', 'Estácio', 'programacao', 'Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Nulla id gravida magna, ut semper sapien. Bota 1 metro de cachacis aí pra viagem! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.'),
];

export default function Events() {
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
            <th style={{ width: '20%' }}>Nome do Evento</th>
            <th>Data</th>
            <th>Local</th>
            <th>Programação</th>
            <th>Mais Informações</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.nome}>
              <td>{row.nome}</td>
              <td>{row.data}</td>
              <td>{row.local}</td>
              <td>{row.programacao}</td>
              <td>{row.maisInformacoes}</td>
              <td>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Button size="md" variant="soft" color="primary">
                  Editar
                </Button>
                <Button size="md" variant="soft" color="danger">
                  Excluir
                </Button>
                </Box>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
    </>
  );
}

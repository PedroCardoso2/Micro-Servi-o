import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";

import FormLabel from "@mui/joy/FormLabel";
import FormControl from "@mui/joy/FormControl";
import { Input, Textarea } from "@mui/joy";

export default function AddEvents() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [eventDetails, setEventDetails] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados do evento:", { eventName, eventDate, eventAddress, eventDetails });

    /* navigate("/events"); */
  };
  return (
    <>
      <Box sx={{ flex: 1, width: '100%' }}>
      <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
          zIndex: 9995,
        }}
      ></Box>
        <Typography level="h2" component="h1">
            Novo Evento 
        </Typography>
        <form onSubmit={handleSubmit}>
        <Stack
        spacing={4}
        sx={{
          display: 'flex',
          maxWidth: '800px',
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Informações do Evento</Typography>
            <Typography level="body-sm">
              Preencha o formulário com os detalhes do evento
            </Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
          >
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Nome do evento</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input 
                    size="sm" 
                    placeholder=""
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                   />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl>
                  <FormLabel>Data</FormLabel>
                  <Input 
                    size="sm" 
                    placeholder="no formato dd/mm/aaaa" 
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Local</FormLabel>
                  <Input
                    size="sm"
                    type="text"
                    placeholder="Unifor"
                    defaultValue="Unifor"
                    sx={{ flexGrow: 1 }}
                    value={eventAddress}
                    onChange={(e) => setEventAddress(e.target.value)}
                  />
                </FormControl>
              </Stack>

              <div>
              <FormControl sx={{ display: { sm: 'contents' } }}>
                  <FormLabel>Descrição do evento</FormLabel>
                  <Textarea 
                    minRows={4} 
                    sx={{ flexGrow: 1 }}
                    value={eventDetails}
                    onChange={(e) => setEventDetails(e.target.value)}
                  />
                </FormControl>
              </div>
            </Stack>
          </Stack>
          <CardContent orientation="horizontal">
        <Button
          variant="solid"
          size="md"
          color="danger"
          sx={{ fontWeight: 600 }}
          onClick={() => navigate(-1)}
        >
          Cancelar
        </Button>
        <Button
          variant="solid"
          size="md"
          color="primary"
          type="submit"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Salvar
        </Button>
        </CardContent>
        </Card>
      </Stack>
      </form>
      </Box>
    </>
  );
}

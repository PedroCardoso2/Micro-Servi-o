import * as React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography,
  Button,
  Container,
  Card,
  ModalDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Grid,
  Box,
} from "@mui/joy";
import Events from './../Events/Events';
import { Link } from "react-router-dom";

export default function Home() {
    useEffect(() => {

        fetchEvents();
      }, []);
    
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


      return (
        <Container sx={{ marginBottom: 4 }}>
          <Typography level="h2" component="h1">
            Home
          </Typography>
    
          <Container sx={{ marginBottom: 4 }}>
            <Typography variant="h2" gutterBottom>
              Bem-vindo à nossa página!
            </Typography>
            <Typography variant="body1" paragraph>
              Descubra uma nova era de aprendizado e crescimento com nossa
              plataforma de eventos. Aqui, você encontrará uma vasta gama de cursos,
              workshop e eventos projetados para impulsionar sua jornada de
              desenvolvimento pessoal e profissional. Pronto para começar sua
              jornada de aprendizado? Inscreva-se agora e embarque em uma jornada de
              descoberta e crescimento
            </Typography>
          </Container>
    
          <ModalDialog
            sx={{
              position: "static",
              transform: "none",
              maxWidth: 950,
            }}
          >
            <DialogTitle>Eventos Disponíveis</DialogTitle>
            <Divider />
            <DialogContent>
              <Grid container spacing={2}>
                {events.map((event, index) => (
                  <Grid item xs={4} key={index}>
                    <Card variant="outlined" sx={{ width: "100%" }}>
               
                        <Typography gutterBottom variant="h6">
                          {event.nome}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {event.maisInformacoes}
                        </Typography>
            
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button className="events-link" size="md" variant="soft" color="primary">
                <Link to="/events">Eventos</Link>
              </Button>
            </DialogActions>
          </ModalDialog>
          <Box component="footer" padding={2} bgcolor="grey.200" textAlign="center">
            <Typography variant="body2">
              © 2024 Eventos. Todos os direitos reservados.
            </Typography>
          </Box>
        </Container>
      );
}

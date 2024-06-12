import React from "react";
import {
  Typography,
  Button,
  Container,
  Card,
  CardOverflow,
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
            <Grid item xs={4}>
              <Card variant="outlined" sx={{ width: "100%" }}>
                <CardOverflow>
                  <Typography gutterBottom variant="h6">
                    DevOpsDay Fortaleza
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor
                    in eros commodo tempor. Aenean aliquam molestie leo, vitae
                    iaculis nisl. Nulla id gravida magna, ut semper sapien. Bota
                    1 metro de cachacis aí pra viagem! Mais vale um bebadis
                    conhecidiss, que um alcoolatra anonimis.
                  </Typography>
                </CardOverflow>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card variant="outlined" sx={{ width: "100%" }}>
                <CardOverflow>
                  <Typography gutterBottom variant="h6">
                    JavaDay Fortaleza
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Mussum Ipsum, Mauris nec dolor in eros commodo tempor.
                    Aenean aliquam molestie leo, vitae iaculis nisl. Nulla id
                    gravida magna, ut semper sapien. Bota 1 metro de cachacis aí
                    pra viagem! Mais vale um bebadis conhecidiss, que um
                    alcoolatra anonimis.
                  </Typography>
                </CardOverflow>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card variant="outlined" sx={{ width: "100%" }}>
                <CardOverflow>
                  <Typography gutterBottom variant="h6">
                    PHP Fortaleza
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Mussum Ipsum, Mauris nec dolor in eros commodo tempor.
                    Aenean aliquam molestie leo, vitae iaculis nisl. Nulla id
                    gravida magna, ut semper sapien. Bota 1 metro de cachacis aí
                    pra viagem! Mais vale um bebadis conhecidiss, que um
                    alcoolatra anonimis.
                  </Typography>
                </CardOverflow>
              </Card>
            </Grid>
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

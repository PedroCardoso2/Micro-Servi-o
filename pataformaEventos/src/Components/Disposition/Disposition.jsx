import React, { useState } from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import { Input } from "@mui/joy";
import Card from "@mui/joy/Card";
import jsPDF from "jspdf";
import Box from "@mui/joy/Box";

function gerarCertificado(participante) {
  const doc = new jsPDF();

  const img = new Image();
  img.src = "./assets/certificadoImg.png"; 

  img.onload = function () {
    doc.addImage(img, "PNG", 10, 10, 200, 150); 
    doc.text(`Certificado para ${participante.nome}`, 10, 170); 
    doc.save(`certificado_${participante.nome}.pdf`); 
  };

  return doc;
}

const Disposition = () => {
  const [participante, setParticipante] = useState({
    nome: "",
    presente: false,
  });
  const [certificadoGerado, setCertificadoGerado] = useState(null);

  const handleParticipacao = () => {
    if (participante.nome) {
      setParticipante((prevState) => ({ ...prevState, presente: true }));
      alert(`Participação registrada para ${participante.nome}`);
    } else {
      alert("Por favor, digite seu nome antes de registrar a participação.");
    }
  };

  const handleGerarCertificado = () => {
    if (participante.presente) {
      const doc = gerarCertificado(participante);
      if (doc) {
        setCertificadoGerado(doc);
      } else {
        alert("Erro ao gerar o certificado. Por favor, tente novamente.");
      }
    } else {
      alert("O participante não está presente no evento.");
    }
  };

  const handleDownloadCertificado = () => {
    if (certificadoGerado) {
      const caminhoCertificado = `certificado_${participante.nome}.pdf`;
      certificadoGerado.save(caminhoCertificado);
      alert("Certificado gerado com sucesso!");
    } else {
      alert("Nenhum certificado foi gerado.");
    }
  };

  return (
    <>
      <Box sx={{ flex: 1, width: "100%" }}>
        <Box
          sx={{
            position: "sticky",
            top: { sm: -100, md: -110 },
            bgcolor: "background.body",
            zIndex: 9995,
          }}
        ></Box>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Card
            sx={{
              padding: 3,
              maxWidth: 600,
              width: "100%",
              textAlign: "center",
            }}
          >
            <Typography level="h2" component="h1" gutterBottom>
              Certificado
            </Typography>
            <Input
              type="text"
              placeholder="Digite seu nome"
              value={participante.nome}
              onChange={(e) =>
                setParticipante({ ...participante, nome: e.target.value })
              }
              size="md"
              variant="soft"
              sx={{
                marginBottom: 2,
                textAlign: "center",
              }}
            />

            <Button
              onClick={handleParticipacao}
              size="md"
              variant="soft"
              color="primary"
              sx={{ marginBottom: 1 }}
            >
              Registrar Participação
            </Button>
            <Button
              onClick={handleGerarCertificado}
              size="md"
              variant="soft"
              color="primary"
            >
              Gerar Certificado
            </Button>
            <Button
              onClick={handleDownloadCertificado}
              size="md"
              variant="soft"
              color="primary"
              disabled={!certificadoGerado}
            >
              Download Certificado
            </Button>
            {certificadoGerado && (
              <Typography sx={{ marginTop: 2 }}>
                Certificado gerado para {participante.nome}
              </Typography>
            )}
          </Card>
        </div>
      </Box>
    </>
  );
};

export default Disposition;

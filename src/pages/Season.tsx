import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { contentData } from '../data/content';

function Season() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const season = contentData.find((item) => item.id === Number(id));
  const [pageIndex, setPageIndex] = useState(0);

  if (!season || season.pages.length === 0) {
    return <p className="text-center mt-5">Página não encontrada.</p>;
  }

  const currentPage = season.pages[pageIndex];
  if (!currentPage) return null;

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 fw-bold">{season.name}</h2>
      <Row className="align-items-center">
        <Col md={6}>
          <img src={new URL(currentPage.img, import.meta.url).href} alt={`Página ${pageIndex + 1}`} className="img-fluid rounded shadow" />
        </Col>
        <Col md={6}><p className="lead">{currentPage.text}</p></Col>
      </Row>
      <div className="d-flex justify-content-between mt-4">
        <Button variant="secondary" onClick={() => setPageIndex((index) => Math.max(0, index - 1))} disabled={pageIndex === 0}>← Página anterior</Button>
        <Button variant="dark" onClick={() => setPageIndex((index) => Math.min(season.pages.length - 1, index + 1))} disabled={pageIndex === season.pages.length - 1}>Próxima página →</Button>
      </div>
      <div className="text-center mt-3"><small>Página {pageIndex + 1} de {season.pages.length}</small></div>
      <div className="text-center mt-4"><Button variant="outline-dark" onClick={() => navigate('/')}>Voltar</Button></div>
    </Container>
  );
}

export default Season;

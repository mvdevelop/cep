import { useLocation, Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { contentData } from '../data/content';
function ContentItem() {
  const search = new URLSearchParams(useLocation().search).get('q')?.toLowerCase() ?? '';
  const results = contentData.filter((item) => item.name.toLowerCase().includes(search) || item.description.toLowerCase().includes(search));

  return (
    <Container className="py-4">
      <h2 className="fw-bold mb-4">Resultados para: &quot;{search}&quot;</h2>
      {results.length === 0 && <p className="text-secondary">Nenhum conteúdo encontrado.</p>}
      <Row className="g-4">
        {results.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={3}>
            <Card className="shadow-sm">
              <Link to={`/season/${item.id}`} className="text-decoration-none text-dark">
                <Card.Img src={new URL(`../assets/img/${item['image-01']}`, import.meta.url).href} style={{ height: 200, objectFit: 'cover' }} alt={item.name} />
                <Card.Body><Card.Title>{item.name}</Card.Title><Card.Text className="text-secondary small">{item.description.slice(0, 80)}...</Card.Text></Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ContentItem;

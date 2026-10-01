import { Container, Row, Col, Card } from 'react-bootstrap';

const curiosities = [
  ['A Origem da Escrita', 'A primeira forma de escrita conhecida surgiu há mais de 5 mil anos, na Mesopotâmia.'],
  ['A Invenção do Zero', 'O número zero é essencial na matemática moderna.'],
  ['O Primeiro Livro Impresso', 'A prensa de Gutenberg revolucionou o acesso ao conhecimento.'],
] as const;

export default function Extra() {
  return (
    <div className="extra-page bg-dark text-light py-5" id="extra">
      <Container>
        <header className="text-center mb-5">
          <h1 className="display-5 fw-bold">Curiosidades do Mundo Escolar</h1>
          <p className="text-secondary">Fatos históricos, descobertas científicas e momentos marcantes que transformaram a educação e o conhecimento humano.</p>
        </header>
        <Row className="align-items-center mb-5">
          <Col md={6}><img src="/banner.jpg" alt="História da Educação" className="img-fluid rounded shadow" loading="lazy" width="900" height="400" /></Col>
          <Col md={6}><h2 className="fw-bold mb-3">A Evolução da Educação</h2><p>Desde as primeiras formas de escrita até as escolas modernas, a educação passou por transformações que moldaram a forma como aprendemos hoje.</p><p>O objetivo permanece preparar pessoas para compreender o mundo e abrir portas para novas oportunidades.</p></Col>
        </Row>
        <Row className="align-items-center flex-md-row-reverse mb-5">
          <Col md={6}><img src="/banner2.jpg" alt="Grandes Descobertas" className="img-fluid rounded shadow" loading="lazy" width="900" height="400" /></Col>
          <Col md={6}><h2 className="fw-bold mb-3">Grandes Descobertas que Mudaram o Mundo</h2><p>A história da ciência é marcada por descobertas que revolucionaram o conhecimento humano.</p></Col>
        </Row>
        <section className="my-5" aria-labelledby="curiosities-title">
          <h2 id="curiosities-title" className="text-center fw-bold mb-4">Curiosidades Rápidas</h2>
          <Row>{curiosities.map(([title, text]) => <Col md={4} className="mb-4" key={title}><Card bg="secondary" text="light" className="h-100 shadow-sm"><Card.Body><Card.Title>{title}</Card.Title><Card.Text>{text}</Card.Text></Card.Body></Card></Col>)}</Row>
        </section>
      </Container>
    </div>
  );
}

import { useEffect, useState, type FormEvent, type ChangeEvent } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

interface Comment { id: number; text: string; date: string; }

function readComments(): Comment[] {
  try {
    const saved = localStorage.getItem('elo_comments');
    if (!saved) return [];
    const parsed: unknown = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is Comment => typeof item === 'object' && item !== null && typeof item.id === 'number' && typeof item.text === 'string' && typeof item.date === 'string');
  } catch { return []; }
}

export default function Coments() {
  const [comments, setComments] = useState<Comment[]>(readComments);
  const [newComment, setNewComment] = useState('');
  useEffect(() => { localStorage.setItem('elo_comments', JSON.stringify(comments)); }, [comments]);
  const handleAddComment = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); const text = newComment.trim(); if (!text) return; setComments((current) => [{ id: Date.now(), text, date: new Date().toLocaleString('pt-BR') }, ...current]); setNewComment(''); };
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => setNewComment(event.target.value);
  return <section className="bg-light py-5"><Container><h2 className="text-center mb-4 fw-bold">Fórum dos Usuários 💬</h2><Form onSubmit={handleAddComment} className="mb-4"><Row className="justify-content-center"><Col md={8}><Form.Control as="textarea" rows={3} placeholder="Compartilhe sua opinião sobre sua experiência com a CEP..." value={newComment} onChange={handleChange} /></Col><Col md="auto" className="mt-3 mt-md-0"><Button type="submit" variant="dark">Publicar</Button></Col></Row></Form><Row className="justify-content-center"><Col md={10}>{comments.length === 0 ? <p className="text-center text-secondary">Nenhum comentário ainda. Seja o primeiro a participar!</p> : comments.map((comment) => <Card key={comment.id} className="mb-3 shadow-sm border-0"><Card.Body><Card.Text>{comment.text}</Card.Text><small className="text-secondary">{comment.date}</small></Card.Body></Card>)}</Col></Row></Container></section>;
}

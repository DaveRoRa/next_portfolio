import { Container } from '@chakra-ui/react';
import Article from '../components/layout/Article';

const techMasteredList = [
  'HTML, JavaScript y CSS en sus últimas versiones',
  'Liberías usadas en la generación de páginas estáticas como JQuery y HandleBars',
  'React (incluyendo hooks y programación funcional)',
  'Liberías de componentes como Material Ui, Grommet, Reactstrap y Chakra UI',
  'Librerías de estilo como Tailwind Css y Styled-Components',
  'Comunicación con APIs basada tanto en arquitectura REST como GraphQL',
  'Manejo de estado global con Redux'
];

const techBasicList = ['NextJS', 'Express', 'Strapi'];

const plusList = [
  'Dominio Flujo de Trabajo Git',
  'Conocimientos en Eslint y Prettier',
  'Inglés comunicacional fluido',
  'Alta empatía y trabajo en equipo',
  'Amante de la reutilización y limpieza de código',
  'Conocimientos en programación de Lenguaje Ensamblador',
  'Programación en Arduino'
];

const SkillsPage = () => {

  return (
    <Article>
      <Container></Container>
    </Article>
  );
};

export default SkillsPage;

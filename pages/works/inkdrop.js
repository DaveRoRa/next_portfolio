import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, Meta, WorkImage } from '../../components/Work';
import { Paragraph } from '../../components/Section';
import Article from '../../components/layout/Article';

const Works = () => (
  <Article title='Inkdrop'>
    <Container>
      <Title>
        Inkdrop <Badge>2016-</Badge>
      </Title>
      <Paragraph>A thing there</Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://www.google.com'>
            google.com <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Electron, React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link
            href={
              'https://blog.inkdrop.app/how-' +
              'ive-attracted-the-first-500-paid-users-for-' +
              'my-saas-that-costs-5-mo-7a5b94b8e820'
            }>
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs $5/mo{' '}
            <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
      </List>
      <WorkImage alt='Cosa ahí' src={'/images/pokemon-scarlet-violet-pawmi.webp'} />
    </Container>
  </Article>
);

export default Works;

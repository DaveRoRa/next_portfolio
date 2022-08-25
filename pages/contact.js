import { memo } from 'react';
import {
  Container,
  Heading,
  Icon,
  Box,
  Grid,
  GridItem,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';
import useTranslation from '../hooks/useTranslation';
import Article from '../components/layout/Article';

const ColoredIcon = ({ ...props }) => {
  return <SocialIcon bgColor={useColorModeValue('#B83280', 'white')} {...props} />;
};

const SocialList = () => {
  const isDark = useColorModeValue(false, true);
  const colorLink = isDark ? 'black' : 'pink.600';
  const textShadow =
    isDark && '-1px 0 1px white, 0 1px 1px white, 1px 0 1px white, 0 -1px 1px white';
  return (
    <Box width='100%' mt={3} color={colorLink} fontWeight={500}>
      <Grid gap={3}>
        <GridItem>
          <Icon as={ColoredIcon} network='whatsapp' mr={3} />
          <Link
            textShadow={textShadow}
            p={2}
            href='https://wa.me/+5358207246'
            target='_blank'>
            Whatsapp: +53 58207246
          </Link>
        </GridItem>
        <GridItem>
          <Icon as={ColoredIcon} network='telegram' mr={3} />
          <Link
            textShadow={textShadow}
            p={2}
            href='https://t.me/boostlearning95'
            target='_blank'>
            Telegram: @boostlearning95
          </Link>
        </GridItem>
      </Grid>
    </Box>
  );
};

function ContactPage() {
  const { t } = useTranslation('contact');

  return (
    <Article>
      <Container>
        <Heading as='h3' align='center' fontSize={20} mb={4}>
          {t('common:contact')}
        </Heading>
        <SocialList />
      </Container>
    </Article>
  );
}

export default memo(ContactPage);

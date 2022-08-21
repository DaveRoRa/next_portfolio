import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ExternalLink = ({ href, children }) => (
  <Link href={href} target="_blank">
    {children} <ExternalLinkIcon mx='2px' />
  </Link>
);

export default ExternalLink;

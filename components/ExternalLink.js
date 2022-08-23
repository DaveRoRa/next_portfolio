import { Link, useColorModeValue } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ExternalLink = ({ href, children }) => {
  const isDark = useColorModeValue(false, true);
  return (
    <Link
      overflow='hidden'
      whiteSpace='nowrap'
      fontWeight={500}
      color={isDark ? 'black' : 'pink.600'}
      href={href}
      textShadow={
        isDark && '-1px 0 1px white, 0 1px 1px white, 1px 0 1px white, 0 -1px 1px white'
      }
      target='_blank'>
      {children} <ExternalLinkIcon color={isDark && 'white'} mx='2px' />
    </Link>
  );
};

export default ExternalLink;

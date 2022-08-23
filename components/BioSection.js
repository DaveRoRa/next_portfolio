import IconList from '../components/IconList';
import useTranslation from '../hooks/useTranslation';

const BioSection = () => {
  const { t } = useTranslation('home');
  const bioMessages = [t('key1'), t('key2'), t('key3'), t('key4')];
  return <IconList list={bioMessages} />;
};

export default BioSection;

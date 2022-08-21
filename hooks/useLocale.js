import { useRouter } from 'next/router';
import en from '../locales/en';
import es from '../locales/es';

const useLocale = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : es;
  return t;
};

export default useLocale;

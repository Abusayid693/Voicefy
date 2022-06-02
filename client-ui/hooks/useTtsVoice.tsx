import {useToast} from '@chakra-ui/react';
import {useState} from 'react';
import {ttsVoiceService} from '../services/RestAPI';

interface Idata {
  statusCode: number;
  url: string;
  language: string;
  gender: string;
  service: string;
  voiceId: string;
}
const cache = new Map();

const useTtsVoice = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Idata>();
  const toast = useToast();

  const convertTextToAudio = async (form: any) => {
    const key = JSON.stringify(form);
    if (cache.has(key)) {
      setData(cache.get(key));
      return;
    }
    setLoading(true);
    try {
      const res = await ttsVoiceService(form);
      setData(res);
      cache.set(key, res);
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error',
        description: 'Something went wrong with our server, try again later.',
        status: 'error',
        duration: 2000,
        isClosable: true
      });
    }
    setLoading(false);
  };

  const resetCachedData = () => setData(undefined);

  return {data, resetCachedData, loading, convertTextToAudio};
};

export default useTtsVoice;

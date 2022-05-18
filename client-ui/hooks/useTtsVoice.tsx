import {useToast} from '@chakra-ui/react';
import {useState} from 'react';
import {ttsVoiceService} from '../services/RestAPI';

const initialState = {
  statusCode: null,
  url: null
};
const cache = new Map();

const useTtsVoice = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialState);
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

  const resetCachedData = () => setData(initialState);

  return {data, resetCachedData, loading, convertTextToAudio};
};

export default useTtsVoice;

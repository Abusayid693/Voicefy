import axios from 'axios';

export const uploadFileToS3 = async (data: any) => {
  try {
    const res = await axios.post('http://localhost:4000/upload', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(res);
    return res;
  } catch (error) {}
};

export const ttsVoiceService = async (form: any) => {
  try {
    const {data} = await axios.post('http://localhost:4000/tts', form, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(data);
    return data;
  } catch (error) {
    throw new Error()
  }
};

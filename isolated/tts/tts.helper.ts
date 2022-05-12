export const getParamsObjectForPolly = (input: any) => {
  return {
    Text: input.ssmlText,
    OutputFormat: 'mp3',
    VoiceId: input.VoiceId,
    LanguageCode: input.lan
  };
};

export const getParamsObjectForIbmWatson = (input: any) => {
  return {
    text: input.ssmlText,
    accept: 'audio/wav',
    voice: 'en-US_AllisonV3Voice' // input.VoiceId
  };
};

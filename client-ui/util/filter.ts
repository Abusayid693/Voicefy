export const filterDataUsingSet = (formData: any, mappingKey: string) => {
  const items =
    formData !== null
      ? [...new Set(formData.map((item: any) => item[mappingKey]))]
      : [];

  return items;
};

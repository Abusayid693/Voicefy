import {FieldError} from '../generated/graphql';

export const saveUserInLocalStorage = (data: {token: string; user: any}) => {
  const {token, user} = data;
  localStorage.setItem('token', token);
  localStorage.setItem('currentUser', JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('currentUser');
};

export const filterDataUsingSet = (formData: any, mappingKey: string) => {
  const items =
    formData !== null
      ? [...new Set(formData.map((item: any) => item[mappingKey]))]
      : [];

  return items;
};

export const ErrorFormat = (erors: FieldError[]) => {
  const errors: Record<string, string> = {};
  erors.map(({field, message}) => (errors[field] = message));
  return errors;
};

export const isAnyNull = (obj: Record<string, any>): boolean => {
  for (const key in obj) if (obj[key] === null || undefined) return true;
  return false;
};

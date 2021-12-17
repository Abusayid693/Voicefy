import { FieldError } from "../generated/graphql";

// interface props {
//     field:string;
//     message:string;
// }


export const ErrorFormat = (erors: FieldError[]) => {
  // Record<K,V> is shorthand of saying all properties of object
  // will have key of type `K` and value of type `V`
  const errors: Record<string, string> = {};
  erors.map(({ field, message }) => (errors[field] = message));
  return errors;
};

// this function helps with a type issue due to Object.keys
export function getObjectKeys<O extends object>(obj: O): Array<keyof O> {
  return Object.keys(obj) as Array<keyof O>;
}

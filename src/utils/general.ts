/* eslint-disable @typescript-eslint/no-explicit-any */

export const objectIsEmpty = (obj: Record<string, any>): boolean => !Object.keys(obj).length;

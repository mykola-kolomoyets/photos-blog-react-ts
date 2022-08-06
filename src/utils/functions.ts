export const sliceString = (str: string, limit?: number) => `${str.slice(0, limit || 10)}...`;

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
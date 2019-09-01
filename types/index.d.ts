declare module '*.png';
declare module '*.jpg';
declare module '*.json';

type Diff<T extends string, U extends string> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T];

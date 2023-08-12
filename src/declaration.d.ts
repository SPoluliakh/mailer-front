/// <reference types="react-scripts" />

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module 'react-ellipsis-text';

declare module 'react-simple-star-rating';

declare module 'redux-persist/integration/react' {
  export const PersistGate: any; // Используйте более точные типы, если возможно
}

// declare module '*.css' ('*.scss') {
//   const content: Record<string, string>;
//   export default content;
// }

// declare module '*.svg' {
//   const src: string;
//   export default src;
// }

// declare module '*.gif' {
//   const src: string;
//   export default src;
// }

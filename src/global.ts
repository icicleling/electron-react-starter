export {};
declare global {
  interface Window {
    electron: {
      closeApp: () => void;
    };
  }
}

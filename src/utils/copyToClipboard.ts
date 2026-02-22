export const copyToClipBoard = async (text: string, callBack: () => void) => {
  try {
    await navigator.clipboard.writeText(text);
    callBack();
  } catch {
    console.error("Copy failed");
  }
};

copyToClipBoard.displayName = "copyToClipboard";

export default copyToClipBoard;

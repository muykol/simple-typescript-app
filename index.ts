export default function isChanon (str: string): boolean {
    if (typeof str !== "string") return false;
    return str.trim().toLowerCase() === "chanon";
  };
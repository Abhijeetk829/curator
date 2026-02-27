import { mkdir, rm } from "node:fs/promises";

export async function emptyDirectory(directoryPath) {
  try {
    // Delete the directory and all its contents recursively
    await rm(directoryPath, { recursive: true, force: true });
    console.log(`Removed directory and its contents: ${directoryPath}`);

    // Recreate the directory
    await mkdir(directoryPath);
    console.log(`Recreated empty directory: ${directoryPath}`);
  } catch (err) {
    console.error(`Error emptying directory: ${err}`);
  }
}

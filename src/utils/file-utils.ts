import fs from "fs/promises";
import path from "path";

const rootDir = path.resolve(process.cwd());

export const getDataDir = (customDir: string = ""): string => {
  const srcDir = path.resolve(rootDir, "src");
  return path.resolve(srcDir, customDir);
};

export const ensureDirectoryExists = async (customDir: string) => {
  const dirPath = getDataDir(customDir);
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (error) {
    console.error(`❌ Error Creating Directory: ${error}`);
  }
};

export const doesFileExist = async (
  customDir: string,
  filename: string
): Promise<boolean> => {
  try {
    const filePath = path.join(getDataDir(customDir), filename);
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

export const getFilePath = (customDir: string, filename: string): string => {
  return path.join(getDataDir(customDir), filename);
};

export const readJsonFile = async <T>(
  customDir: string,
  filename: string
): Promise<T | null> => {
  try {
    const filePath = getFilePath(customDir, filename);
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data) as T;
  } catch (error) {
    console.error(`❌ Error Reading JSON File: ${error}`);
    return null;
  }
};

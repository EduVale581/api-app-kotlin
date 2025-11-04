import { randomUUID } from "crypto";
import fs from "fs";
import path from "path";
import type { MultipartFile } from "@fastify/multipart";

const UPLOAD_DIR = path.join(process.cwd(), "uploads");

export async function saveFile(file: MultipartFile, req: any): Promise<string> {
  const filename = `${randomUUID()}-${file.filename}`;
  const filepath = path.join(UPLOAD_DIR, filename);
  const buffer = await file.toBuffer();

  await fs.promises.writeFile(filepath, buffer);

  const fileUrl = `${req.protocol}://${req.hostname}/files/${filename}`;
  return fileUrl;
}

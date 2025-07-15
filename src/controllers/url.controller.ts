import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { generateShortCode } from "../utils/generateCode";

const prisma = new PrismaClient();

export const createShortURL = async (req: Request, res: Response) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "URL is required" });

  let shortCode = generateShortCode();
  while (await prisma.shortURL.findUnique({ where: { shortCode } })) {
    shortCode = generateShortCode();
  }

  const created = await prisma.shortURL.create({
    data: { url, shortCode },
  });

  res.status(201).json(created);
};

export const getOriginalURL = async (req: Request, res: Response) => {
  const { shortCode } = req.params;
  const found = await prisma.shortURL.findUnique({ where: { shortCode } });

  if (!found) return res.status(404).json({ error: "Short URL not found" });

  await prisma.shortURL.update({
    where: { shortCode },
    data: { accessCount: { increment: 1 } },
  });

  res.status(200).json(found);
};

export const updateShortURL = async (req: Request, res: Response) => {
  const { shortCode } = req.params;
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: "URL is required" });

  try {
    const updated = await prisma.shortURL.update({
      where: { shortCode },
      data: { url },
    });
    res.status(200).json(updated);
  } catch {
    res.status(404).json({ error: "Short URL not found" });
  }
};

export const deleteShortURL = async (req: Request, res: Response) => {
  const { shortCode } = req.params;

  try {
    await prisma.shortURL.delete({ where: { shortCode } });
    res.status(204).send();
  } catch {
    res.status(404).json({ error: "Short URL not found" });
  }
};

export const getURLStats = async (req: Request, res: Response) => {
  const { shortCode } = req.params;
  const found = await prisma.shortURL.findUnique({ where: { shortCode } });

  if (!found) return res.status(404).json({ error: "Short URL not found" });

  res.status(200).json(found);
};
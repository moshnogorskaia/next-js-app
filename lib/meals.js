import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'fs';
import { S3 } from '@aws-sdk/client-s3';

const s3 = new S3({
  region: 'eu-north-1',
});

const db = sql('meals.db');

export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 2000));

  // throw new Error('Failed to fetch meals');
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  const slug = slugify(meal.title, { lower: true });
  const instructions = xss(meal.instructions);

  const imgExtention = meal.image.name.split('.').pop();
  const fileName = `${slug}.${imgExtention}`;
  const bufferedImage = await meal.image.arrayBuffer();

  s3.putObject({
    Bucket: 'moshnogorskaia-next-js-user-images',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  db
    .prepare('INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) VALUES (?, ?, ?, ?, ?, ?, ?)')
    .run(slug, meal.title, fileName, meal.summary, instructions, meal.name, meal.email);
}

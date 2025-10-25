'use server';

import { saveMeal } from '@/lib/meals';

export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    name: formData.get('name'),
    email: formData.get('email'),
  }

  await saveMeal(meal);
}

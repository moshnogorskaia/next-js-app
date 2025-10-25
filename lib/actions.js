'use server';

import { saveMeal } from '@/lib/meals';
import { redirect } from 'next/navigation';

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
  redirect('/meals');
}

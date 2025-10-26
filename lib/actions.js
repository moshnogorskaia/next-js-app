"use server";

import { saveMeal } from "@/lib/meals";
import { redirect } from "next/navigation";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    name: formData.get("name"),
    email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.name) ||
    isInvalidText(meal.email) ||
    !meal.email.includes('@') ||
    !meal.image ||
    meal.image.size === 0 
  ) {
    return {
      message: 'Invalid form data',
    };
  }

  await saveMeal(meal);
  redirect("/meals");
}

import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

export const metadata = {
  title: 'All Meals',
  description: 'All meals, shared by a food-loving community.',
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return <>
  <header className={classes.header}>
    <h1>
      Delicious meals, created{` `}
      <span className={classes.highlight}>by you</span>
    </h1>
    <p>Browse the meals created by our community - and add your own!</p>
    <p className={classes.cta}><Link href="/meals/share">Share your own meal</Link></p>
  </header>
  <main className={classes.main}>
    <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
      <Meals />
    </Suspense>
  </main>
  </>;
}

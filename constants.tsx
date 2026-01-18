
import React from 'react';
import { Recipe, CookingEvent, Resource } from './types';

export const FEATURED_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Sun-Dried Tomato Pesto Pasta',
    author: 'Chef Isabella',
    category: 'Main Course',
    cuisine: 'Italian',
    difficulty: 'Easy',
    dietary: ['Vegetarian'],
    image: 'https://picsum.photos/seed/pasta/800/600',
    description: 'A classic Italian delight with a modern twist of sun-dried tomatoes.'
  },
  {
    id: '2',
    title: 'Spicy Thai Green Curry',
    author: 'Chef Somsak',
    category: 'Main Course',
    cuisine: 'Thai',
    difficulty: 'Medium',
    dietary: ['Gluten-Free', 'Vegan'],
    image: 'https://picsum.photos/seed/curry/800/600',
    description: 'Authentic Thai flavors with fresh basil and coconut milk.'
  },
  {
    id: '3',
    title: 'Miso Glazed Salmon',
    author: 'Chef Kenji',
    category: 'Seafood',
    cuisine: 'Japanese',
    difficulty: 'Medium',
    dietary: ['Pescetarian'],
    image: 'https://picsum.photos/seed/salmon/800/600',
    description: 'Sweet and savory glaze perfectly caramelizing the fresh salmon fillet.'
  }
];

export const UPCOMING_EVENTS: CookingEvent[] = [
  {
    id: 'e1',
    title: 'Pastry Arts Workshop',
    date: 'Dec 15, 2024',
    description: 'Master the art of flaky croissants with our head pastry chef.',
    image: 'https://picsum.photos/seed/pastry/1200/400'
  },
  {
    id: 'e2',
    title: 'The Spice Route Masterclass',
    date: 'Jan 10, 2025',
    description: 'Explore the history and usage of exotic spices in modern cooking.',
    image: 'https://picsum.photos/seed/spice/1200/400'
  },
  {
    id: 'e3',
    title: 'Plant-Based Holiday Feast',
    date: 'Dec 22, 2024',
    description: 'Create a stunning 5-course vegan holiday meal.',
    image: 'https://picsum.photos/seed/vegan/1200/400'
  }
];

export const TEAM_MEMBERS = [
  { name: 'Sarah Miller', role: 'Founder & Head Chef', image: 'https://picsum.photos/seed/sarah/300/300' },
  { name: 'David Chen', role: 'Culinary Director', image: 'https://picsum.photos/seed/david/300/300' },
  { name: 'Elena Rodriguez', role: 'Community Manager', image: 'https://picsum.photos/seed/elena/300/300' }
];

export const EDUCATIONAL_RESOURCES: Resource[] = [
  {
    id: 'res1',
    title: 'Cooking with Solar Energy',
    type: 'Video',
    description: 'Learn how to harness the sun to bake bread and slow-cook meals.',
    thumbnail: 'https://picsum.photos/seed/solar/400/250'
  },
  {
    id: 'res2',
    title: 'Wind Power in Agriculture',
    type: 'Infographic',
    description: 'The impact of renewable wind energy on modern organic farming.',
    thumbnail: 'https://picsum.photos/seed/wind/400/250'
  },
  {
    id: 'res3',
    title: 'Sustainable Kitchen Design',
    type: 'PDF',
    description: 'Complete guide to building a zero-waste, energy-efficient kitchen.',
    thumbnail: 'https://picsum.photos/seed/green/400/250'
  }
];

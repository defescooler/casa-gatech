import Link from 'next/link';
import { ArrowLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { recipes } from '@/lib/data';

export default function RecipesPage() {
    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Easy':
                return 'bg-green-100 text-green-800';
            case 'Medium':
                return 'bg-green-100 text-green-800';
            case 'Hard':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className='container flex min-h-screen flex-col py-12'>
            <Link
                href='/'
                className='mb-8 flex items-center text-sm text-muted-foreground hover:text-foreground'
            >
                <ArrowLeft className='mr-2 h-4 w-4' />
                Back to Home
            </Link>
            <div className='mb-8'>
                <h1 className='text-3xl font-bold tracking-tight'>
                    Central Asian Recipes
                </h1>
                <p className='mt-2 text-muted-foreground'>
                    Discover the rich culinary traditions of Central Asia with
                    these authentic recipes passed down through generations.
                </p>
            </div>
            <div className='grid gap-8'>
                {recipes.map((recipe) => (
                    <Card key={recipe.id} className='overflow-hidden'>
                        <div className='grid gap-6 md:grid-cols-3'>
                            <div className='aspect-square w-full overflow-hidden md:aspect-auto'>
                                <img
                                    src={recipe.image || '/placeholder.svg'}
                                    alt={recipe.name}
                                    className='h-full w-full object-cover'
                                />
                            </div>
                            <div className='md:col-span-2'>
                                <CardHeader>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <CardTitle className='text-2xl'>
                                                {recipe.name}
                                            </CardTitle>
                                            <CardDescription className='text-base'>
                                                {recipe.country}
                                            </CardDescription>
                                        </div>
                                        <Badge
                                            className={getDifficultyColor(
                                                recipe.difficulty
                                            )}
                                        >
                                            {recipe.difficulty}
                                        </Badge>
                                    </div>
                                    <p className='text-sm text-muted-foreground'>
                                        {recipe.description}
                                    </p>
                                    <div className='flex items-center gap-6 text-sm text-muted-foreground'>
                                        <div className='flex items-center gap-1'>
                                            <Clock className='h-4 w-4' />
                                            <span>Prep: {recipe.prepTime}</span>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <ChefHat className='h-4 w-4' />
                                            <span>Cook: {recipe.cookTime}</span>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <Users className='h-4 w-4' />
                                            <span>
                                                Serves: {recipe.servings}
                                            </span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className='grid gap-6 md:grid-cols-2'>
                                        <div>
                                            <h4 className='mb-3 font-semibold'>
                                                Ingredients
                                            </h4>
                                            <ul className='space-y-1 text-sm'>
                                                {recipe.ingredients.map(
                                                    (ingredient, index) => (
                                                        <li
                                                            key={index}
                                                            className='flex'
                                                        >
                                                            <span className='mr-2'>
                                                                •
                                                            </span>
                                                            <span>
                                                                {ingredient}
                                                            </span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className='mb-3 font-semibold'>
                                                Instructions
                                            </h4>
                                            <ol className='space-y-2 text-sm'>
                                                {recipe.instructions.map(
                                                    (instruction, index) => (
                                                        <li
                                                            key={index}
                                                            className='flex'
                                                        >
                                                            <span className='mr-3 font-medium text-primary'>
                                                                {index + 1}.
                                                            </span>
                                                            <span>
                                                                {instruction}
                                                            </span>
                                                        </li>
                                                    )
                                                )}
                                            </ol>
                                        </div>
                                    </div>
                                </CardContent>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Button } from '@/shared/ui/Button';
import { Badge } from '@/shared/ui/Badge';
import { Separator } from '@/shared/ui/Separator';
import { Card, CardContent } from '@/shared/ui/Card';
import { blogPosts } from '@/entities/blog/model/data';
import ReactMarkdown from 'react-markdown';

export const BlogPostPage = ({ params }: { params: { slug: string } }) => {
    // Find the blog post data based on the slug
    const post = blogPosts.find((post) => post.slug === params.slug) || {
        title: 'Feature-Sliced Design',
        date: 'Май 6, 2025',
        category: 'Руководства',
        image: '/placeholder.svg?height=400&width=800',
        excerpt: 'эволюция фронтенда для быстрых экспериментов',
        slug: 'feature-sliced-design',
    };

    // In a real application, you would fetch the blog post content based on the slug
    const content = ``;

    return (
        <div className="container px-4 py-12 md:px-6 md:py-24">
            <div className="flex flex-col space-y-8 max-w-3xl mx-auto">
                <Button variant="ghost" size="sm" className="w-fit" asChild>
                    <Link href="/blog">
                        <Icon icon="lucide:arrow-left" width="24" height="24" className="mr-2" />
                        Вернутся в блог
                    </Link>
                </Button>

                <div className="space-y-4">
                    <Badge>{post.category}</Badge>
                    <h1 className="text-4xl font-bold">{post.title}</h1>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                            <Icon icon="lucide:calendar" width="24" height="24" className="mr-1" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                            <Icon icon="lucide:clock" width="24" height="24" className="mr-1" />
                            <span>8 мин чтения</span>
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                    <Image
                        src={post.image || '/placeholder.svg'}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <article className="prose prose-gray dark:prose-invert max-w-none">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </article>

                <Separator />

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Похожие посты</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                            <CardContent className="p-4">
                                <Link href="/blog/responsive-design-principles" className="hover:underline">
                                    <h4 className="font-medium">Responsive Design Principles</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Key principles to follow when creating responsive web designs.
                                    </p>
                                </Link>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4">
                                <Link href="/blog/state-management-in-react" className="hover:underline">
                                    <h4 className="font-medium">State Management in React</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Comparing different state management solutions in React applications.
                                    </p>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

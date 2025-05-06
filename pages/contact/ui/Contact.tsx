import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Button } from '@/shared/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/Card';
import { ContactForm } from '@/widgets/contactForm/ui/ContactForm';

export const Contact = () => {
    return (
        <div className="container px-4 py-12 md:px-6 md:py-24">
            <div className="flex flex-col space-y-8 max-w-3xl mx-auto">
                <Button variant="ghost" size="sm" className="w-fit" asChild>
                    <Link href="/">
                        <Icon icon="lucide:arrow-left" width="24" height="24" className="mr-2" />
                        Вернутся на главную
                    </Link>
                </Button>

                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">Связаться</h1>
                    <p className="text-muted-foreground max-w-[700px]">
                        Есть вопросы ? Я открыт к общению и всегда рад помочь. Если у вас есть проект, который вы хотите
                        обсудить, или просто хотите пообщаться, не стесняйтесь обращаться ко мне.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Отправить сообщение</CardTitle>
                            <CardDescription>Опишите ваше предложение и я свяжусь с вами.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ContactForm />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Контактная информация</CardTitle>
                            <CardDescription>Альтернативный способ связаться.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <Icon icon="lucide:mail" width="24" height="24" className="mr-2" />
                                    <h3 className="font-medium">Email</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    <a href="mailto:hello@example.com" className="hover:underline">
                                        prstov.web@yandex.ru
                                    </a>
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <Icon icon="lucide:message-square" width="24" height="24" className="mr-2" />
                                    <h3 className="font-medium">Социальные сети</h3>
                                </div>
                                <div className="text-sm text-muted-foreground space-y-1">
                                    <p>
                                        <a
                                            href="https://twitter.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            Twitter
                                        </a>
                                    </p>
                                    <p>
                                        <a
                                            href="https://linkedin.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            LinkedIn
                                        </a>
                                    </p>
                                    <p>
                                        <a
                                            href="https://github.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            GitHub
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <p className="text-sm text-muted-foreground">Обычно отвечаю в течении 24-48 часов.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

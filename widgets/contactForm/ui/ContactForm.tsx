'use client';

import type React from 'react';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Label } from '@/shared/ui/Label';
import { Textarea } from '@/shared/ui/Textarea';
import { useToast } from '@/shared/hooks/useToast';

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Сообщение отправлено!',
      description: 'Спасибо, что обратились. Я скоро вам отвечу.',
    });

    setIsSubmitting(false);
    // Reset form
    // e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Имя</Label>
          <Input id="name" placeholder="Name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Тема</Label>
        <Input id="subject" placeholder="Subject" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Сообщение</Label>
        <Textarea id="message" placeholder="Message" rows={6} required />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>Отправка...</>
        ) : (
          <>
            Отправить сообщение
            <Icon icon="lucide:send" width="24" height="24" className="ml-2" />
          </>
        )}
      </Button>
    </form>
  );
}

import { signIn } from '@/auth';
import { Icon } from '@iconify/react';
import { Button } from '@/shared/ui/Button';
const SignIn: React.FC = () => {
    return (
        <form
            action={async () => {
                'use server';
                await signIn('github');
            }}
        >
            <Button type="submit" className="flex items-center gap-2 border border-input px-4 py-2">
                Вход <Icon icon="lucide:github" />
            </Button>
        </form>
    );
};

export { SignIn };

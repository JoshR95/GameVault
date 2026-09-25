import type { ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const APP_LOGO_SRC = '/images/gameVault1.png';
export const APP_LOGO_ALT = 'Game Vault';

export default function AppLogoIcon({
    className,
    ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            src={APP_LOGO_SRC}
            alt={APP_LOGO_ALT}
            className={cn('max-w-full object-contain', className)}
            {...props}
        />
    );
}

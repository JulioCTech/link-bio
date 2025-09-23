import type { ReactNode } from "react";

interface SocialProps {
    url: string;
    children: ReactNode
}

export function Social({ url, children }: SocialProps) {
    return (

        <a
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            className="transition-transform hover:scale-110"
        >
            {children}
        </a>


    )
}
import type {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: "Demonstration Application",
    description: "An application with a combination new to me tech (Next.js, React server components,  MUI Joy) and some old technology friends (React, Node, Oauth)",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}

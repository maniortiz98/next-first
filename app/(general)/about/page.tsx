import type { Metadata } from "next";

export const metadata:Metadata = {
 title: 'SEO about',
 description: 'SEO about',
 keywords: ['page about', 'mani', 'ortiz' ],
};

export default function AboutPa(){
    return (
        <>
        <main className="flex flex-col items-center p-20">
        <span>Hola mundo</span>
        <span>About page</span>
        </main>
        
        </>
    )
}
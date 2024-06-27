import { Metadata } from "next"

export default function SEOPage(){
    return (
        <div>
            <h1>SEO Page</h1>
        </div>
    )
}

export const metadata: Metadata = {
    title: 'SEO Page',
    description: 'SEO Page Description',
    keywords: ['SEO', 'Page'],
    openGraph: {
        title: 'SEO Page',
        description: 'SEO Page Description',
        type: 'website',
        siteName: 'SEO Page'
    }
}
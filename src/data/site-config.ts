export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Jose Miguel Tapias Mejia',
    subtitle: 'Python Developer',
    description: 'Personal portfolio and blog',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Experience',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        }

    ],
    footerNavLinks: [
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/jomitame'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jose-miguel-tapias-mejia-7b6159181/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/jomitame'
        }
    ],
    hero: {
        title: '',
        text: "I'm a software developer at Blessware, I have experience in web development with the **Python** programming language using **Django** and others framework like **Flask** and development of API Rest Full with **DjangoRestframework** and **FastAPI**. I characterize myself as a creative, persevering, orderly person, with a high sense of belonging and a willingness to change. Feel free to explore some of my coding endeavors on <a href='https://github.com/jomitame'>GitHub</a>.",
        image: {
            src: '/jose_tapias.png',
            alt: 'A person posing in front of a camera'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },

    postsPerPage: 5,
    projectsPerPage: 5
};

export default siteConfig;

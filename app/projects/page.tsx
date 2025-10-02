import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        title: 'Project to Quote System',
        description: 'Internal web app to manage opportunities, projects, and quotes. Migrated from jQuery to React + Laravel with Inertia.',
        image: '/images/p2q.png', // add file vào public/images/
        tech: ['Laravel', 'React', 'SQL Server', 'Inertia'],
        link: 'https://github.com/yourusername/p2q', // hoặc demo URL
    },
];

export default function ProjectsPage() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-12">
            <h1 className="mb-8 text-center text-4xl font-bold">Projects</h1>
            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                    <Card key={project.title} className="overflow-hidden">
                        <Image src={project.image} alt={project.title} width={800} height={400} className="h-48 w-full object-cover" />
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">{project.description}</p>
                            <div className="mb-4 flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <Badge key={t} variant="secondary">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                            <Link href={project.link} target="_blank" className="font-medium text-blue-600 hover:underline">
                                View Project →
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </main>
    );
}

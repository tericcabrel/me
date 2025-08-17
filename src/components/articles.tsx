import { Calendar, Clock, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { BlogPost } from '@/types';
import { formatDate, getReadingTime } from '@/utils/helpers';

const MAX_DESCRIPTION_LENGTH = 117;

export function Articles({ posts }: { posts: BlogPost[] }) {
  return (
    <section id="articles" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Latest Articles</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I love sharing what I learn. Here are some of my recent articles about web development, cloud computing, and
            software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 justify-items-center">
          {posts.map((post) => (
            <Card
              key={post.uuid}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 w-full max-w-[400px]">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={post.featureImage}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  width={398}
                  height={192}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {getReadingTime(post.plaintext ?? '')}
                  </div>
                </div>

                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={post.url ?? ''} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </Link>
                </CardTitle>

                <CardDescription className="text-foreground leading-relaxed line-clamp-3">
                  {post.plaintext?.slice(0, MAX_DESCRIPTION_LENGTH)}...
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button size="sm" asChild className="w-full">
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read More
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="https://blog.tericcabrel.com" target="_blank" rel="noopener noreferrer">
              View All Posts
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

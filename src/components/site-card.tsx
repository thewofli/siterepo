"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";

interface SiteCardProps {
  name: string;
  description: string;
  url: string;
  image: string;
  tags?: string[];
  delay?: number;
  className?: string;
}

export function SiteCard({ 
  name, 
  description, 
  url, 
  image, 
  tags, 
  delay = 0,
  className 
}: SiteCardProps) {
  return (
    <BlurFade delay={delay}>
      <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
        <Link href={url} target="_blank" rel="noopener noreferrer" className={cn("block cursor-pointer", className)}>
          <Image
            src={image}
            alt={name}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        </Link>
        <CardHeader className="px-2">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="mt-1 text-base">{name}</CardTitle>
              <Link href={url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
            <div className="hidden font-sans text-xs underline print:visible">
              {url.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
            <p className="font-sans text-xs text-muted-foreground">{description}</p>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-2">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="px-2 pb-2">
          <Link 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground hover:underline"
          >
            Visit site →
          </Link>
        </CardFooter>
      </Card>
    </BlurFade>
  );
}
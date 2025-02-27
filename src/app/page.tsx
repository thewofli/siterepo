import { SiteCard } from "@/components/site-card";
import { DATA } from "@/data/config.old";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Card } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";

const BLUR_FADE_DELAY = 0.04;

export default function Sites() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={DATA.name}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="sites">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Website Collection
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore our site repository
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A curated collection of websites and projects for quick reference. Each site showcases different design patterns and functionality.
                </p>
              </div>
            </div>
          </BlurFade>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.sites.map((site, id) => (
              // <SiteCard
              //   key={site.name}
              //   name={site.name}
              //   description={site.description}
              //   url={site.url}
              //   image={site.image}
              //   tags={site.tags}
              //   delay={BLUR_FADE_DELAY * 4 + id * 0.05}
              // />
              <BlurFade
                key={site.name}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={site.url}
                  key={site.name}
                  title={site.name}
                  description={site.description}
                  dates={site.dates}
                  tags={site.tags}
                  image={site.image}
                  video={site.video}
                  links={site.links}
                />
              </BlurFade>
            ))}
            
            <BlurFade delay={BLUR_FADE_DELAY * (4 + DATA.sites.length * 0.05)}>
              <Link href="https://github.com/thewofli/siterepo" className="flex h-full">
                <Card className="flex h-full w-full flex-col items-center justify-center rounded-lg border border-dashed p-10 text-center transition-colors hover:bg-muted/50">
                  <PlusCircle className="mb-4 h-10 w-10 text-muted-foreground" />
                  <h3 className="text-xl font-medium">Add a new site</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Update the config.ts file to add more sites to the repository
                  </p>
                </Card>
              </Link>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="documentation">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="rounded-lg bg-muted p-6">
            <h2 className="mb-4 text-2xl font-bold">How to add a new site</h2>
            <div className="space-y-4">
              <p>
                To add a new site to this repository, edit the <code className="rounded bg-muted-foreground/20 px-1.5 py-0.5">data/sites.ts</code> file and add a new entry to the sites array:
              </p>
              <pre className="overflow-x-auto rounded-lg bg-muted-foreground/10 p-4">
                <code>{`{
                    name: "Your Site Name",
                    description: "Brief description of your site",
                    url: "https://your-site-url.com",
                    image: "https://image-url.com/your-site-image.jpg",
                    tags: ["Tag1", "Tag2", "Tag3"]
                  }`}
                </code>
              </pre>
              <p>
                The site will automatically appear in the grid with all the information you provided.
              </p>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
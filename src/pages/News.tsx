import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { newsPosts } from "@/data/news";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// data imported from @/data/news

export default function News() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePostIndex, setActivePostIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (carouselApi && lightboxOpen) {
      carouselApi.scrollTo(activeImageIndex);
    }
  }, [carouselApi, lightboxOpen, activeImageIndex]);

  const activeImages = activePostIndex !== null ? newsPosts[activePostIndex].images : [];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold mb-3">News & Updates</h1>
        <p className="text-muted-foreground">
          short updates. like LinkedIn, but quieter. realistic, more my style.
        </p>
      </div>

      <div className="space-y-16">
        {newsPosts.map((post, index) => (
          <article key={index} className="border-b border-border pb-12 last:border-b-0">
            <time className="text-sm text-muted-foreground mb-3 block">{post.date}</time>
            
            <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
            
            <p
              className="text-muted-foreground leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: post.description }}
            />
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {post.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="aspect-video bg-muted rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer"
                  onClick={() => {
                    setActivePostIndex(index);
                    setActiveImageIndex(imgIndex);
                    setLightboxOpen(true);
                  }}
                >
                  <img
                    src={image}
                    alt={`${post.title} - Image ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl p-2">
          <div className="relative">
            <Carousel setApi={setCarouselApi} opts={{ loop: true }}>
              <CarouselContent>
                {activeImages.map((img, i) => (
                  <CarouselItem key={i}>
                    <div className="w-full h-[70vh] bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                      <img src={img} alt={`Image ${i + 1}`} className="max-w-full max-h-full object-contain" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

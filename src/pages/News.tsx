import { Badge } from "@/components/ui/badge";

interface NewsPost {
  date: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
}

const newsPosts: NewsPost[] = [
  {
    date: "OCT 31, 2025",
    title: "Speak.ai wins the Zurich Foundation Best Business Idea Award",
    description:
      "It has been a great pleasure to be pitching our business idea to the Zurich Foundations Building Resilient Futures World Tour. This competition allowed us to connect with a wide range of partners and investors in companies exiting all around the world. Getting feedback from all these experiences people was a highlight and I really am grateful seeing that my public speaking skills have significantly improved.",
    tags: ["Speak.ai", "competition", "Zurich Foundation"],
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559223607-a43f990f2b10?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
    ],
  },
  {
    date: "SEP 24, 2025",
    title: "Speak.ai wins the Sheraa Startup Dojo+ Competition",
    description:
      "We won Sheraa's startupdojo+ and received a 10,000 AED grant which we put it straight back into Speak.ai. The best part wasn't the money, it was the honest feedback on our product and how engaging the pitch felt.",
    tags: ["Speak.ai", "competition", "grant"],
    images: [
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    ],
  },
];

export default function News() {
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
            
            <p className="text-muted-foreground leading-relaxed mb-6">{post.description}</p>
            
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
    </div>
  );
}

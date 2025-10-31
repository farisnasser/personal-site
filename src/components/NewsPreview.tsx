import { Link } from "react-router-dom";

interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    date: "OCT 31, 2025",
    title: "Speak.ai wins the Zurich Foundation Best Business Idea Award",
    excerpt: "It has been a great pleasure to be pitching our business idea to the Zurich Foundations Building Resilient Futures World Tour...",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop",
  },
  {
    date: "SEP 24, 2025",
    title: "Speak.ai wins the Sheraa Startup Dojo+ Competition",
    excerpt: "We won Sheraa's startupdojo+ and received a 10,000 AED grant which we put it straight back into Speak.ai...",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=300&h=200&fit=crop",
  },
  {
    date: "AUG 31, 2025",
    title: "Wrapped up my Nestlé internship",
    excerpt: "Finished my Data Analytics & E-commerce internship at Nestlé. I got to work with big retail partners...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
  },
];

export const NewsPreview = () => {
  return (
    <aside className="hidden xl:block w-80 min-h-screen bg-background border-l border-border p-8">
      <div className="mb-6">
        <Link to="/news" className="text-accent hover:underline">
          <h2 className="text-xl font-semibold mb-2">News</h2>
        </Link>
      </div>

      <div className="space-y-6">
        {newsItems.map((item, index) => (
          <article key={index} className="group cursor-pointer">
            <time className="text-xs text-muted-foreground mb-2 block">{item.date}</time>
            
            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <h3 className="text-sm font-semibold mb-2 group-hover:text-accent transition-colors">
              {item.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
              {item.excerpt}
            </p>
          </article>
        ))}
      </div>
    </aside>
  );
};

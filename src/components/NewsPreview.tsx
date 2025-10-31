import { Link } from "react-router-dom";

interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
}

const newsItems: NewsItem[] = [
  {
    date: "OCT 31, 2025",
    title: "Speak.ai wins the Zurich Foundation Best Business Idea Award",
    excerpt: "It has been a great pleasure to be pitching our business idea to the Zurich Foundations Building Resilient Futures World Tour...",
  },
  {
    date: "SEP 24, 2025",
    title: "Speak.ai wins the Sheraa Startup Dojo+ Competition",
    excerpt: "We won Sheraa's startupdojo+ and received a 10,000 AED grant which we put it straight back into Speak.ai...",
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

      <div className="space-y-8">
        {newsItems.map((item, index) => (
          <article key={index} className="group">
            <time className="text-xs text-muted-foreground mb-2 block">{item.date}</time>
            <h3 className="text-sm font-semibold mb-2 group-hover:text-accent transition-colors">
              {item.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
              {item.excerpt}
            </p>
          </article>
        ))}
      </div>
    </aside>
  );
};

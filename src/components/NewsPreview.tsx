import { Link } from "react-router-dom";
import { newsPosts } from "@/data/news";

export const NewsPreview = () => {
  return (
    <aside className="hidden xl:block w-80 min-h-screen bg-background border-l border-border p-8">
      <div className="mb-6">
        <Link to="/news" className="text-accent hover:underline">
          <h2 className="text-xl font-semibold mb-2">News</h2>
        </Link>
      </div>

      <div className="space-y-6">
        {newsPosts.slice(0, 3).map((post, index) => {
          const image = (post.images && post.images[0]) || "/placeholder.svg";
          const excerpt = post.description;
          return (
          <article key={index} className="group cursor-pointer">
            <time className="text-xs text-muted-foreground mb-2 block">{post.date}</time>
            
            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-3">
              <img
                src={image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <h3 className="text-sm font-semibold mb-2 group-hover:text-accent transition-colors">
              {post.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
              {excerpt}
            </p>
          </article>
          );
        })}
      </div>
    </aside>
  );
};

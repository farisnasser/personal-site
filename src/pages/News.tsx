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
  {
    date: "AUG 31, 2025",
    title: "Wrapped up my Nestlé internship",
    description:
      "Finished my Data Analytics & E-commerce internship at Nestlé. I got to work with big retail partners (Amazon, Noon, Talabat) and see how small changes in content, pricing, and availability actually move numbers. Lots of practical lessons I'm taking into future projects.",
    tags: ["internship", "ecommerce", "data"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    ],
  },
  {
    date: "AUG 15, 2025",
    title: "2nd year as an RA at KL Men's Dorms",
    description:
      "Starting my second year as an RA. It's a simple thing, but showing up for freshmen and being a steady older-brother figure has been one of the most rewarding parts of my time at AUS.",
    tags: ["RA", "community"],
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    ],
  },
  {
    date: "JUL 31, 2025",
    title: "Completed my Indigo IT Consultancy internship",
    description:
      "Dived deep into modern cybersecurity: SIEM tooling, VAPT practices, and designing scalable enterprise networks (Cisco Packet Tracer). It sharpened my research habits and my hands-on thinking.",
    tags: ["internship", "cybersecurity"],
    images: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    ],
  },
  {
    date: "MAY 29, 2025",
    title: "Product of the Year — INJAZ UAE",
    description:
      "Speak.ai won Product of the Year at the INJAZ UAE National Competition. We presented in front of Ambassador Martina Strong. Big milestone, but more importantly, a humbling learning loop. I left energized and clearer about what to build next.",
    tags: ["Speak.ai", "competition", "milestone"],
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
    ],
  },
  {
    date: "APR 1, 2025",
    title: "KL Dorms — Hall of the Year",
    description:
      "KL won Hall of the Year at AUS's Student Appreciation Awards. Being an RA this past year truly evolved me in the best ways. I also started the first SRLD Run Club, 6 AM runs that somehow turned into a small disciplined community.",
    tags: ["RA", "community", "running"],
    images: [
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
    ],
  },
  {
    date: "JAN 1, 2025",
    title: "Summited Mount Kilimanjaro",
    description:
      "Personal one: I reached the summit of Kilimanjaro. 8 slow, cold days. The discipline i learned from this experience is something i carry into everything else. Work, routine, lifestyle, and more.",
    tags: ["personal", "outdoors"],
    images: [
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    ],
  },
  {
    date: "NOV 14, 2024",
    title: "Presented our Wi-Fi CSI paper at IEEE ICSPIS 2024",
    description:
      "Gave a talk on \"Fall Detection using Wi-Fi CSI\" with Dr. Kin Poon, Aisha Alteneiji, and Ahmed Soliman. Presenting the work made my research interests feel more real especially around machine learning applications. Find a link to the paper here",
    tags: ["publication", "talk"],
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop",
    ],
  },
  {
    date: "SEP 1, 2024",
    title: "Launched the Careers Club at AUS",
    description:
      "Founded the Careers Club at AUS to help students start early through workshops and a nudge to take careers seriously without killing curiosity. I'm a founding VP and proud of the community we're building. Find more on Careers Club at our instagram @careersclub.aus",
    tags: ["club", "leadership"],
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    ],
  },
  {
    date: "JUL 1, 2024",
    title: "Finished my EBTIC internship at Khalifa University",
    description:
      "Wrapped up a summer at EBTIC (Emirates ICT Innovation Center). It pushed my curiosity further and made grad school feel less like a plan and more like a path I actually want.",
    tags: ["internship", "research"],
    images: [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
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

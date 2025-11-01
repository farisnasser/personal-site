export interface NewsPost {
  date: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
}

export const newsPosts: NewsPost[] = [
  {
    date: "OCT 31, 2025",
    title: "Speak.ai wins the Zurich Foundation Best Business Idea Award",
    description:
      "It has been a great pleasure to be pitching our business idea to the Zurich Foundations Building Resilient Futures World Tour. This competition allowed us to connect with a wide range of partners and investors from companies all around the world. Getting feedback from all these experienced people was a highlight and I really am grateful seeing that my public speaking skills have significantly improved.",
    tags: ["Speak.ai", "competition", "Zurich Foundation"],
    images: [
      "/images/Zurich1.jpg",
      "/images/Zurich2.jpg",
      "/images/Zurich3.jpg",
      "/images/Zurich4.jpg",
      "/images/Zurich5.jpg",
      "/images/Zurich6.jpg",
    ],
  },
  {
    date: "SEP 24, 2025",
    title: "Speak.ai wins the Sheraa Startup Dojo+ Competition",
    description:
      "We won Sheraa's startupdojo+ and received a 10,000 AED grant which we put straight back into Speak.ai. The best part wasn't the money, it was the honest feedback on our product and how engaging the pitch felt.",
    tags: ["Speak.ai", "competition", "grant"],
    images: [
      "/images/StartupDojo_1.jpg",
      "/images/StartupDojo_2.jpg",
      "/images/StartupDojo_3.jpg",
    ],
  },
  {
    date: "AUG 31, 2025",
    title: "Wrapped up my Nestlé internship",
    description:
      "Finished my Data Analytics & E-commerce internship at Nestlé. I got to work with big retail partners (Amazon, Noon, Talabat) and see how small changes in content, pricing, and availability actually move numbers. Lots of practical lessons I'm taking into future projects.",
    tags: ["internship", "ecommerce", "data"],
    images: [
      "/images/nestle.jpg",
      "/images/nestle.png",
    ],
  },
  {
    date: "AUG 15, 2025",
    title: "2nd year as an RA at KL Men's Dorms",
    description:
      "Starting my second year as an RA. It has been a great way to support and build my own community by showing up for freshmen and being a steady older-brother figure. Safe to say that this has been one of the most rewarding parts of my time at AUS.",
    tags: ["RA", "community"],
    images: [
      "/images/RA pic1.jpg",
      "/images/RA pic2.jpg",
    ],
  },
  {
    date: "JUL 31, 2025",
    title: "Completed my Indigo IT Consultancy internship",
    description:
      "Dived deep into modern cybersecurity: SIEM tooling, VAPT practices, and designing scalable enterprise networks (Cisco Packet Tracer). It sharpened my research habits and my hands-on thinking.",
    tags: ["internship", "cybersecurity"],
    images: [
      "/images/Indigo1.jpg",
      "/images/Indigo Cert.png",
    ],
  },
  {
    date: "MAY 29, 2025",
    title: "Product of the Year — INJAZ UAE",
    description:
      "Speak.ai won Product of the Year at the INJAZ UAE National Competition. We presented in front of Ambassador Martina Strong. Big milestone, but more importantly, a humbling learning loop. I left energized and clearer about what to build next.",
    tags: ["Speak.ai", "competition", "milestone"],
    images: [
      "/images/Injaz1 (1).jpg",
      "/images/Injaz1 (2).jpg",
      "/images/Injaz1 (3).jpg",
      "/images/Injaz1 (4).jpg",
      "/images/Injaz1 (5).JPG",
      "/images/Injaz1 (6).JPG",
    ],  
  },
  {
    date: "APR 1, 2025",
    title: "KL Dorms — Hall of the Year",
    description:
      "KL won Hall of the Year at AUS's Student Appreciation Awards. Being an RA this past year truly evolved me in the best ways. I also started the first SRLD Run Club, 6 AM runs that somehow turned into a small disciplined community.",
    tags: ["RA", "community", "running"],
    images: [
      "/images/KL Award.jpg",
      "/images/Runclub.jpg",
       ],
  },
  {
    date: "JAN 1, 2025",
    title: "Summited Mount Kilimanjaro",
    description:
      "Personal one: I reached the summit of Kilimanjaro. 8 slow, cold days. The discipline i learned from this experience is something i carry into everything else. Work, routine, lifestyle, and more.",
    tags: ["personal", "outdoors"],
    images: [
      "/images/kili1.jpg",
      "/images/kili2.jpg",
      "/images/kili3.jpg",
      "/images/kili4.jpg",
      "/images/kili5.jpg",
    ],
  },
  {
    date: "NOV 14, 2024",
    title: "Presented our Wi-Fi CSI paper at IEEE ICSPIS 2024",
    description:
      "Gave a talk on \"Fall Detection using Wi-Fi CSI\" with Dr. Kin Poon, Aisha Alteneiji, and Ahmed Soliman. Presenting the work made my research interests feel more real especially around machine learning applications. Find a link to the paper <a href='https://ieeexplore.ieee.org/document/10812620'> here</a>",
    tags: ["publication", "talk"],
    images: [
      "/images/ICSPIS.jpg",
      "/images/ICSPIS cert.png",
    ],
  },
  {
    date: "SEP 1, 2024",
    title: "Launched the Careers Club at AUS",
    description:
      "Founded the Careers Club at AUS to help students start early through workshops and a nudge to take careers seriously without killing curiosity. I'm a founding VP and proud of the community we're building. Find more on Careers Club at our instagram <a href='https://www.instagram.com/careersclub.aus/'>@careersclub.aus</a>",
    tags: ["club", "leadership"],
    images: [
      "/images/careersclub.jpg",
      "/images/careersclub1.png",
    ],
  },
  {
    date: "JUL 1, 2024",
    title: "Finished my Research Internship in EBTIC at Khalifa University",
    description:
      "Wrapped up a summer at EBTIC (Emirates ICT Innovation Center). It pushed my curiosity further and made grad school feel less like a plan and more like a path I actually want. We wrote a paper which will be published in ICSPIS in November 2024.",
    tags: ["internship", "research"],
    images: [
      "/images/ebtic.png",
    ],
  },
];



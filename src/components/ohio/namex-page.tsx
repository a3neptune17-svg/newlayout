import Image from "next/image";
import { ohioPage } from "./client-config";

const collection = [
  { image: "namex-ceramic-kit.jpg", title: "Ceramic", alt: "NameX Ceramic Matrix presentation kit with bottle, applicator and cloth", href: "coatings-gallery", action: "Explore coatings" },
  { image: "namex-graphene-borophene-kit.jpg", title: "Graphene & Borophene", alt: "NameX Graphene and Borophene presentation kits", href: "coatings-gallery", action: "Compare the collections" },
  { image: "namex-bottles-trio.jpg", title: "The coating collection", alt: "NameX Ceramic, Graphene and Borophene bottles", href: "coatings-gallery", action: "Find your coating" },
  { image: "namex-ppf-boxes.jpg", title: "Paint protection film", alt: "NameX paint protection film packaging", href: "ppf", action: "Explore film protection" },
];

export function NamexPage() {
  return <section className="client-namex-collection" aria-label="NameX product collection">
    <p className="client-namex-collection-intro">Explore the NameX collection at Mr. Detailer. Discuss product suitability, application and care with the studio.</p>
    <div className="client-namex-collection-grid">{collection.map((item, index) => <article key={item.image}>
      <div className="client-namex-collection-photo"><Image src={`/images/${item.image}`} alt={item.alt} fill sizes="(max-width:768px) 100vw, 40vw" priority={index === 0} /></div>
      <div className="client-namex-collection-copy"><span>0{index + 1} / NAMEX</span><h2>{item.title}</h2><a href={ohioPage(item.href)}>{item.action} ↗</a></div>
    </article>)}</div>
  </section>;
}

import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;

  const posts: StartupTypeCard[] = [
    {
      _createdAt: new Date().toISOString(),
      views: 55,
      author: { 
        _id: 1, 
        name: "Adrian Hajdin", 
        image: "https://avatars.githubusercontent.com/u/31388656?v=4" 
      },
      _id: 1,
      description: "We Robots is building state-of-the-art robots to help you automate daily household chores.",
      image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=2010&auto=format&fit=crop",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createdAt: new Date().toISOString(),
      views: 120,
      author: { 
        _id: 2, 
        name: "Elon Musk", 
        image: "https://avatars.githubusercontent.com/u/1247012?v=4" 
      },
      _id: 2,
      description: "EcoVolt is developing high-efficiency solar battery backups for homes and grid scaling.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
      category: "Energy",
      title: "EcoVolt Energy",
    }
  ];

  return (
      <>
          <section className="pink_container">
              <h1 className= "heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>
              <p className="sub-heading !max-w-3xl">
                  Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
              </p>
                <SearchForm query={query} />
          </section>

          <section className="section_container">
              <p className="text-30-semibold">
                  {query ? `Search results for "${query}"` : 'All Startups'}
              </p>
              <ul className="mt-7 card_grid">
                  {posts.length > 0 ? (
                      posts.map((post) => (
                          <StartupCard key={post._id} post={post} />
                      ))
                  ) : (
                      <p className="no-result">No startups found</p>
                  )}
              </ul>
          </section>

      </>

  );
}

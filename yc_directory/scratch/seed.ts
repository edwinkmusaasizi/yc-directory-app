import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "d1frrxwj",
  dataset: "production",
  apiVersion: "2024-03-11",
  useCdn: false,
  token: "skopo9fNHytsLUQb5IfomHgXqpc7smQUlAbEDBnXTuf5n1XJfGknbWgKvNPwKCep6a2K0lp8GvPNf0hLMbz6o0EtXyliFaiDlspaHWhjqgIt6mRtwczWGv4Ds3xW5NaWuWWbsgeO5hblNs65XwxchcGuUwK7OaTu337rmD4N98LTb8LXHZKF"
});

async function seed() {
  console.log("🚀 Starting database seeding...");

  // 1. Create Mock Authors
  const elon = await client.createOrReplace({
    _type: "author",
    _id: "author-elon-musk",
    id: 1111111,
    name: "Elon Musk",
    username: "elonmusk",
    email: "elon@spacex.com",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150",
    bio: "Chief Engineer at SpaceX, Tesla, and xAI. Working to make life multi-planetary."
  });
  console.log("✓ Seeded Author: Elon Musk");

  const sam = await client.createOrReplace({
    _type: "author",
    _id: "author-sam-altman",
    id: 2222222,
    name: "Sam Altman",
    username: "sama",
    email: "sam@openai.com",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
    bio: "CEO of OpenAI. Building safe artificial general intelligence to benefit humanity."
  });
  console.log("✓ Seeded Author: Sam Altman");

  // 2. Create Startups
  await client.createOrReplace({
    _type: "startup",
    _id: "startup-spacex",
    title: "SpaceX Starlink",
    slug: { _type: "slug", current: "spacex-starlink" },
    author: { _type: "reference", _ref: elon._id },
    views: 125,
    description: "High-speed, low-latency satellite internet connection globally.",
    category: "Aerospace",
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800",
    pitch: `# High-Speed Global Internet

Starlink provides high-speed, low-latency broadband internet across the globe. With satellites in a low orbit, Starlink enables video calls, online gaming, streaming, and other high data rate activities that historically have not been possible with satellite internet.`
  });
  console.log("✓ Seeded Startup: SpaceX Starlink");

  await client.createOrReplace({
    _type: "startup",
    _id: "startup-xai",
    title: "xAI Grok",
    slug: { _type: "slug", current: "xai-grok" },
    author: { _type: "reference", _ref: elon._id },
    views: 89,
    description: "Real-time AI assistant with access to current events and information.",
    category: "AI",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
    pitch: `# Grok: AI with Real-Time Knowledge

xAI is building artificial intelligence to accelerate human scientific discovery. Grok is designed to answer questions with a bit of wit and has a rebellious streak, so please don't use it if you hate humor!`
  });
  console.log("✓ Seeded Startup: xAI Grok");

  await client.createOrReplace({
    _type: "startup",
    _id: "startup-openai",
    title: "OpenAI ChatGPT",
    slug: { _type: "slug", current: "openai-chatgpt" },
    author: { _type: "reference", _ref: sam._id },
    views: 520,
    description: "Chatbot powered by large language models to converse and help with tasks.",
    category: "AI",
    image: "https://images.unsplash.com/photo-1684369175833-8a675541e21b?w=800",
    pitch: `# ChatGPT: Conversational AI

ChatGPT is an AI-powered chatbot developed by OpenAI. It uses advanced machine learning models to generate human-like text responses to user prompts, code scripts, write essays, and analyze complex logical problems.`
  });
  console.log("✓ Seeded Startup: OpenAI ChatGPT");

  console.log("🎉 Seeding completed successfully!");
}

seed().catch(console.error);

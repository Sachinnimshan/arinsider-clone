// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const trendingData = [
  {
    title: "Can Virtual Tours Transform Real Estate?",
    image: "/images/trending1.webp",
  },
  {
    title: "7 Unexpected VR Use Cases",
    image: "/images/trending2.webp",
  },
  {
    title: "Snap Launches Ray Tracing in Lens Studio",
    image: "/images/trending3.webp",
  },
  {
    title: "Will the Metaverse Get Thrown in Buzzword Jail?",
    image: "/images/trending4.webp",
  },
];

export default function handler(req, res) {
  res.status(200).json({ data: trendingData });
}

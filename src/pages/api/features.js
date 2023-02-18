// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const featureData = [
  {
    title: "Snap Launches Ray Tracing in Lens Studio",
    image: "/images/feature1.webp",
  },
  {
    title: "A Field Guide to AI in the Metaverse",
    image: "/images/feature2.webp",
  },
  {
    title: "How Many VR Headsets Did Meta Sell in Q4",
    image: "/images/feature3.webp",
  },
];

export default function handler(req, res) {
  res.status(200).json({ data: featureData });
}

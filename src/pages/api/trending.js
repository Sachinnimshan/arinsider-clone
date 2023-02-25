// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const trendingData = [
  {
    id: 11,
    title: "Can Virtual Tours Transform Real Estate",
    image: "/images/trending1.webp",
    description:
      "Snap today rolled out the latest feature in its Lens Studio AR creation platform: ray tracing. For those unfamiliar, this offers a more advanced and realistic flavor of AR, including better color and light. By infusing it in Lens Studio, Snap continues its mission to democratize advanced AR. Going deeper on ray tracing, it’s often used in advanced digital production like console gaming. There, it creates realistic lighting that bounces off in-game digital elements. Applying it to AR can achieve a similar effect in that it can help digital objects have realistic light reflections. It does this by applying an algorithm to trace the path a beam of light would take in the physical world. Using this technique, a platform like Lens Studio can determine the source of light in a given environment, then simulate light direction and intensity for reflective properties.",
    author: "Sachin Nimshan",
    date: "",
  },
  {
    id: 12,
    title: "7 Unexpected VR Use Cases",
    image: "/images/trending2.webp",
    description:
      "Snap today rolled out the latest feature in its Lens Studio AR creation platform: ray tracing. For those unfamiliar, this offers a more advanced and realistic flavor of AR, including better color and light. By infusing it in Lens Studio, Snap continues its mission to democratize advanced AR. Going deeper on ray tracing, it’s often used in advanced digital production like console gaming. There, it creates realistic lighting that bounces off in-game digital elements. Applying it to AR can achieve a similar effect in that it can help digital objects have realistic light reflections. It does this by applying an algorithm to trace the path a beam of light would take in the physical world. Using this technique, a platform like Lens Studio can determine the source of light in a given environment, then simulate light direction and intensity for reflective properties.",
    author: "Sachin Nimshan",
    date: "",
    
  },
  {
    id: 13,
    title: "Snap Launches Ray Tracing in Lens Studio",
    image: "/images/trending3.webp",
    description:
      "Snap today rolled out the latest feature in its Lens Studio AR creation platform: ray tracing. For those unfamiliar, this offers a more advanced and realistic flavor of AR, including better color and light. By infusing it in Lens Studio, Snap continues its mission to democratize advanced AR. Going deeper on ray tracing, it’s often used in advanced digital production like console gaming. There, it creates realistic lighting that bounces off in-game digital elements. Applying it to AR can achieve a similar effect in that it can help digital objects have realistic light reflections. It does this by applying an algorithm to trace the path a beam of light would take in the physical world. Using this technique, a platform like Lens Studio can determine the source of light in a given environment, then simulate light direction and intensity for reflective properties.",
    author: "Sachin Nimshan",
    date: "",
  },
  {
    id: 14,
    title: "Spatial Beats: Apple, Snap & Sony",
    image: "/images/trending4.webp",
    description:
      "Snap today rolled out the latest feature in its Lens Studio AR creation platform: ray tracing. For those unfamiliar, this offers a more advanced and realistic flavor of AR, including better color and light. By infusing it in Lens Studio, Snap continues its mission to democratize advanced AR. Going deeper on ray tracing, it’s often used in advanced digital production like console gaming. There, it creates realistic lighting that bounces off in-game digital elements. Applying it to AR can achieve a similar effect in that it can help digital objects have realistic light reflections. It does this by applying an algorithm to trace the path a beam of light would take in the physical world. Using this technique, a platform like Lens Studio can determine the source of light in a given environment, then simulate light direction and intensity for reflective properties.",
    author: "Sachin Nimshan",
    date: "",
  },
];

export default function handler(req, res) {
  res.status(200).json({ data: trendingData });
}

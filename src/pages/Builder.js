
import { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";

// Put your API key here
builder.init('c5b58dfc09004185a22af782820d969c');

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
export default function CatchAllRoute() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);

  if (notFound && !isPreviewingInBuilder) {
    return "404 Error !"
  }

  const dynamicData = {
    shopButtonTitle: 'Get Your Products !',
    saleNameTitle: 'Deal Of The Century coming soon... ',
    quote : '"Changed Alibaba was created when Jack Ma was rejected !"',
    image: {
      src: 'https://example.com/image.jpg',
      alt: 'Dynamic Image',
    },
  };

  // return the page when found

  const builderComponents = [
    <BuilderComponent model="page" data={dynamicData} />,
    <BuilderComponent model="model-2" />
  ];

  return (
    <>
      {builderComponents.map((component, index) => (
        <div key={index}>
          {component}
        </div>
      ))}
    </>
  );
}
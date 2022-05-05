import React from "react";
import Image from "next/image";
import { sanityImage } from "~/lib/components/sanityio";
import { TCelebGalleryItem } from "~/lib/components/types";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";


// logan's comment, gallery


export const CelebGallery: React.FC<{
  celebGalleryItems: TCelebGalleryItem[];
}> = (p) => {
  const context = useCelebContext();

  return (
    <main className="mx-auto grid max-w-5xl grid-cols-2 bg-gray-100 sm:grid-cols-3 md:grid-cols-4 border-b lg:border-x">
      {p.celebGalleryItems.map((celebData) => {
        const picture = celebData.picture || context.placeholderImage;

        return (
          <>
            <div className="relative overflow-hidden shadow-sm aspect-square">
              <a
                className="flex flex-col items-center overflow-hidden"
                href={`/${celebData.slug}`}
                key={celebData.slug}
              >
                <span
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                  className="flex aspect-square items-center"
                >
                  <Image
                    src={sanityImage(picture).width(260).height(290).url()}
                    alt={celebData.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </span>
              </a>
              <div className="relative bottom-12 left-3 z-[9999] inline-flex bg-black bg-opacity-75 p-1.5 px-3 text-xs font-medium text-white sm:text-sm lg:text-base">
                {celebData.name}
              </div>
            </div>
          </>
        );
      })}
    </main>
  );
};

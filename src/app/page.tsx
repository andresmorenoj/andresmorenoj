"use client";

import dynamic from "next/dynamic";
import { Header } from "@components/organisms";
import { TextsContentContainer } from "@components/molecules";
import { Heading, Text, ImageFigure } from "@components/atoms";
import { contentData } from "@constants/index";

const AppThemeProvider = dynamic(() => import("@theme/theme.provider"));
export default function Home() {
  return (
    <AppThemeProvider>
      <Header />
      <main>
        <TextsContentContainer
          variant="black"
          title={
            <Heading className="container__title" level={1} size="extraJumbo" fontWeight="extraBold">
              <Text variant="normal">{`${contentData.greet.content} `}</Text>
              <Text variant="semiBold">{`${contentData.name.content} `}</Text>
              <Text variant="semiBold">{`${contentData.job.content} `}</Text>
              <Text variant="outline">{`${contentData.job_title.content} `}</Text>
              <Text variant="normal">{`${contentData.location.content} `}</Text>
              <Text variant="semiBold">{`${contentData.location_city.content}`}</Text>
            </Heading>
          }
          description={
            <p className="container__description">
              <Text variant="normal">{`${contentData.short_description.content}`}</Text>
            </p>
          }
        />
        <ImageFigure width={100}/>
      </main>
    </AppThemeProvider>
  );
}

import * as React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";
import createEmotionCache from "@/Utils/createEmotionCache";

import AppState from "@/context/AppState";

import PageProvider from "@/helper/PageProvider";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <AppState>
      <PageProvider emotionCache={emotionCache}>
        <Component {...pageProps} />
      </PageProvider>
    </AppState>
  );
}

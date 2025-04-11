import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { type } from "arktype";

const MediaType = type.enumerated("novel", "manga", "anime");
type MediaType = typeof MediaType.infer;
const SourceId = type("(string > 0)#SourceId");
type SourceId = typeof SourceId.infer;

const MediaItem = type({
  sourceId: SourceId,
  url: "string.url.parse",
  type: MediaType,
});

type MediaItem = typeof MediaItem.infer;

const NovelItem = type(MediaItem, "&", {
  type: "'novel'",
});

type NovelItem = typeof NovelItem.infer;

const MangaItem = type(MediaItem, "&", {
  type: "'manga'",
});

type MangaItem = typeof MangaItem.infer;

const AnimeItem = type(MediaItem, "&", {
  type: "'anime'",
});

type AnimeItem = typeof AnimeItem.infer;

// Uncomment me!
// const AnyMediaItem = type(NovelItem).or(MangaItem).or(AnimeItem);
// type AnyMediaItem = typeof AnyMediaItem.infer;

const exampleAnime = AnimeItem({
  sourceId: "1",
  type: "anime",
  url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
});

if (exampleAnime instanceof type.errors) {
  // hover out.summary to see validation errors
  console.error(exampleAnime.summary);
} else {
  console.log(`Hello, ${exampleAnime.sourceId}`);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export type MyTemporaryStyle = {
  hardcodedListOfYouTubeVideoIDs: string[];
  title: string;
};

export type VideoItem = {
  yTvideoId: string;
  timeText?: string; // zamiast timeInSeconds
};
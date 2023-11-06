interface DataEntry {
  emotion_pre: number;
  emotion_post: number;
  num_questions: number;
  timestamp: string;
}

export function avgEmotionByDate(data: DataEntry[]): {
  [date: string]: number;
} {
  const dateEmotionSums: { [date: string]: number } = {};
  const dateEmotionCounts: { [date: string]: number } = {};

  for (const entry of data) {
    const timestamp = entry.timestamp;
    const date = timestamp.split("T")[0];
    const emotionSum = (entry.emotion_pre + entry.emotion_post) / 2;

    if (dateEmotionSums[date]) {
      // If the date already exists in the object, add emotion sums to it
      dateEmotionSums[date] += emotionSum;
      dateEmotionCounts[date]++;
    } else {
      // If it's a new date, initialize the emotion sum and count
      dateEmotionSums[date] = emotionSum;
      dateEmotionCounts[date] = 1;
    }
  }

  const averageEmotionsByDate: { [date: string]: number } = {};

  for (const date in dateEmotionSums) {
    // Calculate the average emotion by dividing the sum by the count
    averageEmotionsByDate[date] = Math.round(
      dateEmotionSums[date] / dateEmotionCounts[date]
    );
  }

  return averageEmotionsByDate;
}

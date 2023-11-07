interface DataEntry {
  emotion_pre: number;
  emotion_post: number;
  num_questions: number;
  timestamp: string;
}

export function cutTimestamp(data: DataEntry[]): DataEntry[] {
  return data.map((entry) => ({
    ...entry,
    timestamp: entry.timestamp.split("T")[0],
  }));
}

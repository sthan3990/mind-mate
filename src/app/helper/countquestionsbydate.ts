interface DataEntry {
  emotion_pre: number;
  emotion_post: number;
  num_questions: number;
  timestamp: string;
}

export function countQuestionsByDate(data: DataEntry[]): {
  [date: string]: number;
} {
  const dateCounts: { [date: string]: number } = {};

  for (const entry of data) {
    const timestamp = entry.timestamp;
    const date = timestamp.split("T")[0];

    if (dateCounts[date]) {
      // If the date already exists in the object, add num_questions to it
      dateCounts[date] += entry.num_questions;
    } else {
      // If it's a new date, initialize the count with num_questions
      dateCounts[date] = entry.num_questions;
    }
  }

  return dateCounts;
}


export interface Question {
  question: string;
  options: string[];
  answer: number; // 0-indexed
  explanation: string;
}

export interface StudentInfo {
  name: string;
  branch: string;
  grade: string;
}

export interface ReportData {
  studentInfo: StudentInfo;
  score: number;
  totalQuestions: number;
  timeTaken: number; // in seconds
  quizTitle: string;
}


import React, { useMemo } from 'react';
import { ReportData } from '../types';

interface Props {
  data: ReportData;
  onTryAgain: () => void;
}

const ReportCard: React.FC<Props> = ({ data, onTryAgain }) => {
  const { studentInfo, score, totalQuestions, timeTaken, quizTitle } = data;
  const accuracy = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
  
  const getFeedback = useMemo(() => {
    if (accuracy >= 90) return { message: "太棒了！你是学霸！", emoji: "🎉" };
    if (accuracy >= 75) return { message: "非常不错！继续努力！", emoji: "👍" };
    if (accuracy >= 60) return { message: "干得好！有很大进步空间。", emoji: "🙂" };
    return { message: "别灰心，继续加油！", emoji: "💪" };
  }, [accuracy]);

  const timeString = `${Math.floor(timeTaken / 60)}分 ${timeTaken % 60}秒`;
  
  const shareLink = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      alert('报告链接已复制到剪贴板！(Report link copied!)');
    }).catch(err => {
      console.error('Failed to copy link: ', err);
    });
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">成绩报告单</h2>
      <p className="text-gray-500 mb-8">{quizTitle}</p>

      <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left grid grid-cols-2 gap-4">
        <div><strong className="text-gray-700">姓名:</strong> {studentInfo.name}</div>
        <div><strong className="text-gray-700">分院:</strong> {studentInfo.branch}</div>
        <div><strong className="text-gray-700">年级:</strong> {studentInfo.grade}</div>
        <div><strong className="text-gray-700">用时:</strong> {timeString}</div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              className="text-gray-200"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="text-blue-600"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray={`${accuracy}, 100`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
             <span className="text-4xl font-bold text-gray-800">{accuracy.toFixed(0)}%</span>
             <p className="text-gray-500">正确率</p>
          </div>
        </div>
        <div className="text-left">
          <div className="text-2xl font-bold text-gray-800">得分: <span className="text-blue-600">{score} / {totalQuestions}</span></div>
          <div className="mt-4 text-xl">
             <span>{getFeedback.emoji}</span>
             <span className="ml-2 text-gray-700">{getFeedback.message}</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg space-y-4">
        <p className="text-sm text-gray-600">分享你的成绩报告:</p>
        <div className="flex items-center space-x-2">
           <input type="text" readOnly value={shareLink} className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none"/>
           <button onClick={handleCopyLink} className="bg-gray-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition">复制</button>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={onTryAgain}
          className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-transform transform hover:scale-105"
        >
          再试一次 (Try Again)
        </button>
      </div>
    </div>
  );
};

export default ReportCard;

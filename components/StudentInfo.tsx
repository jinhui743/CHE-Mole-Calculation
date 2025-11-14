
import React, { useState } from 'react';
import { StudentInfo } from '../types';

interface Props {
  onStart: (info: StudentInfo) => void;
}

const StudentInfoForm: React.FC<Props> = ({ onStart }) => {
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('Permas分院');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !grade.trim()) {
      setError('姓名和年级不能为空！(Name and Grade cannot be empty!)');
      return;
    }
    setError('');
    onStart({ name, branch, grade });
  };

  return (
    <div className="max-w-lg mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">开始测验</h2>
      <p className="text-gray-600 mb-8">请输入您的信息以开始本次测验。</p>
      <form onSubmit={handleSubmit} className="space-y-6 text-left">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">姓名 (Name)</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="请输入您的姓名"
          />
        </div>
        <div>
          <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-2">分院 (Cawangan)</label>
          <select
            id="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
          >
            <option>Permas分院</option>
            <option>Masai分院</option>
          </select>
        </div>
        <div>
          <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">年级 (Grade)</label>
          <input
            type="text"
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="例如: Form 4"
          />
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-105"
          >
            开始测验 (Start Quiz)
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentInfoForm;

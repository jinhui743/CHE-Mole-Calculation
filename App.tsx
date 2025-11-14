
import React, { useState, useEffect, useCallback } from 'react';
import StudentInfo from './components/StudentInfo';
import Quiz from './components/Quiz';
import ReportCard from './components/ReportCard';
import { StudentInfo as StudentInfoType, ReportData, Question } from './types';
import { QUIZ_TITLE, GOOGLE_FORM_URL, GOOGLE_FORM_ENTRY_IDS, ALL_QUESTIONS, TOTAL_QUESTIONS_PER_QUIZ } from './constants';
// @ts-ignore
import pako from 'pako';

type Page = 'info' | 'quiz' | 'report';

// Utility to shuffle array and pick N items
const shuffleAndPick = <T,>(array: T[], n: number): T[] => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
};

const App: React.FC = () => {
    const [page, setPage] = useState<Page>('info');
    const [studentInfo, setStudentInfo] = useState<StudentInfoType | null>(null);
    const [reportData, setReportData] = useState<ReportData | null>(null);
    const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
    
    useEffect(() => {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const data = urlParams.get('data');
            if (data) {
                const decoded = atob(data);
                const charData = decoded.split('').map(c => c.charCodeAt(0));
                const binData = new Uint8Array(charData);
                const decompressed = pako.inflate(binData, { to: 'string' });
                const parsedData: ReportData = JSON.parse(decompressed);
                setReportData(parsedData);
                setPage('report');
            }
        } catch (error) {
            console.error("Failed to decode report data from URL:", error);
            // If decoding fails, just show the info page
            setPage('info');
        }
    }, []);

    const submitToGoogleForm = useCallback(async (data: ReportData, link: string) => {
        const formData = new FormData();
        const submissionTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kuala_Lumpur' });
        
        formData.append(GOOGLE_FORM_ENTRY_IDS.submissionTime, submissionTime);
        formData.append(GOOGLE_FORM_ENTRY_IDS.name, data.studentInfo.name);
        formData.append(GOOGLE_FORM_ENTRY_IDS.branch, data.studentInfo.branch);
        formData.append(GOOGLE_FORM_ENTRY_IDS.grade, data.studentInfo.grade);
        formData.append(GOOGLE_FORM_ENTRY_IDS.score, `${data.score}/${data.totalQuestions}`);
        const accuracy = ((data.score / data.totalQuestions) * 100).toFixed(1) + '%';
        formData.append(GOOGLE_FORM_ENTRY_IDS.accuracy, accuracy);
        formData.append(GOOGLE_FORM_ENTRY_IDS.quizTheme, data.quizTitle);
        formData.append(GOOGLE_FORM_ENTRY_IDS.reportLink, link);

        try {
            await fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formData,
            });
        } catch (error) {
            console.error('Google Form submission error:', error);
        }
    }, []);

    const handleStartQuiz = (info: StudentInfoType) => {
        setStudentInfo(info);
        setQuizQuestions(shuffleAndPick(ALL_QUESTIONS, TOTAL_QUESTIONS_PER_QUIZ));
        setPage('quiz');
    };

    const handleFinishQuiz = (score: number, timeTaken: number) => {
        if (studentInfo) {
            const data: ReportData = {
                studentInfo,
                score,
                totalQuestions: TOTAL_QUESTIONS_PER_QUIZ,
                timeTaken,
                quizTitle: QUIZ_TITLE,
            };

            try {
                const jsonString = JSON.stringify(data);
                const compressed = pako.deflate(jsonString);
                const binaryString = String.fromCharCode.apply(null, Array.from(compressed));
                const encoded = btoa(binaryString);
                const url = `${window.location.origin}${window.location.pathname}?data=${encoded}`;
                
                submitToGoogleForm(data, url);
                setReportData(data);
                window.history.pushState({}, '', url); // Update URL without reloading
            } catch (error) {
                console.error("Failed to create report link:", error);
                 // Fallback if link creation fails
                submitToGoogleForm(data, "Link generation failed");
                setReportData(data);
            } finally {
                setPage('report');
            }
        }
    };
    
    const handleTryAgain = () => {
        setPage('info');
        setStudentInfo(null);
        setReportData(null);
        window.history.pushState({}, '', window.location.pathname); // Clear URL params
    };

    const renderPage = () => {
        switch (page) {
            case 'quiz':
                return <Quiz questions={quizQuestions} onFinish={handleFinishQuiz} />;
            case 'report':
                return reportData && <ReportCard data={reportData} onTryAgain={handleTryAgain} />;
            case 'info':
            default:
                return <StudentInfo onStart={handleStartQuiz} />;
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 font-[sans-serif]">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8">
                <header className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white flex items-center space-x-4">
                    {/* 在这里替换LOGO的Base64编码 */}
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNMTIgMiBDNi40OCAyIDIgNi40OCAyIDEyIEMyIDE3LjUyIDYuNDggMjIgMTIgMjIgQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyIEMyMiA2LjQ4IDE3LjUyIDIgMTIgMiBaIE0xMiAyMCBDNy41OSAyMCA0IDE2LjQxIDQgMTIgQzQgNy41OSA3LjU5IDQgMTIgNCBDMTYuNDEgNCAyMCA3LjU5IDIwIDEyIEMyMCAxNi40MSAxNi40MSAyMCAxMiAyMCBaIE0xMiA2IEM5LjI0IDYgNyA4LjI0IDcgMTEgSCA5IEM5IDkuMzQgMTAuMzQgOCAxMiA4IEMxMy42NiA4IDE1IDkuMzQgMTUgMTEgQzE1IDEyLjI0IDE0LjI0IDEzLjA5IDEzLjA5IDEzLjgyIEwxMi4yMyAxNC41IEMxMS4yMyAxNS4yNyAxMSAxNi4yMiAxMSAxNyBIIDEzIEMxMyAxNi4zNCAxMy4zNCAxNiAxNCAxNS40MSBMMTQuODYgMTQuNjMgQzE1Ljc2IDEzLjg5IDE2IDEyLjc2IDE2IDExLjUgQzE2IDguNDggMTQuMzIgNiAxMiA2IFoiLz4KPC9zdmc+" alt="Logo" className="h-12 w-12 rounded-full bg-white p-1" />
                    <div>
                        <h1 className="text-2xl font-bold">学品教育学院</h1>
                        <p className="text-blue-200">{QUIZ_TITLE}</p>
                    </div>
                </header>
                <main className="p-6 md:p-10">
                    {renderPage()}
                </main>
            </div>
        </div>
    );
};

export default App;

import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// Checkbox import removed as it was unused and the file was missing
import { 
  Download, 
  Clock, 
  FileText, 
  CheckSquare, 
  BookOpen, 
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const ChecklistSection = ({ title, icon: Icon, timeEstimate, items, isOpen, onToggle }) => {
  return (
    <div className="border rounded-lg mb-4 bg-white overflow-hidden">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white rounded-full border shadow-sm">
            <Icon className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <div className="flex items-center text-xs text-gray-500 gap-1">
              <Clock className="h-3 w-3" /> {timeEstimate}
            </div>
          </div>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
      </button>
      
      {isOpen && (
        <div className="p-4 space-y-3 border-t">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">{item.label}</p>
                {item.desc && <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CourseCreationChecklist = () => {
  const [openSections, setOpenSections] = useState({
    setup: true,
    lessons: false,
    quiz: false,
    glossary: false,
    resources: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleDownloadTemplate = () => {
    const template = {
      title: "New Course Title",
      description: "Course description here...",
      instructor: "Instructor Name",
      lessons: [
        {
          title: "Lesson 1",
          content: "Markdown content...",
          quizzes: [
            {
              title: "Lesson 1 Quiz",
              questions: Array(10).fill({ question: "Question text?", options: ["A", "B"], answer: "A" })
            }
          ],
          glossary: Array(10).fill({ term: "Term", definition: "Definition" }),
          caseStudies: [{ title: "Case Study 1", scenario: "..." }],
          resources: [{ title: "Resource 1", url: "..." }, { title: "Resource 2", url: "..." }, { title: "Resource 3", url: "..." }]
        }
      ]
    };

    const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'course_structure_template.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Course Creation Guide</h2>
          <p className="text-gray-500">Follow this standard operating procedure to ensure course quality.</p>
        </div>
        <Button onClick={handleDownloadTemplate} className="gap-2">
          <Download className="h-4 w-4" /> Download JSON Template
        </Button>
      </div>

      <ChecklistSection 
        title="1. Course Setup & Metadata"
        icon={FileText}
        timeEstimate="30 mins"
        isOpen={openSections.setup}
        onToggle={() => toggleSection('setup')}
        items={[
          { label: "Define Course Title & Description", desc: "Clear, benefit-driven title and comprehensive description." },
          { label: "Set Learning Outcomes", desc: "List 3-5 key skills students will gain." },
          { label: "Assign Instructor", desc: "Link to valid instructor profile." },
          { label: "Create Course Thumbnail", desc: "16:9 aspect ratio, high resolution." }
        ]}
      />

      <ChecklistSection 
        title="2. Lesson Structure"
        icon={BookOpen}
        timeEstimate="2-4 hours per lesson"
        isOpen={openSections.lessons}
        onToggle={() => toggleSection('lessons')}
        items={[
          { label: "Minimum 5 Lessons", desc: "Course must have at least 5 substantial modules." },
          { label: "Lesson Content", desc: "Mix of text, video, and interactive elements." },
          { label: "Lesson Sequencing", desc: "Ensure logical flow from beginner to advanced." }
        ]}
      />

      <ChecklistSection 
        title="3. Assessments (Quizzes)"
        icon={CheckSquare}
        timeEstimate="1 hour per lesson"
        isOpen={openSections.quiz}
        onToggle={() => toggleSection('quiz')}
        items={[
          { label: "1 Quiz per Lesson", desc: "Mandatory for knowledge retention." },
          { label: "10 Questions Minimum", desc: "Each quiz must have at least 10 questions." },
          { label: "Variety of Question Types", desc: "Multiple choice, True/False." },
          { label: "Feedback for Answers", desc: "Explain why an answer is correct/incorrect." }
        ]}
      />

      <ChecklistSection 
        title="4. Glossary & Vocabulary"
        icon={BookOpen}
        timeEstimate="30 mins per lesson"
        isOpen={openSections.glossary}
        onToggle={() => toggleSection('glossary')}
        items={[
          { label: "10 Terms per Lesson", desc: "Define key industry jargon used in the lesson." },
          { label: "Clear Definitions", desc: "Simple, concise explanations." }
        ]}
      />

      <ChecklistSection 
        title="5. Supporting Resources"
        icon={Download}
        timeEstimate="1 hour per lesson"
        isOpen={openSections.resources}
        onToggle={() => toggleSection('resources')}
        items={[
          { label: "3 Resources per Lesson", desc: "PDFs, templates, checklists, or external links." },
          { label: "1 Case Study per Lesson", desc: "Real-world application scenario." },
          { label: "Downloadable Assets", desc: "Ensure all links are working." }
        ]}
      />

      <ChecklistSection 
        title="6. Gamification (Badges)"
        icon={Award}
        timeEstimate="15 mins"
        isOpen={openSections.badges}
        onToggle={() => toggleSection('badges')}
        items={[
          { label: "Course Completion Badge", desc: "Design and upload badge icon." },
          { label: "Set Badge Criteria", desc: "Usually 100% completion + passing grade." }
        ]}
      />
    </div>
  );
};

export default CourseCreationChecklist;
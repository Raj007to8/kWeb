import { BookOpen, Target, Trophy, LineChart, GraduationCap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

export const featureData: FeatureItem[] = [
  {
    icon: BookOpen,
    title: 'Content Aggregation',
    description: 'Access everything you need in one place. Curated resources tailored to your learning journey.',
    gradient: 'from-[#FF6B6B] to-[#FFE66D]',
    delay: 0.2,
  },
  {
    icon: Target,
    title: 'Personalized Study',
    description: 'AI-driven study plans adapted to your goals, pace, and learning style.',
    gradient: 'from-[#4ECDC4] to-[#556270]',
    delay: 0.4,
  },
  {
    icon: Trophy,
    title: 'Gamified Learning',
    description: 'Turn studying into an engaging experience with achievements and challenges.',
    gradient: 'from-[#6C63FF] to-[#3F3D56]',
    delay: 0.6,
  },
  {
    icon: LineChart,
    title: 'Progress Analytics',
    description: 'Visual insights into your learning journey with detailed analytics and reports.',
    gradient: 'from-[#FF75B5] to-[#FFB86C]',
    delay: 0.8,
  },
  {
    icon: GraduationCap,
    title: 'Exam Preparation',
    description: 'Comprehensive test prep with practice exams and performance analysis.',
    gradient: 'from-[#08AEEA] to-[#2AF598]',
    delay: 1.0,
  }
];

'use client';

import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  { id: 1, text: '¿Cuál es el mejor equipo de futbol del mundo?', options: ['Nacional', 'Peñarol', 'Otros'], correctAnswer: 'Nacional' },
  { id: 2, text: '¿Cuántos años cumplo?', options: ['4', '5', '6'], correctAnswer: '5' },
  { id: 3, text: '¿En qué mes es mi cumpleaños?', options: ['Junio', 'Julio', 'Agosto'], correctAnswer: 'Julio' },
  { id: 4, text: '¿Cuál es mi superhéroe favorito?', options: ['Spiderman', 'Batman', 'Superman'], correctAnswer: 'Spiderman' },
  { id: 5, text: '¿Qué me gusta más comer?', options: ['Pizza', 'Helado', 'Pastel'], correctAnswer: 'Pizza' },
  { id: 6, text: '¿Dónde será la fiesta?', options: ['Parque', 'Mi Casa', 'Salón de Fiestas'], correctAnswer: 'Mi Casa' },
];

interface QuizSectionProps {
  onQuizComplete: () => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const { toast } = useToast();

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  const handleSubmitAnswer = () => {
    const selectedAnswer = selectedAnswers[currentQuestion.id];
    if (!selectedAnswer) {
      toast({
        title: "¡Espera!",
        description: "Por favor, selecciona una respuesta.",
        variant: "destructive",
      });
      return;
    }

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setCorrectAnswersCount((prev) => prev + 1);
       toast({
         title: "¡Correcto!",
         description: "¡Muy bien!",
         className: "bg-green-100 border-green-300 text-green-800",
         duration: 2000,
       });
    } else {
       toast({
         title: "¡Uy!",
         description: `La respuesta correcta era: ${currentQuestion.correctAnswer}`,
         variant: "destructive",
         duration: 2000,
       });
    }

    // Check if quiz should end
    if (currentQuestionIndex === questions.length - 1 || correctAnswersCount + (isCorrect ? 1 : 0) >= 3) {
      if (correctAnswersCount + (isCorrect ? 1 : 0) >= 3) {
        toast({
          title: "¡Genial!",
          description: "¡Has respondido suficientes preguntas correctamente!",
          className: "bg-primary text-primary-foreground",
          duration: 3000,

        });
         setTimeout(onQuizComplete, 1500); // Give time for the last toast
      } else {
         toast({
           title: "¡Casi!",
           description: "No has acertado suficientes. Intenta de nuevo más tarde.",
           variant: "destructive",
            duration: 3000,
         });
         // Optionally reset quiz or block access here
         // For this prototype, we'll just prevent moving forward.
      }
    } else {
      // Move to next question
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };


  return (
    <Card className="w-full max-w-md shadow-xl bg-card animate-pulse-subtle">
      <CardHeader className="text-center bg-primary text-primary-foreground p-4 rounded-t-lg">
        <CardTitle className="text-3xl font-bold">Fiesta Kiddo</CardTitle>
        <CardDescription className="text-primary-foreground/90 pt-1">¡Responde algunas preguntas para ver la invitación!</CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
         <div className="text-center">
           <p className="text-lg font-semibold text-foreground mb-4">{currentQuestion.text}</p>
           <RadioGroup
             value={selectedAnswers[currentQuestion.id] || ''}
             onValueChange={handleAnswerSelect}
             className="space-y-3 items-start pl-4" // Align items to start
           >
             {currentQuestion.options.map((option) => (
               <div key={option} className="flex items-center space-x-3">
                 <RadioGroupItem value={option} id={`q${currentQuestion.id}-${option}`} className="border-primary text-primary"/>
                 <Label htmlFor={`q${currentQuestion.id}-${option}`} className="text-base text-foreground cursor-pointer hover:text-primary transition-colors">
                   {option}
                 </Label>
               </div>
             ))}
           </RadioGroup>
         </div>
         <div className="text-center text-sm text-muted-foreground">
           Pregunta {currentQuestionIndex + 1} de {questions.length} | Correctas: {correctAnswersCount}
         </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-center">
        <Button onClick={handleSubmitAnswer} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-3 rounded-full transition-transform transform hover:scale-105">
          Siguiente <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizSection;

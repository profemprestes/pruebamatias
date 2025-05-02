'use client';

import type React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, Clock, MapPin, Users, Phone } from 'lucide-react';

const InvitationSection: React.FC = () => {
  const [isCardClicked, setIsCardClicked] = useState(false);

  const handleCardClick = () => {
    setIsCardClicked(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 p-4 md:p-8">
      {/* Initial Invitation Card */}
      {!isCardClicked && (
        <Card
          className="text-center shadow-xl cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-secondary to-accent rounded-xl overflow-hidden"
          onClick={handleCardClick}
        >
          <CardHeader className="p-6 md:p-10">
            <CardTitle className="text-4xl md:text-5xl font-bold text-primary-foreground drop-shadow-md">
              Hola soy Matias
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8 space-y-4">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-primary-foreground shadow-lg">
              <Image
                src="https://picsum.photos/300/300" // Placeholder image
                alt="Foto del Cumpleañero"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                data-ai-hint="happy child birthday boy"
              />
            </div>
            <p className="text-xl md:text-2xl font-semibold text-primary-foreground mt-4">
              ¡Estás invitado a mi fiesta!
            </p>
             <p className="text-lg text-primary-foreground/90">(Haz clic para ver los detalles)</p>
          </CardContent>
        </Card>
      )}

      {/* Revealed Party Details */}
      {isCardClicked && (
        <div className="animate-in fade-in duration-500">
          {/* Hero Section */}
          <div className="text-center mb-8 p-6 bg-primary rounded-xl shadow-lg">
             <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground drop-shadow-md">¡Acompáñame a celebrar!</h1>
          </div>

          {/* Details Card */}
          <Card className="shadow-xl bg-card rounded-xl overflow-hidden">
            <CardHeader className="bg-secondary/80 p-4 rounded-t-xl">
               <CardTitle className="text-2xl font-semibold text-secondary-foreground text-center">Detalles de la Fiesta</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-primary" />
                <span className="text-lg text-foreground"><strong className="font-semibold">Fecha:</strong> Sábado, 20 de Julio</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-primary" />
                <span className="text-lg text-foreground"><strong className="font-semibold">Hora:</strong> 3:00 PM - 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-lg text-foreground"><strong className="font-semibold">Lugar:</strong> Mi Casa - Calle Falsa 123, Ciudad Feliz</span>
              </div>
              <p className="text-lg text-foreground pt-4 border-t border-border mt-4">
                ¡Prepárate para una tarde llena de juegos, risas, pastel y muchas sorpresas! ¡No faltes! 🎉🎈
              </p>

              {/* Contact Info Modal Trigger */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full mt-6 border-primary text-primary hover:bg-primary/10">
                    <Users className="mr-2 h-5 w-5" /> Ver Datos de Contacto
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-popover rounded-lg shadow-xl">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-popover-foreground">Datos sobre mí</DialogTitle>
                    <DialogDescription className="text-popover-foreground/80">
                      Información de contacto para confirmar asistencia o preguntas.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="flex items-center space-x-3">
                       <Users className="h-5 w-5 text-primary" />
                       <span className="text-base text-popover-foreground"><strong className="font-medium">Padres:</strong> Ana y Juan Pérez</span>
                    </div>
                     <div className="flex items-center space-x-3">
                       <Phone className="h-5 w-5 text-primary" />
                       <span className="text-base text-popover-foreground"><strong className="font-medium">Contacto:</strong> +12 345 6789</span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default InvitationSection;

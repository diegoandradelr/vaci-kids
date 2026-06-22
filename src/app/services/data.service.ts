import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  children = [
    {
      id: 1,
      name: 'Maria',
      birthDate: '2024-01-10',
      status: 'up-to-date',
    },
    {
      id: 2,
      name: 'João',
      birthDate: '2021-05-15',
      status: 'overdue',
    },
  ];

  vaccines = [
    {
      id: 1,
      childId: 1,
      name: 'BCG',
      dueDate: '2024-01-10',
      applicationDate: '2024-01-10',
      applied: true,
    },
    {
      id: 2,
      childId: 1,
      name: 'Hepatite B',
      dueDate: '2024-02-10',
      applicationDate: '2024-02-12',
      applied: true,
    },
    {
      id: 3,
      childId: 1,
      name: 'Pentavalente',
      dueDate: '2024-04-10',
      applicationDate: '2024-04-15',
      applied: true,
    },
    {
      id: 4,
      childId: 2,
      name: 'BCG',
      dueDate: '2021-05-15',
      applicationDate: '2021-05-15',
      applied: true,
    },
    {
      id: 5,
      childId: 2,
      name: 'Tríplice Viral',
      dueDate: '2025-03-01',
      applied: false,
    },
  ];

  campaigns = [
    {
      id: 1,
      title: 'Campanha Influenza',
      description: 'Vacinação contra gripe para crianças de 6 meses a 5 anos.',
      active: true,
    },
  ];
}

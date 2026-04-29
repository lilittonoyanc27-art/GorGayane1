export interface OrdinalTheory {
  ordinal: string;
  number: number;
  translation: string;
}

export interface OrdinalQuestion {
  id: string;
  prompt: string;
  choices: string[];
  target: string;
  translation: string;
  image: string;
}

export const GOR_AVATAR = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop';
export const GAYANE_AVATAR = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop';
export const GIFT_IMAGE = 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop';

export const ORDINAL_THEORY: OrdinalTheory[] = [
  { ordinal: 'Primero', number: 1, translation: 'Առաջին' },
  { ordinal: 'Segundo', number: 2, translation: 'Երկրորդ' },
  { ordinal: 'Tercero', number: 3, translation: 'Երրորդ' },
  { ordinal: 'Cuarto', number: 4, translation: 'Չորրորդ' },
  { ordinal: 'Quinto', number: 5, translation: 'Հինգերորդ' },
  { ordinal: 'Sexto', number: 6, translation: 'Վեցերորդ' },
  { ordinal: 'Séptimo', number: 7, translation: 'Յոթերորդ' },
  { ordinal: 'Octavo', number: 8, translation: 'Ութերորդ' },
  { ordinal: 'Noveno', number: 9, translation: 'Իններորդ' },
  { ordinal: 'Décimo', number: 10, translation: 'Տասներորդ' }
];

export const ORDINAL_QUESTIONS: OrdinalQuestion[] = [
  {
    id: '1',
    prompt: 'El ___ (1º) piso.',
    choices: ['primer', 'primero', 'primera'],
    target: 'primer',
    translation: 'Առաջին հարկը:',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400'
  },
  {
    id: '2',
    prompt: 'La ___ (3ª) vez.',
    choices: ['tercero', 'tercera', 'tercer'],
    target: 'tercera',
    translation: 'Երրորդ անգամը:',
    image: 'https://images.unsplash.com/photo-1481622215177-04778174780d?q=80&w=400'
  },
  {
    id: '3',
    prompt: 'El ___ (2º) lugar.',
    choices: ['segundo', 'segunda', 'segundoa'],
    target: 'segundo',
    translation: 'Երկրորդ տեղը:',
    image: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?q=80&w=400'
  },
  {
    id: '4',
    prompt: 'La ___ (1ª) página.',
    choices: ['primer', 'primera', 'primero'],
    target: 'primera',
    translation: 'Առաջին էջը:',
    image: 'https://images.unsplash.com/photo-1544822688-6625a6104874?q=80&w=400'
  },
  {
    id: '5',
    prompt: 'El ___ (3º) libro.',
    choices: ['tercero', 'tercer', 'tercera'],
    target: 'tercer',
    translation: 'Երրորդ գիրքը:',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=400'
  },
  {
    id: '6',
    prompt: 'El ___ (4º) tren.',
    choices: ['cuarto', 'cuarta', 'cuatro'],
    target: 'cuarto',
    translation: 'Չորրորդ գնացքը:',
    image: 'https://images.unsplash.com/photo-1474487059417-781bd43a2955?q=80&w=400'
  },
  {
    id: '7',
    prompt: 'La ___ (5ª) calle.',
    choices: ['quinto', 'quinta', 'cinco'],
    target: 'quinta',
    translation: 'Հինգերորդ փողոցը:',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=400'
  },
  {
    id: '8',
    prompt: 'El ___ (6º) día.',
    choices: ['sexto', 'sexta', 'seis'],
    target: 'sexto',
    translation: 'Վեցերորդ օրը:',
    image: 'https://images.unsplash.com/photo-1506784919141-935049969186?q=80&w=400'
  },
  {
    id: '9',
    prompt: 'La ___ (7ª) sinfonía.',
    choices: ['séptimo', 'séptima', 'siete'],
    target: 'séptima',
    translation: 'Յոթերորդ սիմֆոնիան:',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400'
  },
  {
    id: '10',
    prompt: 'El ___ (8º) mes.',
    choices: ['octavo', 'octava', 'ocho'],
    target: 'octavo',
    translation: 'Ութերորդ ամիսը:',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=400'
  },
  {
    id: '11',
    prompt: 'La ___ (9ª) lección.',
    choices: ['noveno', 'novena', 'nueve'],
    target: 'novena',
    translation: 'Իններորդ դասը:',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400'
  },
  {
    id: '12',
    prompt: 'El ___ (10º) aniversario.',
    choices: ['décimo', 'décima', 'diez'],
    target: 'décimo',
    translation: 'Տասներորդ տարեդարձը:',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=400'
  },
  {
    id: '13',
    prompt: 'Vives en el ___ (2º) apartamento.',
    choices: ['segunda', 'segundo', 'dos'],
    target: 'segundo',
    translation: 'Դու ապրում ես երկրորդ բնակարանում:',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=400'
  },
  {
    id: '14',
    prompt: 'Es mi ___ (1º) coche.',
    choices: ['primero', 'primer', 'primera'],
    target: 'primer',
    translation: 'Սա իմ առաջին մեքենան է:',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=400'
  },
  {
    id: '15',
    prompt: 'La ___ (4ª) pregunta.',
    choices: ['cuarto', 'cuarta', 'cuatro'],
    target: 'cuarta',
    translation: 'Չորրորդ հարցը:',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=400'
  },
  {
    id: '16',
    prompt: 'El ___ (5º) elemento.',
    choices: ['quinto', 'quinta', 'cinco'],
    target: 'quinto',
    translation: 'Հինգերորդ տարրը:',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=400'
  },
  {
    id: '17',
    prompt: 'La ___ (8ª) vez es la vencida.',
    choices: ['octavo', 'octava', 'ocho'],
    target: 'octava',
    translation: 'Ութերորդ անգամը վերջնական է (ասացվածք):',
    image: 'https://images.unsplash.com/photo-1481437156560-3201f6a65b73?q=80&w=400'
  },
  {
    id: '18',
    prompt: 'El ___ (9º) piso del hotel.',
    choices: ['novena', 'noveno', 'nueve'],
    target: 'noveno',
    translation: 'Հյուրանոցի իններորդ հարկը:',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400'
  },
  {
    id: '19',
    prompt: 'Es su ___ (3º) hijo.',
    choices: ['tercero', 'tercer', 'tercera'],
    target: 'tercer',
    translation: 'Սա նրա երրորդ որդին է:',
    image: 'https://images.unsplash.com/photo-1510227272981-87123e259b17?q=80&w=400'
  },
  {
    id: '20',
    prompt: 'La ___ (10ª) noche.',
    choices: ['décimo', 'décima', 'diez'],
    target: 'décima',
    translation: 'Տասներորդ գիշերը:',
    image: 'https://images.unsplash.com/photo-1505506819711-06311b10293d?q=80&w=400'
  }
];

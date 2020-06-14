export interface Topic {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  slides: { [name: string]: number };
  progress?: number;
}

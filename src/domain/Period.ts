export const Periods = [
  'Medieval',
  'Renaissance',
  'Baroque',
  'Classical',
  'Early Romantic',
  'Romantic',
  'Late Romantic',
  '20th Century',
  'Post-War',
  '21st Century',
] as const;

export type Period = (typeof Periods)[number];

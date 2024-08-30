export type ImageSize = 'tiny' | 'very-small' | 'small' | 'normal' | 'slightly-large' | 'large' | 'very-large' | 'huge';
export function imageSize (name: ImageSize): string {
  switch (name) {
    case 'tiny':
      return '8px';
    case 'very-small':
      return '10px';
    case 'small':
      return '16px';
    case 'normal':
      return '24px';
    case 'slightly-large':
      return '36px';
    case 'large':
      return '56px';
    case 'very-large':
      return '72px';
    case 'huge':
      return '100px'; 
  }
}

export type FontSize = 'tiny' | 'very-small' | 'small' | 'normal' | 'slightly-large' | 'large' | 'very-large' | 'huge';
export function fontSize (name: FontSize): string {
  switch (name) {
    case 'tiny':
      return '8px';
    case 'very-small':
      return '10px';
    case 'small':
      return '16px';
    case 'normal':
      return '24px';
    case 'slightly-large':
      return '36px';
    case 'large':
      return '56px';
    case 'very-large':
      return '72px';
    case 'huge':
      return '100px'; 
  }
}
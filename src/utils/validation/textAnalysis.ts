// Common words that are too vague or generic
const VAGUE_WORDS = new Set([
  'thing', 'stuff', 'something', 'anything', 'nothing',
  'this', 'that', 'it', 'learn', 'study', 'know'
]);

// Check for repeated characters (e.g., 'aaaa')
export function isRepeatedCharacters(text: string): boolean {
  const repeatedPattern = /(.)\1{3,}/;
  return repeatedPattern.test(text);
}

// Check if the input contains at least one meaningful word
export function containsMeaningfulWord(text: string): boolean {
  // Split into words and filter out empty strings
  const words = text.toLowerCase().split(/[\s./]+/).filter(Boolean);

  // Check if we have at least one word that's:
  // 1. At least 2 characters long
  // 2. Not in our vague words list
  return words.some(word => 
    word.length >= 2 && !VAGUE_WORDS.has(word)
  );
}
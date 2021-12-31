import type gg from 'lib/generated';

interface SelectedLanguageOption {
  count: number;
  lang: string;
}

export type LangOptions = SelectedLanguageOption[];

export type SelectedLanguage = SelectedLanguageOption['lang'] | null;

export interface BookReviewsProps {
  bookId: gg.Book['id'];
  editionId: gg.Edition['id'];
}

import { useMemo } from 'react';
import languageService from 'lib/services/language.service';
import type { ISelect } from 'lib/components/@controls/Select';
import gg from 'lib/generated';
import type { SelectedLanguage } from './interface';
import { makeLangOptions } from './helpers';

type TUseLangOptions = (
  variables: gg.BookReviewsLanguagesVariables,
) => ISelect<SelectedLanguage>['options'];

export const useLangOptions: TUseLangOptions = variables => {
  const { data } = gg.useBookReviewsLanguages({ variables });

  const options = useMemo(() => makeLangOptions(data?.reviews), [data?.reviews]);

  return useMemo(() => {
    const selectOptions = options.map(({ lang, count }) => ({
      value: lang,
      label: `${languageService.getName(lang)} (${count})`,
    }));
    return [{ value: null, label: 'All Languages' }, ...selectOptions];
  }, [options]);
};

export const useReviewsQuery = (variables: gg.BookReviewsVariables) => {
  const { data, loading, previousData } = gg.useBookReviews({ variables });
  const { reviews } = data || previousData || { reviews: [] };

  return { reviews, loading: loading && !previousData, previousData };
};

import React, { Fragment, useMemo } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import cn from 'classnames';

interface ISelectOption<V> {
  label: string;
  value: V;
}
export interface ISelect<V> {
  options: ISelectOption<V>[];
  placeholder?: string;
  value: V;
  onChange: (value: V) => void;
}

export const Select = <V,>({
  value,
  options,
  onChange,
  placeholder = 'Select an Option',
}: ISelect<V>): JSX.Element => {
  const selectedOption = useMemo(() => {
    return options.find(option => option.value === value);
  }, [options, value]);

  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative w-52 z-base">
        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left border-2 rounded-lg shadow-md cursor-default bg-skin-complement border-skin-base sm:text-sm text-skin-complement">
          {selectedOption ? (
            <span className="block truncate">{selectedOption.label}</span>
          ) : (
            <span className="block truncate text-skin-placeholder">{placeholder}</span>
          )}
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon className="w-5 h-5 text-[#9ca3af]" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg bg-skin-complement max-h-60 focus:ring-offset-0 sm:text-sm">
            {options.map((option, index) => (
              <Listbox.Option
                key={index}
                value={option.value}
                className={({ active }) =>
                  cn(
                    active ? 'text-skin-primary bg-skin-primary-light' : 'text-skin-complement',
                    'cursor-default select-none relative py-2 pl-10 pr-4',
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={cn(selected ? 'font-medium' : 'font-normal', 'block truncate')}
                    >
                      {option.label}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-skin-primary-dark">
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

'use client';

import { useQuery } from '@tanstack/react-query';

import { getMeQuery } from '../queries/get-me.query';

export function useMe() {
  return useQuery(getMeQuery());
}

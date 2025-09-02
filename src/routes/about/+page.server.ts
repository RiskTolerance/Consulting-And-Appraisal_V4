import { getEmployeesQuery } from '$lib/server/sanity/groqQueries';
import type { PageServerLoad } from '../$types';
import { readClient } from '$lib/server/sanity/sanityClient';
import { error } from '@sveltejs/kit'

export const load: PageServerLoad = async () => {
  const client = readClient;
  const data = await client.fetch(getEmployeesQuery);
  if (data) {
    return { employees: data };
  }
  return error(500, 'Failed to fetch employees data from Sanity');
}
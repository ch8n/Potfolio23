import github from '$lib/assets/github.json'
import type { PageServerLoad } from './$types'

export const load = (async () => {
	return {
		projects: github.projects
	}
}) satisfies PageServerLoad
/*

REF: https://docs.astro.build/en/tutorials/add-content-collections/

AFTER CHANGES REMEMBER TO RUN
npx astro sync

*/
import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		schema: docsSchema()
	}),
	projects: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			industrial: z.string(),
			description: z.string(),
			publishDate: z.string().or(z.date()).transform((val) => new Date(val)),
			updatedDate: z.string().optional().transform((str) => (str ? new Date(str) : undefined)),
			tags: z.array(z.string()),
			img_alt: z.string().optional(),
		}),
	}),
	articles: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			author: z.string().optional(),
			description: z.string(),
			publishDate: z.coerce.date(),
			revisionDate: z.coerce.date().optional(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	employment: defineCollection({
		type: 'content',
		schema: z.object({
			showSequence: z.number(),
			companyName: z.string(),
			companyShortName: z.string().optional(),
			companyaka: z.string().optional(),
			companyFormerName: z.string().optional(),
			companyUrl: z.string(),
			location: z.string().optional(),
			address: z.string().optional(),
			addressUrl: z.string().optional(),
			country: z.string(),
			positionTitle: z.string(),
			positionStatusType: z.string(),
			positionDeliveryType: z.string(),
			description: z.string(),
			headline: z.string(),
			tags: z.array(z.string()),
			startDate: z.coerce.date(),
			endDate: z.coerce.date().optional(),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	volunteer: defineCollection({
		type: 'content',
		schema: z.object({
			showSequence: z.number(),
			companyName: z.string(),
			companyUrl: z.string(),
			location: z.string().optional(),
			address: z.string().optional(),
			addressUrl: z.string().optional(),
			country: z.string(),
			positionTitle: z.string(),
			positionStatusType: z.string(),
			positionDeliveryType: z.string(),
			description: z.string(),
			headline: z.string(),
			tags: z.array(z.string()),
			startDate: z.coerce.date(),
			endDate: z.coerce.date().optional(),
			img_alt: z.string().optional(),
		}),
	}),
	education: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			dateFinished: z.coerce.date(),
			school: z.string(),
			schoolType: z.string(),
			schoolUrl: z.string(),
			country: z.string(),
			program: z.string(),
			programUrl: z.string(),
			credential: z.string(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	coopeducation: defineCollection({
		type: 'content',
		schema: z.object({
			showSequence: z.number(),
			placementName: z.string(),
			placementDescriptionLine: z.string(),
			placementUrl: z.string(),
			school: z.string(),
			schoolType: z.string(),
			schoolUrl: z.string(),
			dateStarted: z.coerce.date(),
			dateFinished: z.coerce.date().optional(),
			description: z.string(),
			tagline: z.string(),
			tags: z.array(z.string()),
			img_alt: z.string().optional(),
		}),
	}),
	professionaldevelopment: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			dateFinished: z.coerce.date(),
			school: z.string(),
			schoolUrl: z.string(),
			country: z.string(),
			program: z.string(),
			programUrl: z.string(),
			credential: z.string(),
			tags: z.array(z.string()),
			img_alt: z.string().optional(),
		}),
	}),
};

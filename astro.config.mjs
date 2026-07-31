// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = process.env.SITE_URL || undefined;
const base = process.env.BASE_PATH || undefined;

// https://astro.build/config
export default defineConfig({
	site,
	base,
	integrations: [
		starlight({
			title: 'Informe de avances',
			description:
				'Estado del proyecto, trabajo entregado y próximos pasos. Período abril – julio 2026.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Español', lang: 'es' },
			},
			lastUpdated: true,
			pagination: true,
			sidebar: [
				{ label: 'Inicio', link: '/' },
				{
					label: 'Estado actual',
					items: [{ label: 'Resumen', slug: 'estado/resumen' }],
				},
				{
					label: 'Lo que se entregó',
					items: [{ label: 'Por módulo', slug: 'entregado/modulos' }],
				},
				{ label: 'Trabajo en curso', slug: 'en-curso' },
				{ label: 'Próximos pasos', slug: 'proximos-pasos' },
				{ label: 'Línea de tiempo', slug: 'linea-de-tiempo' },
			],
		}),
	],
});

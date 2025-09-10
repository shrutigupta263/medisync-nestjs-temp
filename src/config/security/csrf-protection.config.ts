import { NestFastifyApplication } from '@nestjs/platform-fastify'

/**
 * Cross-site request forgery (also known as CSRF or XSRF) is a type of malicious exploit of a website where
 * unauthorized commands are transmitted from a user that the web application trusts.
 * @see {@link https://docs.nestjs.com/security/csrf} for further information.
 */
export class CsrfProtectionConfig {
	static async useCsrf(app: NestFastifyApplication) {
		/**
		 * If you use fastify-csrf with fastify-cookie, the CSRF secret will be added to the response cookies.
		 * By default, the cookie used will be named _csrf
		 */
		const fastifyCookie = await import('@fastify/cookie')
		const fastifyCsrf = await import('@fastify/csrf-protection')
		
		await app.register(fastifyCookie.default)
		await app.register(fastifyCsrf.default)
	}
}

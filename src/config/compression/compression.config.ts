import { NestFastifyApplication } from '@nestjs/platform-fastify'

type CompressionType = 'brotli' | 'gzip'

/**
 * By default, fastify-compress will use Brotli compression (on Node >= 11.7.0) when browsers
 * indicate support for the encoding
 * @see {@link https://docs.nestjs.com/techniques/compression} for further information.
 */
export class CompressionConfig {
	static async useCompression(app: NestFastifyApplication, type: CompressionType = 'gzip') {
		const compression = await import('@fastify/compress')
		if (type === 'brotli') await app.register(compression.default as any)
		else if (type === 'gzip') await app.register(compression.default as any, { encodings: ['gzip', 'deflate'] })
	}
}

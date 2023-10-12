module.exports = function (env) {
	console.log("🚀 ~ file: directus.config.js:2 ~ env:", env.DATABASE_URL)
	return {
		// User inputs from railway starter button
		ADMIN_EMAIL: env.ADMIN_EMAIL,
		ADMIN_PASSWORD: env.ADMIN_PASSWORD,
		KEY: env.KEY,
		SECRET: env.SECRET,

		MAX_PAYLOAD_SIZE: "1000mb",

		// Reference: https://docs.railway.app/deploy/exposing-your-app
		PORT: env.PORT,

		// Reference: https://docs.railway.app/develop/variables#railway-provided-variables
		PUBLIC_URL: env.PUBLIC_URL || `https://${env.RAILWAY_STATIC_URL}`,

		// CORS
		CORS_ENABLED: "true",
		CORS_ORIGIN: [
			"http://localhost:3333",
			"https://staging.specialscomedy.com",
			"https://specials-web-app-development.up.railway.app",
			"https://cms.specialscomedy.com",
			"https://specialscomedy.com",
			"https://fb594955.specialscomedy.com",
			"https://cloud.hasura.io",
		],
		CORS_METHODS: "GET, POST, PUT, PATCH, DELETE, OPTIONS",
		CORS_HEADERS: "Content-Type, Authorization",

		// Cache
		CACHE_ENABLED: env.CACHE_ENABLED || "true",
		CACHE_STORE: "redis",
		CACHE_REDIS: env.CACHE_REDIS,

		// Database variables from Railway PostgreSQL Plugin
		// Reference: https://docs.railway.app/plugins/postgresql
		DB_CLIENT: "pg",
		DB_HOST: env.PGHOST,
		DB_PORT: env.PGPORT,
		DB_DATABASE: env.PGDATABASE,
		DB_USER: env.PGUSER,
		DB_PASSWORD: env.PGPASSWORD,
		STORAGE_LOCATIONS: "s3",
		STORAGE_CLOUDINARY_DRIVER: "s3",

		// AWS
		STORAGE_S3_KEY: env.STORAGE_S3_KEY,
		STORAGE_S3_SECRET: env.STORAGE_S3_SECRET,
		STORAGE_S3_REGION: env.STORAGE_S3_REGION,
		STORAGE_S3_BUCKET:  env.STORAGE_S3_BUCKET,
		STORAGE_S3_ENDPOINT: env.STORAGE_S3_ENDPOINT,

		// CLOUDINARY
		// STORAGE_CLOUDINARY_CLOUD_NAME: env.STORAGE_CLOUDINARY_CLOUD_NAME,
		// STORAGE_CLOUDINARY_API_KEY: env.STORAGE_CLOUDINARY_API_KEY,
		// STORAGE_CLOUDINARY_API_SECRET: env.STORAGE_CLOUDINARY_API_SECRET,
		// STORAGE_CLOUDINARY_ACCESS_MODE: "public",
	}
}

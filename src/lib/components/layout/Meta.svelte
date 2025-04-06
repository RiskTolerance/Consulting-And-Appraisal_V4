<script lang="ts">
	let {
		title,
		description,
		ogDescription,
		ogImage,
		ogImageWidth = '1200',
		ogImageHeight = '630',
		twitterTitle,
		twitterDescription,
		twitterImage,
		twitterCardType = 'summary_large_image'
	} = $props<{
		title: string;
		description: string;
		ogDescription: string;
		ogImage: string;
		ogImageWidth?: string;
		ogImageHeight?: string;
		twitterTitle: string;
		twitterDescription: string;
		twitterImage: string;
		twitterCardType?: string;
	}>();

	// Ensure the image URLs are absolute
	const baseUrl = 'https://www.consultingappraisal.com';
	ogImage = ogImage.startsWith('http') ? `${baseUrl}${ogImage}` : ogImage;
	twitterImage = twitterImage.startsWith('http') ? `${baseUrl}${twitterImage}` : twitterImage;
	// favicon = favicon.startsWith('http') ? `${baseUrl}${favicon}` : favicon;
	// favicon512 = favicon512.startsWith('http') ? `${baseUrl}${favicon512}` : favicon512;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={ogDescription} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content={ogImageWidth} />
	<meta property="og:image:height" content={ogImageHeight} />
	<meta property="og:type" content="website" />

	<!-- Twitter -->
	<meta name="twitter:card" content={twitterCardType} />
	<meta name="twitter:title" content={twitterTitle} />
	<meta name="twitter:description" content={twitterDescription} />
	<meta name="twitter:image" content={twitterImage} />

	<!-- Favicon -->
	<!-- <link rel="icon" type="image/webp" href={favicon} sizes="32x32" /> -->
	<!-- <link rel="icon" type="image/webp" href={favicon512} sizes="512x512" /> -->
	<!-- <link rel="apple-touch-icon" href={favicon512} /> -->
</svelte:head>

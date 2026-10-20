/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    // السطرين دول بيخلوا الكود يتجاهل أي أخطاء في الـ TypeScript وينزل الموقع فوراً
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
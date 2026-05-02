import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import AnimatedSection from '@/components/shared/AnimatedSection'
import TextileDivider from '@/components/shared/TextileDivider'
import MailingList from '@/components/home/MailingList'
import Link from 'next/link'

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Hale Textile Studio`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      <section className="pt-36 pb-16 bg-cream textile-bg-cream">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.2em] uppercase text-warm-gray hover:text-terracotta transition-colors duration-200 mb-8"
            >
              ← The Journal
            </Link>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-terracotta mb-4">
              {post.category}
            </p>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-light text-navy mb-6 leading-tight max-w-4xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 font-body text-[12px] tracking-[0.15em] text-warm-gray">
              <span>Meeta Vu</span>
              <span className="text-linen">·</span>
              <span>{formattedDate}</span>
              <span className="text-linen">·</span>
              <span>{post.readTime}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <AnimatedSection delay={0.1}>
              <div className="prose-article">
                <MDXRemote source={post.content} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-warm-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <TextileDivider className="mb-12" />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.2em] uppercase text-navy hover:text-terracotta transition-colors duration-300"
          >
            ← Back to The Journal
          </Link>
        </div>
      </section>

      <MailingList />
    </>
  )
}

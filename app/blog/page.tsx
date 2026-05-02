import { getAllPosts } from '@/lib/blog'
import PageHero from '@/components/shared/PageHero'
import AnimatedSection from '@/components/shared/AnimatedSection'
import TextileDivider from '@/components/shared/TextileDivider'
import MailingList from '@/components/home/MailingList'
import Link from 'next/link'

export const metadata = {
  title: 'The Journal | Hale Textile Studio',
  description: 'Design notes on fabric, wallpaper, furniture, and the art of living beautifully in Hawaii.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <PageHero
        eyebrow="The Journal"
        headline="Design Notes for the Island Home"
        subheadline="Perspectives on fabric, form, and the art of living beautifully in Hawaii."
      />

      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {posts.map((post, i) => {
              const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })
              return (
                <AnimatedSection key={post.slug} delay={i * 0.1}>
                  <article className="group">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="border-t border-linen pt-8">
                        <p className="font-body text-[10px] tracking-[0.35em] uppercase text-terracotta mb-3">
                          {post.category}
                        </p>
                        <p className="font-body text-[11px] tracking-[0.1em] text-warm-gray mb-4">
                          {formattedDate} · {post.readTime}
                        </p>
                        <h2 className="font-display text-2xl lg:text-3xl font-light text-navy mb-4 leading-snug group-hover:text-terracotta transition-colors duration-300">
                          {post.title}
                        </h2>
                        <p className="font-body text-sm font-light text-warm-gray leading-relaxed mb-6">
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.2em] uppercase text-terracotta group-hover:gap-3 transition-all duration-300">
                          Read Article <span>→</span>
                        </span>
                      </div>
                    </Link>
                  </article>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pb-4 bg-warm-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <TextileDivider />
        </div>
      </section>

      <MailingList />
    </>
  )
}

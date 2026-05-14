import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Phone } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import SectionHeading from '../components/ui/SectionHeading';
import profile from '../data/profile.json';
import { ANIMATION_VARIANTS } from '../utils/constants';
import { useToast } from '../hooks/useToast';
import ToastContainer from '../components/ui/ToastContainer';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const { toasts, addToast, removeToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToast('Message sent successfully! (UI only)', 'success');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Get in Touch" subtitle="Have a project in mind? Let's talk about it." />

          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            <motion.div
              initial={ANIMATION_VARIANTS.fadeInUp.initial}
              whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
              viewport={{ once: true }}
              className="space-y-6 lg:col-span-2"
            >
              <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-lg font-semibold text-slate-200">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Email</div>
                      <a href={`mailto:${profile.email}`} className="text-sm text-slate-300 hover:text-teal-400">{profile.email}</a>
                    </div>
                  </div>
                  {'phone' in profile && (
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Phone</div>
                        <a href={`tel:${(profile as any).phone}`} className="text-sm text-slate-300 hover:text-teal-400">{(profile as any).phone}</a>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Location</div>
                      <span className="text-sm text-slate-300">{profile.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-lg font-semibold text-slate-200">Social Links</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: profile.social.github, label: 'GitHub' },
                    { icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn' },
                    { icon: Twitter, href: profile.social.twitter, label: 'Twitter' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-700/50 text-slate-400 transition-colors hover:bg-teal-600 hover:text-white"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={ANIMATION_VARIANTS.fadeInUp.initial}
              whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm sm:p-8">
                <h3 className="mb-6 text-lg font-semibold text-slate-200">Send a Message</h3>
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-400">Name</label>
                      <Input
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-400">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-400">Subject</label>
                    <Input
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-400">Message</label>
                    <textarea
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 transition-colors focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500/50"
                    />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto">
                    <Send className="h-4 w-4" /> Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </>
  );
}

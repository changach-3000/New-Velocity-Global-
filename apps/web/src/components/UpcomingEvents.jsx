import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Globe, Ticket, CreditCard, Mail, ArrowRight } from 'lucide-react';

const EVENTS = [
  {
    id: 1,
    badge: '🔴 Registering Now',
    title: 'Profitable Equipment Leasing Masterclass',
    subtitle: 'Webinar Series',
    dateRange: 'May 15 – 19, 2026',
    dateSub: 'Friday to Tuesday · 5 days',
    time: '10:00 AM – 12:00 PM EAT',
    timeSub: 'Daily sessions, 2 hours each',
    location: 'Online · Zoom',
    locationSub: 'Open to global participants',
    deadline: 'May 14, 2026',
    targetDate: new Date('2026-05-15T10:00:00+03:00'),
    tickets: [
      {
        region: '🇰🇪 Kenya / East Africa',
        name: 'Pay in KES via Zenlipa',
        url: 'https://zenlipa.co.ke/events/y23njE',
        label: 'Book Now (KES)',
        primary: true,
        icon: Ticket,
      },
      {
        region: '🌍 International Participants',
        name: 'Pay in USD via Paystack',
        url: 'https://paystack.shop/pay/bov5h2pm1d',
        label: 'Book Now (USD)',
        primary: false,
        icon: CreditCard,
      },
    ],
  },
];

function useCountdown(targetDate) {
  const calc = () => {
    const diff = targetDate - new Date();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return time;
}

function pad(n) {
  return String(n).padStart(2, '0');
}

function CountdownBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-500/10 border border-blue-500/20 rounded-xl px-3 py-2 min-w-[52px]">
      <span className="text-2xl font-extrabold text-white leading-none">{pad(value)}</span>
      <span className="text-[9px] text-slate-500 uppercase tracking-widest mt-1">{label}</span>
    </div>
  );
}

function EventCard({ event }) {
  const { d, h, m, s } = useCountdown(event.targetDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-[#0f1b35] to-[#0a1628] border border-blue-500/20 rounded-2xl overflow-hidden max-w-3xl mx-auto"
    >
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />

      <div className="grid md:grid-cols-1">
        {/* Left column */}
        <div className="p-8 md:p-10">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-red-400 bg-red-400/10 border border-red-400/25 px-3 py-1 rounded-full mb-5">
            {event.badge}
          </span>

          <h3 className="text-2xl font-extrabold text-white leading-tight mb-1">{event.title}</h3>
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-6">{event.subtitle}</p>

          <div className=" gap-3 mb-7">
            {[
              { Icon: Calendar, strong: event.dateRange, sub: event.dateSub },
              { Icon: Clock, strong: event.time, sub: event.timeSub },
              { Icon: Globe, strong: event.location, sub: event.locationSub },
            ].map(({ Icon, strong, sub }) => (
              <div key={strong} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-blue-400" />
                </div>
                <div className="pt-1 text-sm">
                  <span className="block font-medium text-slate-200">{strong}</span>
                  <span className="text-slate-500 text-xs">{sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Countdown */}
          <div className="flex gap-2">
            <CountdownBlock value={d} label="Days" />
            <CountdownBlock value={h} label="Hrs" />
            <CountdownBlock value={m} label="Min" />
            <CountdownBlock value={s} label="Sec" />
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-blue-500/10 self-stretch" />

        {/* Right column */}
        <div className="p-8 md:p-10 justify-between">
          <div>
            <p className="text-[11px] font-semibold text-slate-600 uppercase tracking-[2px] mb-5">
              Get Your Ticket
            </p>

            {event.tickets.map((t) => (
              <div
                key={t.url}
                className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 mb-3"
              >
                <p className="text-[11px] text-slate-500 uppercase tracking-[1.5px] mb-1">{t.region}</p>
                <p className="text-sm font-medium text-slate-300 mb-3">{t.name}</p>
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                    t.primary
                      ? 'bg-gradient-to-r from-blue-700 to-blue-600 text-white hover:from-blue-800 hover:to-blue-700'
                      : 'border border-blue-500/35 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400/60'
                  }`}
                >
                  <t.icon className="w-4 h-4" />
                  {t.label}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl">
            <p className="text-xs text-slate-500 leading-relaxed">
              Limited spots available. Secure your place before{' '}
              <span className="text-slate-400 font-medium">{event.deadline}</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 px-8 py-4 border-t border-blue-500/10">
        <Mail className="w-3.5 h-3.5 text-blue-500" />
        <span className="text-xs text-slate-500">Questions? Contact us at</span>
        <a
          href="mailto:info@velocitygloballeasing.com"
          className="text-xs text-blue-400 hover:underline"
        >
          info@velocitygloballeasing.com
        </a>
      </div>
    </motion.div>
  );
}

const UpcomingEvents = () => {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-[2px] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Upcoming Events
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Live Masterclasses
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-xl mx-auto">
            Join industry experts for hands-on training in equipment leasing &amp; finance.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
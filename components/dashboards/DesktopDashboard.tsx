'use client'

import React from 'react'
import { ST, STMark, STWordmark, Icon, IconName, MentalHexagon, PulseChart, PathBar } from './lib'

const navItems: { id: string; label: string; icon: IconName }[] = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'chat', label: 'Triad Chat', icon: 'chat' },
  { id: 'pulse', label: 'Pulse', icon: 'pulse' },
  { id: 'mental', label: 'Mental Strength', icon: 'brain' },
  { id: 'development', label: 'Development', icon: 'spark' },
  { id: 'metrics', label: 'Metrics', icon: 'metric' },
  { id: 'map', label: 'Player Map', icon: 'map' },
  { id: 'journal', label: 'Journal', icon: 'journal' },
  { id: 'nudges', label: 'Nudges', icon: 'bell' },
  { id: 'plans', label: 'Plans', icon: 'plan' },
]

function IconBtn({ icon }: { icon: IconName }) {
  return (
    <div style={{ width: 26, height: 26, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: ST.darkMute }}>
      <Icon name={icon} size={15} />
    </div>
  )
}

function SectionLabel({ children, right }: { children: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 10.5, letterSpacing: 0.4, color: ST.darkMute, padding: '0 6px 8px' }}>
      <span>{children}</span>{right}
    </div>
  )
}

function NavRow({ item, active }: { item: typeof navItems[number]; active: boolean }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '7px 10px', borderRadius: 7,
      background: active ? 'rgba(245,243,236,0.07)' : 'transparent',
      color: active ? ST.darkInk : ST.darkMute,
    }}>
      <Icon name={item.icon} size={15} />
      <span style={{ fontSize: 13, fontWeight: active ? 500 : 400 }}>{item.label}</span>
    </div>
  )
}

function PillBtn({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <button style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '8px 14px', borderRadius: 999,
      fontSize: 12.5, fontWeight: 500,
      fontFamily: 'inherit',
      border: '1px solid ' + (primary ? ST.navy : ST.paperLine),
      background: primary ? ST.navy : '#fff',
      color: primary ? ST.bone : ST.paperInk,
    }}>{children}</button>
  )
}

function StatCard({ label, value, delta, sublabel, accent }: { label: string; value: string; delta: string; sublabel: string; accent: string }) {
  return (
    <div style={{
      background: '#fff', border: '1px solid ' + ST.paperLine, borderRadius: 12,
      padding: 14, display: 'flex', flexDirection: 'column', gap: 4, minHeight: 108,
      position: 'relative',
    }}>
      <div style={{ fontSize: 10, letterSpacing: 1.4, color: ST.paperMute }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 2 }}>
        <div style={{ fontSize: 30, fontWeight: 500, letterSpacing: -0.5, fontFamily: 'var(--font-instrument-serif), serif', color: ST.paperInk }}>{value}</div>
        <div style={{ fontSize: 11, color: accent, fontVariantNumeric: 'tabular-nums' }}>{delta}</div>
      </div>
      <div style={{ fontSize: 11.5, color: ST.paperMute, marginTop: 'auto' }}>{sublabel}</div>
      <div style={{ position: 'absolute', top: 0, left: 14, right: 14, height: 2, background: accent, borderRadius: 2, opacity: 0.8 }} />
    </div>
  )
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: ST.paperMute }}>
      <span style={{ width: 8, height: 8, borderRadius: 999, background: color }} />
      <span>{label}</span>
    </div>
  )
}

function PathStat({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div style={{ border: '1px solid ' + ST.paperLine, borderRadius: 8, padding: 10 }}>
      <div style={{ fontSize: 9, letterSpacing: 0.8, color: ST.paperMute, textTransform: 'uppercase' }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 600, color, marginTop: 2, fontFamily: 'var(--font-instrument-serif), serif' }}>{value}</div>
      <div style={{ fontSize: 10.5, color: ST.paperMute }}>{sub}</div>
    </div>
  )
}

export default function DesktopDashboard() {
  return (
    <div style={{
      width: 1440, height: 900, background: '#0B0D10',
      fontFamily: 'Inter, system-ui, sans-serif', color: ST.darkInk,
      display: 'flex', borderRadius: 14, overflow: 'hidden',
      boxShadow: '0 30px 80px rgba(0,0,0,0.35)',
    }}>
      {/* Sidebar */}
      <aside style={{
        width: 232, background: '#0E1114', borderRight: '1px solid ' + ST.darkLine,
        display: 'flex', flexDirection: 'column', padding: '18px 14px 16px',
      }}>
        <div style={{ padding: '4px 6px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <STMark size={22} color={ST.bone} />
          <div style={{ display: 'flex', gap: 6 }}>
            <IconBtn icon="sidebar" />
            <IconBtn icon="plus" />
          </div>
        </div>

        <SectionLabel>Navigation</SectionLabel>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 18 }}>
          {navItems.map(n => <NavRow key={n.id} item={n} active={n.id === 'home'} />)}
        </nav>

        <SectionLabel right={<span style={{ fontSize: 11, color: ST.darkMute }}>+ New</span>}>Chat history</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {['Before Tuesday match', 'Dealing with pressure', 'Pre-game routine', 'After the mistake'].map((t, i) => (
            <div key={i} style={{
              fontSize: 12.5, color: i === 0 ? ST.darkInk : ST.darkMute,
              padding: '7px 10px', borderRadius: 6,
              background: i === 0 ? 'rgba(255,255,255,0.04)' : 'transparent',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>{t}</div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid ' + ST.darkLine, display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 999, background: ST.navy,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 11, fontWeight: 600, color: ST.bone, letterSpacing: 0.3,
          }}>MR</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12.5, fontWeight: 500 }}>Mark Rivera</div>
            <div style={{ fontSize: 11, color: ST.darkMute }}>U14 · Winger</div>
          </div>
          <Icon name="gear" size={15} color={ST.darkMute} />
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#0B0D10' }}>
        <div style={{
          height: 52, borderBottom: '1px solid ' + ST.darkLine,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name="sidebar" size={16} color={ST.darkMute} />
            <span style={{ fontSize: 12, color: ST.darkMute }}>Home</span>
            <Icon name="chevron-right" size={12} color={ST.darkMute} />
            <span style={{ fontSize: 12.5, color: ST.darkInk }}>Tuesday · April 21</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <STWordmark color={ST.bone} size={12} gap={7} />
            <div style={{ width: 1, height: 18, background: ST.darkLine }} />
            <Icon name="moon" size={15} color={ST.darkMute} />
          </div>
        </div>

        <div style={{ flex: 1, background: ST.paper, color: ST.paperInk, overflow: 'hidden', position: 'relative' }}>
          <div style={{ padding: '28px 32px 24px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 20 }}>

            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: 1.6, color: ST.paperMute, textTransform: 'uppercase', marginBottom: 6 }}>Good morning, Mark</div>
                <h1 style={{
                  margin: 0, fontSize: 30, fontWeight: 500, letterSpacing: -0.4,
                  fontFamily: 'var(--font-instrument-serif), "Times New Roman", serif', color: ST.paperInk,
                }}>
                  Match day <span style={{ color: ST.navy, fontStyle: 'italic' }}>minus two</span>. Let&apos;s sharpen the edges.
                </h1>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <PillBtn>Log a session</PillBtn>
                <PillBtn primary>Open Triad <Icon name="arrow-right" size={13} /></PillBtn>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1.35fr', gap: 12 }}>
              <StatCard label="POTENTIAL SCORE" value="46.1" delta="+2.3 · 90d" sublabel="Top 38% of U14 wingers" accent={ST.navy} />
              <StatCard label="MENTAL PULSE" value="7.2" delta="+0.4 · wk" sublabel="3-day moving avg" accent={ST.green} />
              <StatCard label="PRO PROBABILITY" value="17%" delta="→ 27.8%" sublabel="with 6-mo training plan" accent={ST.blue} />
              <div style={{ background: '#fff', border: '1px solid ' + ST.paperLine, borderRadius: 12, padding: 14, display: 'flex', gap: 12, alignItems: 'center' }}>
                <MentalHexagon size={150} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 10, letterSpacing: 1.4, color: ST.paperMute, marginBottom: 4 }}>MENTAL STRENGTH</div>
                  <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>6.4 / 10 composite</div>
                  {[
                    { k: 'Intrinsic drive', v: 7.8, color: ST.green, focus: false },
                    { k: 'Resilience', v: 5.4, color: ST.amber, focus: true },
                    { k: 'Self-regulation', v: 4.6, color: ST.red, focus: true },
                  ].map(r => (
                    <div key={r.k} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, marginBottom: 3 }}>
                      <span style={{ width: 6, height: 6, borderRadius: 999, background: r.color }} />
                      <span style={{ flex: 1, color: ST.paperInk }}>{r.k}</span>
                      <span style={{ color: ST.paperMute, fontVariantNumeric: 'tabular-nums' }}>{r.v.toFixed(1)}</span>
                      {r.focus && <span style={{ fontSize: 9, letterSpacing: 0.8, color: ST.navy, background: 'oklch(93% 0.04 240)', padding: '1px 6px', borderRadius: 3 }}>FOCUS</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 12 }}>
              <div style={{
                background: ST.navy, color: ST.bone, borderRadius: 12, padding: 18,
                display: 'flex', flexDirection: 'column', gap: 14, position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <STMark size={16} color={ST.bone} />
                    <span style={{ fontSize: 10, letterSpacing: 1.6 }}>TRIAD · MENTAL COACH</span>
                  </div>
                  <span style={{ fontSize: 11, opacity: 0.7 }}>Based on your last 3 check-ins</span>
                </div>
                <div style={{ fontFamily: 'var(--font-instrument-serif), serif', fontSize: 22, lineHeight: 1.3, letterSpacing: -0.2 }}>
                  &ldquo;You mentioned nerves before the last match. Let&apos;s build a <span style={{ fontStyle: 'italic' }}>60-second reset</span> routine you can use on the pitch.&rdquo;
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['Pre-game nerves', 'After a mistake', 'Staying focused 2nd half', 'Visualize Saturday'].map((t, i) => (
                    <button key={i} style={{
                      background: 'rgba(245,243,236,0.08)', color: ST.bone,
                      border: '1px solid rgba(245,243,236,0.18)', borderRadius: 999,
                      padding: '6px 12px', fontSize: 11.5, fontFamily: 'inherit',
                    }}>{t}</button>
                  ))}
                </div>
                <div style={{
                  marginTop: 'auto', background: 'rgba(0,0,0,0.22)', borderRadius: 10,
                  padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10,
                  border: '1px solid rgba(245,243,236,0.1)',
                }}>
                  <span style={{ flex: 1, fontSize: 13, opacity: 0.6 }}>Ask anything about sports psychology…</span>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: ST.bone, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="send" size={14} color={ST.navy} />
                  </div>
                </div>
              </div>

              <div style={{ background: '#fff', border: '1px solid ' + ST.paperLine, borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
                  <div style={{ fontSize: 10, letterSpacing: 1.6, color: ST.paperMute }}>TODAY&apos;S PLAN</div>
                  <div style={{ fontSize: 11, color: ST.navy }}>Open plan →</div>
                </div>
                {[
                  { t: '08:00', label: 'Morning pulse check-in', tag: 'Mental', color: ST.navy, done: true, focus: false },
                  { t: '16:30', label: 'Ball control — 20 min', tag: 'Dribbling', color: ST.green, done: false, focus: false },
                  { t: '17:15', label: '60-second breath reset drill', tag: 'Self-reg', color: ST.amber, done: false, focus: true },
                  { t: '21:00', label: 'Evening journal — how it felt', tag: 'Journal', color: ST.paperMute, done: false, focus: false },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid ' + ST.paperLineSoft,
                  }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: 4,
                      border: '1.4px solid ' + (item.done ? ST.green : ST.paperLine),
                      background: item.done ? ST.green : '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      {item.done && <Icon name="check" size={12} color="#fff" strokeWidth={2.5} />}
                    </div>
                    <div style={{ fontSize: 11, color: ST.paperMute, width: 42, fontVariantNumeric: 'tabular-nums' }}>{item.t}</div>
                    <div style={{ flex: 1, fontSize: 13, color: item.done ? ST.paperMute : ST.paperInk, textDecoration: item.done ? 'line-through' : 'none' }}>{item.label}</div>
                    <div style={{
                      fontSize: 10, letterSpacing: 0.5, padding: '2px 7px', borderRadius: 3,
                      background: item.focus ? 'oklch(94% 0.05 75)' : 'transparent',
                      border: '1px solid ' + ST.paperLine, color: item.color,
                    }}>{item.tag}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 12, minHeight: 0, flex: 1 }}>
              <div style={{ background: '#fff', border: '1px solid ' + ST.paperLine, borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 4 }}>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: 1.6, color: ST.paperMute }}>PULSE · LAST 30 DAYS</div>
                    <div style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>Confidence is trending up</div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: 11 }}>
                    <Legend color={ST.navy} label="Confidence" />
                    <Legend color={ST.amber} label="Anxiety" />
                    <Legend color={ST.green} label="Focus" />
                  </div>
                </div>
                <div style={{ flex: 1, marginTop: 4 }}>
                  <PulseChart />
                </div>
              </div>

              <div style={{ background: '#fff', border: '1px solid ' + ST.paperLine, borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: 10, letterSpacing: 1.6, color: ST.paperMute }}>DEVELOPMENT · 12-MONTH TRAJECTORY</div>
                  <div style={{ fontSize: 11, color: ST.navy }}>Pathways →</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                  <PathStat label="Similar players" value="512" sub="went on to D1" color={ST.navy} />
                  <PathStat label="1-yr upside" value="+7%" sub="toward D1" color={ST.green} />
                  <PathStat label="Within reach" value="D3" sub="65% match" color={ST.paperInk} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: 4 }}>
                  {[
                    { label: 'Prof. Potential', now: 11, plan: 4 },
                    { label: 'NCAA D1', now: 28, plan: 7 },
                    { label: 'NCAA D3', now: 58, plan: 6 },
                    { label: 'Academy top tier', now: 71, plan: 5 },
                  ].map(r => <PathBar key={r.label} {...r} />)}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}

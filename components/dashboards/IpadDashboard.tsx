'use client'

import React from 'react'
import { ST, STMark, STWordmark, Icon, IconName, MentalHexagon, PerformanceRadar, PathBar } from './lib'

const tabs: { id: string; label: string; icon: IconName }[] = [
  { id: 'overview', label: 'OVERVIEW', icon: 'home' },
  { id: 'pathways', label: 'PATHWAYS', icon: 'spark' },
  { id: 'development', label: 'DEVELOPMENT', icon: 'plan' },
  { id: 'mental', label: 'MENTAL', icon: 'brain' },
  { id: 'metrics', label: 'METRICS', icon: 'metric' },
  { id: 'map', label: 'AI MAP', icon: 'map' },
]

function Card({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: '#fff', border: '1px solid ' + ST.paperLine, borderRadius: 14,
      padding: 16, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: 1.4, color: ST.paperMute, fontWeight: 600 }}>{title}</div>
          {subtitle && <div style={{ fontSize: 12, color: ST.paperInk, marginTop: 2 }}>{subtitle}</div>}
        </div>
        <Icon name="plus" size={14} color={ST.paperMute} />
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>{children}</div>
    </div>
  )
}

function MiniStat({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div style={{ flex: 1, border: '1px solid ' + ST.paperLine, borderRadius: 10, padding: 10 }}>
      <div style={{ fontSize: 9, letterSpacing: 0.8, color: ST.paperMute, textTransform: 'uppercase' }}>{label}</div>
      <div style={{ fontSize: 19, fontWeight: 600, color, marginTop: 2, fontFamily: 'var(--font-instrument-serif), serif' }}>{value}</div>
      <div style={{ fontSize: 10.5, color: ST.paperMute }}>{sub}</div>
    </div>
  )
}

export default function IpadDashboard() {
  const activeTab = 'overview'
  return (
    <div style={{
      position: 'relative', width: 1194, height: 834,
      background: '#111417', borderRadius: 42, padding: 14,
      boxShadow: '0 25px 60px rgba(0,0,0,0.35)', boxSizing: 'border-box',
    }}>
      <div style={{ position: 'absolute', top: 22, left: '50%', transform: 'translateX(-50%)', width: 8, height: 8, borderRadius: 999, background: '#000', border: '1px solid #222' }} />
      <div style={{
        width: '100%', height: '100%', borderRadius: 30, overflow: 'hidden',
        background: ST.paper, display: 'flex', flexDirection: 'column',
        fontFamily: 'Inter, system-ui, sans-serif', color: ST.paperInk,
      }}>
        <div style={{
          height: 62, padding: '0 24px', display: 'flex', alignItems: 'center', gap: 18,
          background: '#fff', borderBottom: '1px solid ' + ST.paperLine,
        }}>
          <STWordmark color={ST.navy} size={13} gap={7} />
          <div style={{ width: 1, height: 22, background: ST.paperLine, marginLeft: 8 }} />
          <div style={{ display: 'flex', gap: 4, background: ST.paper, border: '1px solid ' + ST.paperLine, borderRadius: 999, padding: 3 }}>
            {tabs.map(t => (
              <button key={t.id} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '7px 14px', borderRadius: 999, fontSize: 11, letterSpacing: 1.2,
                fontWeight: 600, border: 'none',
                background: activeTab === t.id ? ST.navy : 'transparent',
                color: activeTab === t.id ? ST.bone : ST.paperMute,
                fontFamily: 'inherit',
              }}>
                <Icon name={t.icon} size={13} />
                {t.label}
              </button>
            ))}
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11.5, color: ST.paperMute }}>
              <span>U14</span>
              <div style={{ width: 28, height: 16, borderRadius: 999, background: ST.navy, position: 'relative' }}>
                <div style={{ position: 'absolute', top: 2, right: 2, width: 12, height: 12, borderRadius: 999, background: '#fff' }} />
              </div>
              <span>U16</span>
            </div>
            <div style={{
              width: 30, height: 30, borderRadius: 999, background: ST.navy,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10.5, fontWeight: 600, color: ST.bone,
            }}>AO</div>
          </div>
        </div>

        <div style={{ flex: 1, padding: '18px 24px 24px', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{
            background: '#fff', border: '1px solid ' + ST.paperLine, borderRadius: 14,
            padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 18,
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: 999,
              background: 'repeating-linear-gradient(45deg, #E8E4D8 0 4px, #F5F3EC 4px 8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, fontWeight: 700, color: ST.navy, border: '1px solid ' + ST.paperLine,
            }}>AO</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, letterSpacing: 1.4, color: ST.paperMute }}>PLAYER SNAPSHOT</div>
              <div style={{ fontSize: 22, fontWeight: 500, fontFamily: 'var(--font-instrument-serif), serif', marginTop: 2 }}>
                Aidan O&apos;Connor <span style={{ color: ST.paperMute, fontStyle: 'italic', fontSize: 16 }}>· Winger · U14</span>
              </div>
            </div>
            {[
              { l: 'AGE', v: '13.5y', color: undefined as string | undefined },
              { l: 'BIOLOGICAL', v: '13.2y', color: ST.blue },
              { l: 'MATURITY', v: '72%', color: ST.blue },
              { l: 'ADULT HEIGHT', v: '5\'9"–5\'11"', color: undefined },
              { l: 'POSITION FIT', v: 'Winger', color: ST.green },
            ].map(s => (
              <div key={s.l} style={{ borderLeft: '1px solid ' + ST.paperLineSoft, paddingLeft: 14 }}>
                <div style={{ fontSize: 9, letterSpacing: 0.9, color: ST.paperMute }}>{s.l}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: s.color || ST.paperInk, marginTop: 2, fontVariantNumeric: 'tabular-nums' }}>{s.v}</div>
              </div>
            ))}
          </div>

          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 14, minHeight: 0 }}>
            <Card title="MENTAL STRENGTH" subtitle="Composite 6.4 · 2 focus areas">
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', height: '100%' }}>
                <MentalHexagon size={190} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {[
                    { k: 'Intrinsic drive', v: 7.8, color: ST.green, focus: false },
                    { k: 'Resilience', v: 5.4, color: ST.amber, focus: true },
                    { k: 'Self-regulation', v: 4.6, color: ST.red, focus: true },
                    { k: 'Coachability', v: 7.2, color: ST.green, focus: false },
                    { k: 'Team orientation', v: 7.0, color: ST.green, focus: false },
                    { k: 'Competitive mentality', v: 6.0, color: ST.amber, focus: false },
                  ].map(r => (
                    <div key={r.k} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11.5 }}>
                      <span style={{ width: 5, height: 5, borderRadius: 999, background: r.color }} />
                      <span style={{ flex: 1 }}>{r.k}</span>
                      {r.focus && <span style={{ fontSize: 8.5, letterSpacing: 0.7, color: ST.navy, background: 'oklch(93% 0.04 240)', padding: '1px 5px', borderRadius: 3, fontWeight: 600 }}>FOCUS</span>}
                      <span style={{ color: ST.paperMute, fontVariantNumeric: 'tabular-nums', fontWeight: 600, width: 28, textAlign: 'right' }}>{r.v.toFixed(1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card title="PERFORMANCE · PROJECTED IMPACT" subtitle="Current vs 6-month plan">
              <div style={{ display: 'flex', gap: 10, height: '100%' }}>
                <PerformanceRadar size={230} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6 }}>
                  {[
                    { k: 'Agility', a: 5.5, b: 5.6, hero: false },
                    { k: 'Dribbling', a: 4.9, b: 5.1, hero: false },
                    { k: 'Acceleration', a: 5.5, b: 5.5, hero: false },
                    { k: 'Max speed', a: 5.3, b: 5.3, hero: false },
                    { k: 'Ball feel', a: 3.8, b: 5.5, hero: true },
                    { k: 'Game impact', a: 4.4, b: 4.4, hero: false },
                  ].map(m => (
                    <div key={m.k} style={{ display: 'flex', alignItems: 'center', fontSize: 11.5, gap: 6 }}>
                      <span style={{ flex: 1, color: m.hero ? ST.paperInk : ST.paperMute, fontWeight: m.hero ? 600 : 400 }}>{m.k}</span>
                      <span style={{ color: ST.paperMute, fontVariantNumeric: 'tabular-nums', fontSize: 11 }}>{m.a.toFixed(1)}</span>
                      <Icon name="arrow-right" size={10} color={ST.paperMute} />
                      <span style={{ color: m.b > m.a ? ST.green : ST.paperMute, fontVariantNumeric: 'tabular-nums', fontWeight: 600, fontSize: 11 }}>{m.b.toFixed(1)}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: 8, padding: 8, background: ST.paper, borderRadius: 8, display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
                    <div>
                      <div style={{ color: ST.paperMute, fontSize: 9, letterSpacing: 0.8 }}>POTENTIAL</div>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>32.2 <span style={{ color: ST.paperMute }}>→</span> <span style={{ color: ST.green }}>55.6</span></div>
                    </div>
                    <div>
                      <div style={{ color: ST.paperMute, fontSize: 9, letterSpacing: 0.8 }}>PRO PROB</div>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>17.0% <span style={{ color: ST.paperMute }}>→</span> <span style={{ color: ST.green }}>27.8%</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div style={{
              background: ST.navy, color: ST.bone, borderRadius: 14, padding: 18,
              display: 'flex', flexDirection: 'column', gap: 10, position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <STMark size={15} color={ST.bone} />
                  <span style={{ fontSize: 9.5, letterSpacing: 1.6, fontWeight: 600 }}>TRIAD · AI MENTAL COACH</span>
                </div>
                <Icon name="sun" size={14} color={ST.bone} />
              </div>
              <div style={{ fontFamily: 'var(--font-instrument-serif), serif', fontSize: 19, lineHeight: 1.3 }}>
                &ldquo;Resilience came up twice this week. Let&apos;s put a <em>15-second reset</em> in your toolkit for after mistakes.&rdquo;
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Pre-game nerves', 'After a mistake', 'Focus 2nd half', 'Visualize Saturday'].map(t => (
                  <div key={t} style={{
                    background: 'rgba(245,243,236,0.08)', border: '1px solid rgba(245,243,236,0.16)',
                    padding: '5px 10px', borderRadius: 999, fontSize: 10.5,
                  }}>{t}</div>
                ))}
              </div>
              <div style={{
                marginTop: 'auto', background: 'rgba(0,0,0,0.22)', borderRadius: 10,
                padding: '9px 12px', display: 'flex', alignItems: 'center', gap: 10,
                border: '1px solid rgba(245,243,236,0.1)',
              }}>
                <span style={{ flex: 1, fontSize: 12, opacity: 0.65 }}>Ask anything…</span>
                <div style={{ width: 26, height: 26, borderRadius: 7, background: ST.bone, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="send" size={12} color={ST.navy} />
                </div>
              </div>
            </div>

            <Card title="PATHWAYS · 12-MONTH TRAJECTORY" subtitle="Where Aidan is today vs. his upside">
              <div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                <MiniStat label="Similar players" value="512" sub="went to D1" color={ST.navy} />
                <MiniStat label="1-yr upside" value="+7%" sub="toward D1" color={ST.green} />
                <MiniStat label="Closest benchmark" value="D3" sub="65% within reach" color={ST.paperInk} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1, justifyContent: 'center' }}>
                {[
                  { label: 'Professional Potential', now: 11, plan: 4 },
                  { label: 'NCAA Division 1', now: 28, plan: 7 },
                  { label: 'NCAA Division 3', now: 58, plan: 6 },
                  { label: 'Academy top tier', now: 71, plan: 5 },
                ].map(r => <PathBar key={r.label} {...r} />)}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

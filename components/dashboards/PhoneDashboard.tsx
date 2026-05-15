'use client'

import React from 'react'
import { ST, STMark, Icon, IconName, MentalHexagon, PathBar, MiniSpark } from './lib'

function Ic({ icon }: { icon: IconName }) {
  return (
    <div style={{
      width: 34, height: 34, borderRadius: 999, background: '#fff',
      border: '1px solid ' + ST.paperLine, display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <Icon name={icon} size={15} color={ST.paperInk} />
    </div>
  )
}

function MiniPanel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#fff', border: '1px solid ' + ST.paperLine, borderRadius: 14, padding: 12, minHeight: 96 }}>
      {children}
    </div>
  )
}

function Section({ title, action, children }: { title: string; action?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0 2px 8px' }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: ST.paperInk }}>{title}</div>
        {action && <div style={{ fontSize: 11, color: ST.navy }}>{action}</div>}
      </div>
      {children}
    </div>
  )
}

function MiniStatSm({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div style={{ flex: 1, border: '1px solid ' + ST.paperLine, borderRadius: 8, padding: 8 }}>
      <div style={{ fontSize: 8, letterSpacing: 0.8, color: ST.paperMute }}>{label}</div>
      <div style={{ fontSize: 16, fontWeight: 600, color, fontFamily: 'var(--font-instrument-serif), serif', marginTop: 2 }}>{value}</div>
      <div style={{ fontSize: 9.5, color: ST.paperMute }}>{sub}</div>
    </div>
  )
}

function StatusBar() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '21px 24px 6px', boxSizing: 'border-box',
      position: 'relative', zIndex: 20, width: '100%',
    }}>
      <span style={{
        fontFamily: '-apple-system, "SF Pro", system-ui', fontWeight: 590,
        fontSize: 17, lineHeight: '22px', color: '#000',
      }}>9:41</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="19" height="12" viewBox="0 0 19 12">
          <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill="#000"/>
          <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill="#000"/>
          <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill="#000"/>
          <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill="#000"/>
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12">
          <path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill="#000"/>
          <path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill="#000"/>
          <circle cx="8.5" cy="10.5" r="1.5" fill="#000"/>
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke="#000" strokeOpacity="0.35" fill="none"/>
          <rect x="2" y="2" width="20" height="9" rx="2" fill="#000"/>
          <path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z" fill="#000" fillOpacity="0.4"/>
        </svg>
      </div>
    </div>
  )
}

export default function PhoneDashboard() {
  const activeTab = 'home'
  const W = 402
  const H = 874
  return (
    <div style={{
      position: 'relative', padding: 6, borderRadius: 54,
      background: 'linear-gradient(150deg, #2f3136 0%, #18191c 50%, #2f3136 100%)',
      boxShadow: '0 35px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.5), 0 0 0 1px #0a0b0d',
      width: 'fit-content',
    }}>
      <div style={{ position: 'absolute', left: -2.5, top: 108, width: 3, height: 26, borderRadius: 1.5, background: 'linear-gradient(90deg, #4a4d52 0%, #26282c 100%)', zIndex: 100 }} />
      <div style={{ position: 'absolute', left: -2.5, top: 160, width: 3, height: 52, borderRadius: 1.5, background: 'linear-gradient(90deg, #4a4d52 0%, #26282c 100%)', zIndex: 100 }} />
      <div style={{ position: 'absolute', left: -2.5, top: 224, width: 3, height: 52, borderRadius: 1.5, background: 'linear-gradient(90deg, #4a4d52 0%, #26282c 100%)', zIndex: 100 }} />
      <div style={{ position: 'absolute', right: -2.5, top: 180, width: 3, height: 86, borderRadius: 1.5, background: 'linear-gradient(270deg, #4a4d52 0%, #26282c 100%)', zIndex: 100 }} />

      <div style={{
        width: W, height: H, borderRadius: 48, overflow: 'hidden',
        position: 'relative', background: '#F2F2F7',
        boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
        fontFamily: '-apple-system, system-ui, sans-serif',
      }}>
        {/* dynamic island */}
        <div style={{ position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)', width: 126, height: 37, borderRadius: 24, background: '#000', zIndex: 50 }} />
        {/* status bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
          <StatusBar />
        </div>

        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{
            flex: 1, overflow: 'hidden', background: ST.paper,
            display: 'flex', flexDirection: 'column',
            fontFamily: 'Inter, system-ui, sans-serif', color: ST.paperInk,
            paddingTop: 50,
          }}>
            <div style={{ flex: 1, overflow: 'hidden', padding: '4px 18px 14px' }}>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0 14px' }}>
                <div>
                  <div style={{ fontSize: 10, letterSpacing: 1.4, color: ST.paperMute }}>TUESDAY · APR 21</div>
                  <div style={{ fontSize: 22, fontWeight: 500, fontFamily: 'var(--font-instrument-serif), serif', letterSpacing: -0.2, marginTop: 1 }}>
                    Hey Aidan.
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <Ic icon="bell" />
                  <div style={{
                    width: 34, height: 34, borderRadius: 999, background: ST.navy,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 700, color: ST.bone,
                  }}>AO</div>
                </div>
              </div>

              <div style={{
                background: ST.navy, color: ST.bone, borderRadius: 18, padding: 16,
                display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <STMark size={14} color={ST.bone} />
                    <span style={{ fontSize: 9.5, letterSpacing: 1.5, fontWeight: 600 }}>TRIAD · MENTAL COACH</span>
                  </div>
                  <span style={{ fontSize: 10, opacity: 0.7 }}>M-2</span>
                </div>
                <div style={{ fontFamily: 'var(--font-instrument-serif), serif', fontSize: 19, lineHeight: 1.3 }}>
                  &ldquo;Two days to match. Let&apos;s run a <em>5-minute visualization</em> walkthrough.&rdquo;
                </div>
                <div style={{
                  background: 'rgba(0,0,0,0.22)', borderRadius: 11,
                  padding: '9px 12px', display: 'flex', alignItems: 'center', gap: 8,
                  border: '1px solid rgba(245,243,236,0.12)',
                }}>
                  <span style={{ flex: 1, fontSize: 12.5, opacity: 0.7 }}>Ask anything…</span>
                  <div style={{ width: 26, height: 26, borderRadius: 7, background: ST.bone, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="send" size={12} color={ST.navy} />
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 14 }}>
                <MiniPanel>
                  <div style={{ fontSize: 9, letterSpacing: 1.2, color: ST.paperMute }}>MENTAL PULSE</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 2 }}>
                    <div style={{ fontSize: 26, fontWeight: 500, fontFamily: 'var(--font-instrument-serif), serif' }}>7.2</div>
                    <div style={{ fontSize: 10.5, color: ST.green }}>+0.4</div>
                  </div>
                  <MiniSpark values={[5.8, 6.0, 6.2, 6.1, 6.5, 6.7, 6.8, 7.0, 7.1, 7.2]} color={ST.navy} />
                </MiniPanel>
                <MiniPanel>
                  <div style={{ fontSize: 9, letterSpacing: 1.2, color: ST.paperMute }}>POTENTIAL</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 2 }}>
                    <div style={{ fontSize: 26, fontWeight: 500, fontFamily: 'var(--font-instrument-serif), serif' }}>46.1</div>
                    <div style={{ fontSize: 10.5, color: ST.green }}>+2.3</div>
                  </div>
                  <div style={{ fontSize: 10, color: ST.paperMute, marginTop: 8 }}>
                    Pro probability <span style={{ color: ST.paperInk, fontWeight: 600 }}>17% → 27.8%</span>
                  </div>
                </MiniPanel>
              </div>

              <Section title="Mental strength" action="See all">
                <div style={{
                  background: '#fff', border: '1px solid ' + ST.paperLine, borderRadius: 14,
                  padding: 14, display: 'flex', gap: 10, alignItems: 'center',
                }}>
                  <MentalHexagon size={110} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {[
                      { k: 'Intrinsic drive', v: 7.8, color: ST.green, focus: false },
                      { k: 'Resilience', v: 5.4, color: ST.amber, focus: true },
                      { k: 'Self-regulation', v: 4.6, color: ST.red, focus: true },
                    ].map(r => (
                      <div key={r.k} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11 }}>
                        <span style={{ width: 5, height: 5, borderRadius: 999, background: r.color, flexShrink: 0 }} />
                        <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.k}</span>
                        {r.focus && <span style={{ fontSize: 8, letterSpacing: 0.6, color: ST.navy, background: 'oklch(93% 0.04 240)', padding: '1px 4px', borderRadius: 3, fontWeight: 600 }}>FOCUS</span>}
                        <span style={{ color: ST.paperMute, fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>{r.v.toFixed(1)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Section>

              <Section title="Today's plan" action="Open">
                <div style={{ background: '#fff', border: '1px solid ' + ST.paperLine, borderRadius: 14, padding: 4 }}>
                  {[
                    { t: '08:00', label: 'Pulse check-in', done: true, tag: 'Mental', color: ST.navy, highlight: false },
                    { t: '16:30', label: 'Ball control — 20 min', done: false, tag: 'Drill', color: ST.green, highlight: false },
                    { t: '17:15', label: '60-sec breath reset', done: false, tag: 'Focus', color: ST.amber, highlight: true },
                    { t: '21:00', label: 'Evening journal', done: false, tag: 'Journal', color: ST.paperMute, highlight: false },
                  ].map((it, i, arr) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: 10, padding: '11px 10px',
                      borderBottom: i < arr.length - 1 ? '1px solid ' + ST.paperLineSoft : 'none',
                    }}>
                      <div style={{
                        width: 18, height: 18, borderRadius: 4,
                        border: '1.4px solid ' + (it.done ? ST.green : ST.paperLine),
                        background: it.done ? ST.green : '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        {it.done && <Icon name="check" size={12} color="#fff" strokeWidth={2.5} />}
                      </div>
                      <div style={{ fontSize: 10.5, color: ST.paperMute, width: 38, fontVariantNumeric: 'tabular-nums' }}>{it.t}</div>
                      <div style={{ flex: 1, fontSize: 12.5, color: it.done ? ST.paperMute : ST.paperInk, textDecoration: it.done ? 'line-through' : 'none' }}>{it.label}</div>
                      <div style={{
                        fontSize: 9, letterSpacing: 0.5, padding: '2px 6px', borderRadius: 3,
                        background: it.highlight ? 'oklch(94% 0.05 75)' : 'transparent',
                        border: '1px solid ' + ST.paperLine, color: it.color, fontWeight: 600,
                      }}>{it.tag}</div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Pathway upside" action="Details">
                <div style={{ background: '#fff', border: '1px solid ' + ST.paperLine, borderRadius: 14, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <MiniStatSm label="SIMILAR" value="512" sub="→ D1" color={ST.navy} />
                    <MiniStatSm label="UPSIDE" value="+7%" sub="in 1yr" color={ST.green} />
                    <MiniStatSm label="WITHIN REACH" value="D3" sub="65%" color={ST.paperInk} />
                  </div>
                  {[
                    { label: 'NCAA D1', now: 28, plan: 7 },
                    { label: 'NCAA D3', now: 58, plan: 6 },
                  ].map(r => <PathBar key={r.label} {...r} />)}
                </div>
              </Section>

              <Section title="Nudge from coach">
                <div style={{
                  background: ST.bone, border: '1px solid ' + ST.paperLine, borderRadius: 14, padding: 14,
                  display: 'flex', gap: 10, alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 999, background: ST.navy,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    fontSize: 10, fontWeight: 700, color: ST.bone,
                  }}>JM</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11.5, color: ST.paperInk, lineHeight: 1.45 }}>
                      &ldquo;Loved the reset you used in training. Try it twice on Saturday — once after a mistake, once before the second half.&rdquo;
                    </div>
                    <div style={{ fontSize: 10, color: ST.paperMute, marginTop: 4 }}>Coach James · 2h ago</div>
                  </div>
                </div>
              </Section>

              <div style={{ height: 10 }} />
            </div>

            <div style={{
              height: 82, padding: '8px 12px 28px', background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(20px)', borderTop: '1px solid ' + ST.paperLine,
              display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start',
            }}>
              {[
                { id: 'home', label: 'Home', icon: 'home' as IconName },
                { id: 'triad', label: 'Triad', icon: 'chat' as IconName },
                { id: 'pulse', label: 'Pulse', icon: 'pulse' as IconName },
                { id: 'dev', label: 'Develop', icon: 'spark' as IconName },
                { id: 'me', label: 'Me', icon: 'user' as IconName },
              ].map(t => (
                <div key={t.id} style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
                  color: activeTab === t.id ? ST.navy : ST.paperMute, paddingTop: 4,
                }}>
                  <Icon name={t.icon} size={21} strokeWidth={activeTab === t.id ? 2 : 1.5} />
                  <span style={{ fontSize: 10, fontWeight: activeTab === t.id ? 600 : 500 }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 60,
          height: 34, display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
          paddingBottom: 8, pointerEvents: 'none',
        }}>
          <div style={{ width: 139, height: 5, borderRadius: 100, background: 'rgba(0,0,0,0.25)' }} />
        </div>
      </div>
    </div>
  )
}

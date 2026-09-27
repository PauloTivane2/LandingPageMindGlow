import { useEffect, useState } from 'react'
import mindglowLogo from './assets/logo/MingGlowPng (1).png'
import mindglowWordmark from './assets/logo/MindGlow1Png.png'
import './App.css'

const releases = {
  client: { eyebrow: 'App do paciente', title: 'Seu bem-estar começa quando você se percebe.', text: 'O espaço do paciente para entender seus padrões, cuidar do seu ritmo e compartilhar o que sente com o especialista que o acompanha.', cta: 'Abrir app do paciente', link: 'https://drive.google.com/file/d/1Z1mTk_dT5IM8devC12KiAJ8MsA8gt7ah/view?usp=drive_link', accent: 'pink' },
  specialist: { eyebrow: 'App do especialista', title: 'Mais presença na prática. Mais clareza no cuidado.', text: 'A visão do especialista para acompanhar seus pacientes, preparar conversas e transformar cada encontro em um cuidado mais conectado.', cta: 'Abrir app do especialista', link: 'https://drive.google.com/file/d/1zI_F86zd5jkmLSNG5W78uhZCtNs-t0Uz/view?usp=drive_link', accent: 'violet' },
}

function App() {
  const content = releases.client
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('mindglow-theme')
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    localStorage.setItem('mindglow-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <main className={`page page--${content.accent} ${darkMode ? 'theme-dark' : ''}`}>
      <nav className="nav shell" aria-label="Navegação principal"><a className="brand" href="#top" aria-label="MindGlow início"><img className="brand-logo brand-logo--wordmark" src={mindglowWordmark} alt="MindGlow" /></a><div className="nav-links"><a href="#como-funciona">Como funciona</a><a href="#duas-formas">Dois jeitos de cuidar</a></div><div className="nav-actions"><button className="theme-toggle" type="button" onClick={() => setDarkMode((current) => !current)} aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'} title={darkMode ? 'Modo claro' : 'Modo escuro'}>{darkMode ? '☀' : '☾'}</button><a className="nav-cta" href={content.link} target="_blank" rel="noreferrer">Abrir app <span>↗</span></a></div></nav>
      <section className="hero shell" id="top"><div className="hero-copy"><p className="kicker"><span className="spark">✦</span> O glow up começa na mente</p><h1>MindGlow<br /><em>por dentro,</em><br />por inteiro.</h1><p className="hero-intro">Tecnologia com mais escuta. Um lugar para acompanhar o que acontece dentro de você e transformar percepção em cuidado.</p><div className="hero-actions"><a className="primary-button" href={content.link} target="_blank" rel="noreferrer">{content.cta} <span>↗</span></a><a className="text-button" href="#duas-formas">Ver os dois apps <span>↓</span></a></div><div className="trust-line"><span className="mini-avatars"><i>✦</i><i>◌</i><i>•</i></span><span>Feito para dias reais,<br />sem julgamento.</span></div></div><div className="hero-art" aria-label="Prévia dos aplicativos MindGlow"><div className="orb orb-one"></div><div className="orb orb-two"></div><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="phone phone-back"><div className="phone-screen specialist-screen"><small>MindGlow Especialistas</small><strong>Olá, Dra. Ana</strong><span className="chart"></span><b>Visão da semana</b><div className="fake-lines"><i></i><i></i><i></i></div></div></div><div className="phone phone-main"><div className="phone-screen client-screen"><div className="screen-top"><small>MindGlow</small><span>•••</span></div><p>Como você<br /><b>está hoje?</b></p><div className="mood-row"><i>☹</i><i>•</i><i>◡</i><i>☺</i><i>✦</i></div><div className="breath"><span></span><b>Respirar</b><small>2 min para voltar a si</small></div><div className="screen-bottom"><span>Hoje</span><span>Diário</span><span>Perfil</span></div></div></div><span className="float-note note-one">um espaço<br /><b>seu</b></span><span className="float-note note-two">cuidar é<br /><b>se perceber</b></span></div></section>
      <section className="audience-section shell" id="duas-formas"><div className="section-heading"><div><p className="section-label">Um ecossistema, dois papéis</p><h2>Paciente e especialista,<br /><em>conectados no cuidado.</em></h2><p className="section-support">Cada pessoa usa o app certo para sua jornada. Escolha abaixo a versão que combina com o seu papel.</p></div></div><div className="app-options"><article className="app-option app-option--patient"><div className="app-option-top"><span className="app-number">01</span><span className="app-role">Para quem é paciente</span></div><h3>MindGlow</h3><p>Seu espaço para acompanhar como você está, registrar o dia a dia e compartilhar sua jornada com o especialista.</p><a className="app-option-link" href={releases.client.link} target="_blank" rel="noreferrer">Abrir app do paciente <span>↗</span></a></article><article className="app-option app-option--specialist"><div className="app-option-top"><span className="app-number">02</span><span className="app-role">Para quem é especialista</span></div><h3>MindGlow Especialistas</h3><p>A visão profissional para acompanhar pacientes, preparar conversas e cuidar com mais contexto entre os encontros.</p><a className="app-option-link" href={releases.specialist.link} target="_blank" rel="noreferrer">Abrir app do especialista <span>↗</span></a></article></div><div className="connection-note"><span className="connection-dot"></span><strong>Os dois apps trabalham juntos</strong><span>para aproximar quem cuida de quem está sendo cuidado.</span></div></section>
      <section className="how-section" id="como-funciona"><div className="shell how-grid"><div><p className="section-label">O essencial, sem excesso</p><h2>Entender.<br /><em>Respirar.</em><br />Continuar.</h2></div><div className="steps"><article><span>01</span><h3>Observe</h3><p>Registre o seu momento sem precisar encontrar as palavras perfeitas.</p></article><article><span>02</span><h3>Conheça</h3><p>Perceba padrões e encontre pequenas práticas que cabem no seu dia.</p></article><article><span>03</span><h3>Cuide</h3><p>Leve mais clareza para as conversas que realmente importam.</p></article></div></div></section>
      <footer className="footer shell"><a className="brand" href="#top"><img className="brand-logo" src={mindglowLogo} alt="MindGlow" /></a><p>O glow up começa na mente.</p><a href={content.link} target="_blank" rel="noreferrer">Abrir app externo ↗</a><small>© 2026 MindGlow</small></footer>
    </main>
  )
}

export default App

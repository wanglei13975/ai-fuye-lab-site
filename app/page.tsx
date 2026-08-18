const projects = [
  ["AI 商品场景图", "从需求确认、样图制作到交付验收的 7 天路线。"],
  ["AI 短视频广告", "把脚本、素材、剪辑与交付拆成可执行清单。"],
  ["AI 视频翻译与配音", "覆盖样片、授权核对、报价与最终交付。"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#top" aria-label="AI副业实验室首页"><span className="mark">AI</span> AI副业实验室</a>
        <div className="navLinks"><a href="#projects">项目指南</a><a href="/privacy">隐私政策</a><a href="/support">支持</a></div>
      </nav>
      <section className="hero wrap" id="top">
        <div>
          <p className="eyebrow">从点子到第一次真实验证</p>
          <h1>把 AI 副业想法，<br />变成今天能执行的步骤。</h1>
          <p className="lead">三套经过整理的项目指南、7 天行动计划与实用交付模板。我们提供方法和风险提示，不承诺任何收入结果。</p>
          <a className="cta" href="#projects">查看首批项目 <span>→</span></a>
        </div>
        <aside className="routeCard" aria-label="七天行动计划示例">
          <div className="cardTop"><span>7 天行动计划</span><b>第 1 天</b></div>
          <h2>先验证一个真实需求</h2>
          <p>选择一个明确场景，联系 3 位潜在客户，记录他们愿意付费解决的问题。</p>
          <div className="progress"><i /></div>
          <ul><li><span>✓</span>确定目标客户</li><li><span>✓</span>整理访谈问题</li><li><span>○</span>记录反馈与停止条件</li></ul>
        </aside>
      </section>
      <section className="projectSection wrap" id="projects">
        <div className="sectionHead"><div><p className="eyebrow">首批内容</p><h2>不是灵感清单，是落地路线</h2></div><p>每个项目都包含适用人群、准备成本、执行步骤、风险、停止条件和来源说明。</p></div>
        <div className="grid">{projects.map(([title, copy], index) => <article className="project" key={title}><span className="number">0{index + 1}</span><h3>{title}</h3><p>{copy}</p><small>含 7 天路线 · 风险提示 · 实用模板</small></article>)}</div>
      </section>
      <section className="promise wrap">
        <p className="eyebrow">产品边界</p><h2>信息更透明，决策权始终在你。</h2>
        <div className="promiseGrid"><p><b>不保证收益</b><br />收入受能力、市场、时间与执行影响，指南不是财务或就业承诺。</p><p><b>来源可追溯</b><br />开源工具只作信息引用，不在应用内转售代码、模型或第三方教程。</p><p><b>数据尽量本地</b><br />行动进度保存在设备，不要求创建账户，也不投放跨应用追踪广告。</p></div>
      </section>
      <footer className="wrap"><span>© 2026 AI副业实验室</span><div><a href="/privacy">隐私政策</a><a href="/support">支持与联系</a></div></footer>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = { title: "支持与帮助", description: "AI副业实验室使用、购买恢复与数据帮助" };

export default function SupportPage() {
  return <main>
    <nav className="nav wrap"><a className="brand" href="/"><span className="mark">AI</span> AI副业实验室</a><div className="navLinks"><a href="/">返回首页</a><a href="/privacy">隐私政策</a></div></nav>
    <article className="legal wrap">
      <p className="eyebrow">Support</p><h1>支持与帮助</h1><p className="updated">适用于 AI副业实验室 1.0</p>
      <p>遇到问题时，请先尝试下面的处理方法。应用不提供收入保证、客户撮合或代运营服务；支持范围包括应用功能、内容访问、购买恢复和本地数据。</p>
      <h2>购买后仍显示未解锁</h2><ol><li>确认设备已登录购买时使用的 Apple 账户。</li><li>打开应用“设置”，选择“恢复购买”。</li><li>保持网络可用并等待系统完成交易校验。</li><li>如 Apple 显示扣款但权益仍未恢复，可通过 App Store 的“报告问题”页面核对交易。</li></ol>
      <h2>如何管理或取消订阅</h2><p>在 iPhone 中打开“设置”→你的 Apple 账户→“订阅”，选择 AI副业实验室。订阅计费、退款资格与付款方式由 Apple 管理。</p>
      <h2>如何清除本地数据</h2><p>打开应用“设置”→“本地数据”→“清除进度”。卸载应用也会移除保存在设备上的行动进度；删除后无法由开发者恢复。</p>
      <h2>内容与结果说明</h2><p>指南用于提供执行框架、风险提示和公开来源线索，不构成财务、法律、税务或就业建议。项目结果取决于市场、能力、时间与执行，不能保证产生收入。</p>
      <h2>仍需帮助</h2><p>请在 App Store 的 AI副业实验室产品页面使用“App 支持”入口访问本页，并在提交审核前由开发者账户配置的支持邮箱联系我们。为保护隐私，请勿发送银行卡号、Apple 账户密码或完整交易凭证。</p>
      <h2>法律与隐私</h2><p>有关本地数据、StoreKit 交易状态和第三方链接的说明，请阅读<a href="/privacy">隐私政策</a>。</p>
    </article>
    <footer className="wrap"><span>© 2026 AI副业实验室</span><div><a href="/">首页</a><a href="/privacy">隐私政策</a></div></footer>
  </main>;
}

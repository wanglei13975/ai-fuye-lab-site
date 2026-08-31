import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "隐私政策", description: "AI副业实验室隐私政策" };

export default function PrivacyPage() {
  return <main>
    <nav className="nav wrap"><Link className="brand" href="/"><span className="mark">AI</span> AI副业实验室</Link><div className="navLinks"><Link href="/">返回首页</Link><Link href="/support">支持</Link></div></nav>
    <article className="legal wrap">
      <p className="eyebrow">Privacy Policy</p><h1>隐私政策</h1><p className="updated">生效日期：2026 年 8 月 18 日</p>
      <p>AI副业实验室重视你的隐私。本政策说明应用如何处理信息。当前版本不要求注册账户，不接入广告追踪，也不向开发者服务器上传你的行动计划或完成进度。</p>
      <h2>1. 我们处理的信息</h2><p>应用会在你的设备本地保存所选项目、行动清单完成状态、已读提示和界面偏好。这些数据用于恢复你的使用进度，不会由开发者收集。</p>
      <h2>2. 购买与订阅</h2><p>应用内购买由 Apple 处理。应用通过 StoreKit 接收交易状态和产品权益，用于判断是否解锁付费内容。开发者不会获得你的完整付款卡信息。Apple 对相关数据的处理适用其自身隐私政策。</p>
      <h2>3. 第三方链接</h2><p>部分指南提供开源项目或工具的外部链接。点击后将离开本应用，目标网站可能按照自己的政策处理信息；请在使用前阅读相应条款和许可证。</p>
      <h2>4. 分析、广告与追踪</h2><p>当前版本不集成第三方分析 SDK、广告 SDK 或跨应用追踪技术，也不会请求用于广告追踪的系统权限。</p>
      <h2>5. 数据保留与删除</h2><p>本地进度会保留到你在应用设置中清除数据或卸载应用为止。由于这些数据不上传服务器，开发者无法远程读取或恢复。</p>
      <h2>6. 儿童隐私</h2><p>本应用面向能够独立作出商业与购买判断的用户，并非专为 13 岁以下儿童设计。我们不会有意收集儿童个人信息。</p>
      <h2>7. 政策更新</h2><p>若产品的数据处理方式发生实质变化，我们会更新本页面与生效日期，并在需要时通过应用版本说明告知。</p>
      <h2>8. 联系与支持</h2><p>如对隐私或数据处理有疑问，请访问<Link href="/support">支持页面</Link>查看联系和排障方式。</p>
    </article>
    <footer className="wrap"><span>© 2026 AI副业实验室</span><div><Link href="/">首页</Link><Link href="/support">支持</Link></div></footer>
  </main>;
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Brain, TrendingUp, Users, Target, CheckCircle2, BookOpen, Zap } from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            地方中小企業向け<br />AIコンサルティング導入戦略
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            心理学・行動経済学に基づく実践的アプローチ
          </p>
        </motion.div>

        {/* Key Psychological Principles */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: <Brain className="w-8 h-8" />,
              title: "損失回避の原理",
              subtitle: "Kahneman & Tversky",
              description: "「AIを導入しないことで失う機会」を明確化し、競合他社との差が広がるリスクを提示"
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "社会的証明",
              subtitle: "Cialdini",
              description: "同業種・同規模企業の成功事例を示し、「他社も導入している」という安心感を提供"
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: "一貫性の原理",
              subtitle: "Festinger",
              description: "小さなコミットメント（無料診断）から始め、段階的に契約へ誘導"
            }
          ].map((principle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="text-cyan-400 mb-4">{principle.icon}</div>
              <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
              <p className="text-sm text-cyan-300 mb-3">{principle.subtitle}</p>
              <p className="text-gray-300 text-sm">{principle.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 6-Step Process */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
            実践的6ステップアプローチ
          </h2>

          <div className="space-y-4">
            {[
              {
                id: 'step1',
                phase: 'ステップ1',
                title: '問題の可視化フェーズ',
                duration: '初回接触（30-45分）',
                psychological: '認知的不協和 + プロスペクト理論',
                actions: [
                  '経営者の「現状の課題」を傾聴（ロジャーズの来談者中心療法）',
                  '業務の非効率性を数値化（例：月間〇〇時間の無駄）',
                  '「もし競合他社がAIで効率化したら？」という損失シナリオを提示',
                  '無料の業務診断レポート（30分）を提案 → コミットメントの第一歩'
                ],
                evidence: 'Kahneman & Tversky (1979): 人は利益よりも損失に2.5倍敏感に反応する',
                deliverable: '業務課題ヒアリングシート + 無料診断の約束'
              },
              {
                id: 'step2',
                phase: 'ステップ2',
                title: '無料診断と具体化',
                duration: '1週間後（60分）',
                psychological: 'アンカリング効果 + 返報性の原理',
                actions: [
                  '業務フローを分析し、AI導入可能箇所を3つ特定',
                  '各施策の「削減時間」「コスト削減額」を試算（アンカー設定）',
                  '同業種での成功事例を2-3件提示（社会的証明）',
                  '「もし月20万円で月間100時間削減できたら？」という具体的ROIを提示'
                ],
                evidence: 'Cialdini (2006): 無料で価値を提供すると、受け手は返報したくなる',
                deliverable: 'AI導入診断レポート（15-20ページ）+ ROI試算書'
              },
              {
                id: 'step3',
                phase: 'ステップ3',
                title: 'パイロットプランの提案',
                duration: 'レポート提出後3-5日',
                psychological: 'フット・イン・ザ・ドア + 選択のパラドックス回避',
                actions: [
                  '3つのプランを提示（※実際は中間プランに誘導）',
                  'ライトプラン：10万円/月 - 基本コンサル + 1モデル導入',
                  'スタンダードプラン：20万円/月 - 複数モデル統合 + 月次改善',
                  'プレミアムプラン：35万円/月 - フルカスタム + 週次サポート',
                  '「まずは3ヶ月のトライアル契約」を提案（心理的ハードル低下）'
                ],
                evidence: 'Schwartz (2004): 選択肢は3つが最適。中間価格が最も選ばれやすい',
                deliverable: '契約プラン提案書 + 3ヶ月ロードマップ'
              },
              {
                id: 'step4',
                phase: 'ステップ4',
                title: '信頼構築とリスク逆転',
                duration: '提案後の交渉フェーズ',
                psychological: 'リスク逆転 + 権威性の活用',
                actions: [
                  '「成果が出なければ初月返金保証」を提示（リスク逆転）',
                  '導入企業の具体的な数値改善データを提示（例：業務時間40%削減）',
                  '経営者自身が「AI導入責任者」になるストーリーを描く（自己効力感）',
                  '契約書に「KPI達成基準」を明記（透明性・信頼性向上）'
                ],
                evidence: 'Bandura (1977): 自己効力感が高まると行動変容が起きやすい',
                deliverable: '返金保証付き契約書 + KPI達成基準書'
              },
              {
                id: 'step5',
                phase: 'ステップ5',
                title: 'クイックウィンの創出',
                duration: '契約後1ヶ月目',
                psychological: '即時報酬 + プログレスバー効果',
                actions: [
                  '最も効果が出やすい業務から着手（例：問い合わせ自動応答）',
                  '導入2週間で「小さな成功体験」を作る（例：週5時間削減）',
                  '毎週の進捗レポートで「改善グラフ」を可視化（進捗の実感）',
                  '経営者・従業員からのポジティブフィードバックを収集'
                ],
                evidence: 'Nir Eyal (2014): 即時報酬は習慣化とエンゲージメントを促進',
                deliverable: '週次進捗レポート + 改善ダッシュボード'
              },
              {
                id: 'step6',
                phase: 'ステップ6',
                title: '拡張提案と長期契約化',
                duration: '3ヶ月目終了時',
                psychological: 'サンクコスト効果 + 継続の原理',
                actions: [
                  '3ヶ月の成果を数値で総括（例：総削減時間、コスト削減額）',
                  '「ここで止めると元に戻る」という損失フレームを提示',
                  '次の改善領域を3つ提案（さらなる成長の可能性）',
                  '年間契約で月額15%割引を提示（長期コミットメントの誘導）'
                ],
                evidence: 'Thaler (1980): 既に投資したコストを無駄にしたくない心理が働く',
                deliverable: '3ヶ月成果報告書 + 年間契約提案書'
              }
            ].map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden"
              >
                <button
                  onClick={() => setActiveSection(activeSection === step.id ? null : step.id)}
                  className="w-full p-6 text-left hover:bg-white/5 transition-all flex items-center justify-between"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-cyan-400 font-bold text-lg">{step.phase}</span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{step.duration}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: activeSection === step.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeSection === step.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="border-t border-white/20 pt-6 space-y-4">
                        <div className="bg-blue-500/20 p-4 rounded-lg">
                          <p className="text-sm font-semibold text-cyan-300 mb-2">心理学的原理</p>
                          <p className="text-white">{step.psychological}</p>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-cyan-300 mb-3">具体的アクション</p>
                          <ul className="space-y-2">
                            {step.actions.map((action, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-purple-500/20 p-4 rounded-lg">
                          <p className="text-sm font-semibold text-purple-300 mb-2">
                            <BookOpen className="w-4 h-4 inline mr-2" />
                            学術的エビデンス
                          </p>
                          <p className="text-gray-300 text-sm italic">{step.evidence}</p>
                        </div>

                        <div className="bg-green-500/20 p-4 rounded-lg">
                          <p className="text-sm font-semibold text-green-300 mb-2">
                            <Zap className="w-4 h-4 inline mr-2" />
                            成果物
                          </p>
                          <p className="text-white text-sm">{step.deliverable}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Psychological Tactics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-cyan-400">
            追加の心理学的戦術
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'スケアシティ（希少性）',
                scholar: 'Cialdini',
                tactic: '「今月はあと2社まで」「特別価格は今月末まで」という限定性を提示',
                color: 'from-red-500 to-orange-500'
              },
              {
                title: 'フレーミング効果',
                scholar: 'Tversky & Kahneman',
                tactic: '「月20万円の投資」ではなく「1日7000円で業務革新」とフレーミング',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'ピークエンドの法則',
                scholar: 'Kahneman',
                tactic: '各フェーズの最後に強いポジティブ体験を設計（成果の可視化）',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'コントラスト効果',
                scholar: 'Cialdini',
                tactic: '35万円プランを先に見せることで、20万円を「お得」に感じさせる',
                color: 'from-green-500 to-teal-500'
              }
            ].map((tactic, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + idx * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${tactic.color} text-white text-sm font-semibold mb-4`}>
                  {tactic.scholar}
                </div>
                <h3 className="text-xl font-bold mb-3">{tactic.title}</h3>
                <p className="text-gray-300 text-sm">{tactic.tactic}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Success Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">
            成功の鍵となる指標
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">75%</div>
              <p className="text-gray-300">初回診断からの<br />提案受諾率目標</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">3ヶ月</div>
              <p className="text-gray-300">最初の成果を<br />実感させる期間</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">60%</div>
              <p className="text-gray-300">トライアル後の<br />年間契約転換率</p>
            </div>
          </div>
        </motion.div>

        {/* Academic References */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-cyan-400">
            参考文献・理論的基盤
          </h2>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <ul className="space-y-3 text-sm text-gray-300">
              <li>• Kahneman, D., & Tversky, A. (1979). Prospect Theory: An Analysis of Decision under Risk. <i>Econometrica</i>, 47(2), 263-291.</li>
              <li>• Cialdini, R. B. (2006). <i>Influence: The Psychology of Persuasion</i>. Harper Business.</li>
              <li>• Thaler, R. H. (1980). Toward a positive theory of consumer choice. <i>Journal of Economic Behavior & Organization</i>, 1(1), 39-60.</li>
              <li>• Bandura, A. (1977). Self-efficacy: Toward a unifying theory of behavioral change. <i>Psychological Review</i>, 84(2), 191-215.</li>
              <li>• Festinger, L. (1957). <i>A Theory of Cognitive Dissonance</i>. Stanford University Press.</li>
              <li>• Eyal, N. (2014). <i>Hooked: How to Build Habit-Forming Products</i>. Penguin.</li>
              <li>• Rogers, C. (1951). <i>Client-Centered Therapy</i>. Houghton Mifflin.</li>
              <li>• Schwartz, B. (2004). <i>The Paradox of Choice</i>. Harper Perennial.</li>
            </ul>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-20 text-center text-gray-400 text-sm"
        >
          <p>このアプローチは、行動経済学・心理学の実証研究に基づいた実践的フレームワークです</p>
          <p className="mt-2">中小企業の意思決定プロセスに最適化された、再現性の高い営業戦略を提供します</p>
        </motion.div>
      </section>
    </main>
  )
}

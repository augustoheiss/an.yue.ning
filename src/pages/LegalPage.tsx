import { Link } from 'react-router-dom'
import { ArrowLeft, Shield } from 'lucide-react'
import { useEffect } from 'react'

export default function LegalPage() {
  useEffect(() => {
    document.title = 'Termos de Uso e Privacidade — An.Yue.Ning'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-ivory-50 theme-light">
      {/* Header */}
      <header className="bg-forest-900 border-b border-sage-800/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-sage-300 hover:text-terra-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Início
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-forest-800 border border-sage-700/30 flex items-center justify-center">
              <Shield className="w-5 h-5 text-terra-400" />
            </div>
            <div>
              <h1 className="font-serif text-2xl text-ivory-50 tracking-wider">
                Termos de Uso e Política de Privacidade
              </h1>
              <p className="text-sage-400 text-sm mt-1">An.Yue.Ning — Terapia Somática Clínica & Medicina Ancestral</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <p className="text-sm text-sage-500 mb-10 border-b border-sage-200 pb-6">
          Última atualização: 13 de abril de 2026
        </p>

        <div className="prose-legal space-y-10 text-slate-700 leading-relaxed">
          {/* Intro */}
          <p>
            Bem-vindo(a) ao site de <strong>An.Yue.Ning (Rebeca)</strong>. Ao acessar e utilizar esta
            página, você concorda com os Termos de Uso e a Política de Privacidade descritos abaixo.
            Caso não concorde com algum dos termos, pedimos que não utilize os serviços aqui oferecidos.
          </p>

          {/* === 1. TERMOS DE USO === */}
          <h2 className="font-serif text-2xl text-forest-700 !mt-12 !mb-6">1. Termos de Uso</h2>

          <h3 className="font-semibold text-lg text-slate-800">1.1. Descrição dos Serviços</h3>
          <p>
            Este site tem como objetivo apresentar e facilitar o contato para os serviços de{' '}
            <strong>Terapia Somática Clínica, Massoterapia, Quiropraxia, Medicina Chinesa, Ayurveda,
            Drenagem Linfática, TRG (Terapia de Reprocessamento Generativo) e Bio-integração (Método Soutus)</strong>,
            oferecidos por <strong>An.Yue.Ning (Rebeca)</strong>.
          </p>

          <h3 className="font-semibold text-lg text-slate-800">1.2. Contato e Agendamentos</h3>
          <p>
            Os contatos, orçamentos e agendamentos realizados através dos botões de redirecionamento
            deste site (como WhatsApp e E-mail) são de inteira responsabilidade do usuário e do
            profissional prestador do serviço. O site funciona apenas como um canal de vitrine e
            facilitação de comunicação.
          </p>

          <h3 className="font-semibold text-lg text-slate-800">1.3. Isenção de Responsabilidade Técnica</h3>
          <p>
            A infraestrutura web, design e código-fonte deste site foram desenvolvidos de forma
            terceirizada. O desenvolvedor responsável pela criação da página não possui vínculos
            societários, não atua no atendimento aos clientes e não se responsabiliza pela prestação
            dos serviços ofertados, promessas comerciais, ou pela gestão e armazenamento dos dados
            trocados diretamente com o profissional após o redirecionamento.
          </p>

          {/* === 2. POLÍTICA DE PRIVACIDADE === */}
          <h2 className="font-serif text-2xl text-forest-700 !mt-14 !mb-6">
            2. Política de Privacidade (LGPD)
          </h2>
          <p>
            Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), detalhamos
            como tratamos as suas informações:
          </p>

          <h3 className="font-semibold text-lg text-slate-800">2.1. Coleta de Dados</h3>
          <p>
            Nós coletamos apenas as informações estritamente necessárias para a prestação do serviço
            ou atendimento. Quando você clica em nossos botões de contato (WhatsApp ou E-mail), os
            dados fornecidos voluntariamente por você (como seu nome, número de telefone e conteúdo
            da mensagem) são recebidos diretamente por <strong>An.Yue.Ning (Rebeca)</strong>. Este
            site não possui bancos de dados ocultos que capturam suas informações sem o seu
            consentimento.
          </p>

          <h3 className="font-semibold text-lg text-slate-800">2.2. Uso dos Dados</h3>
          <p>Os dados fornecidos por você serão utilizados única e exclusivamente para:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Retornar o seu contato e responder a dúvidas;</li>
            <li>Enviar orçamentos e realizar agendamentos;</li>
            <li>Prestar o serviço contratado;</li>
            <li>Enviar atualizações estritamente relacionadas ao serviço solicitado.</li>
          </ul>

          <h3 className="font-semibold text-lg text-slate-800">2.3. Compartilhamento de Informações</h3>
          <p>
            Nós não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins
            de marketing ou qualquer outra finalidade que não seja o cumprimento do serviço
            solicitado, exceto se exigido por lei ou determinação judicial.
          </p>

          <h3 className="font-semibold text-lg text-slate-800">2.4. Cookies e Tecnologias de Rastreamento</h3>
          <p>
            Este site pode utilizar cookies básicos e ferramentas de análise (como o Google Analytics)
            apenas para entender o volume de acessos e melhorar a sua experiência de navegação.
            Nenhuma informação pessoal identificável é extraída através desses cookies funcionais.
          </p>

          <h3 className="font-semibold text-lg text-slate-800">2.5. Seus Direitos</h3>
          <p>Você tem o direito de solicitar a qualquer momento:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>A confirmação da existência de tratamento dos seus dados;</li>
            <li>A correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>A exclusão dos seus dados dos nossos contatos comerciais.</li>
          </ul>

          <h3 className="font-semibold text-lg text-slate-800">2.6. Contato do Controlador de Dados</h3>
          <p>
            Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato
            diretamente com o responsável pelo tratamento dos dados:
          </p>
          <div className="bg-sage-50 border border-sage-200 rounded-xl p-6 space-y-2">
            <p><strong className="text-slate-800">Responsável:</strong> An.Yue.Ning (Rebeca)</p>
            <p><strong className="text-slate-800">WhatsApp:</strong>{' '}
              <a href="https://wa.me/5511969187866" className="text-terra-500 hover:text-terra-600 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                +55 (11) 96918-7866
              </a>
            </p>
          </div>
        </div>

        {/* Bottom "Voltar" */}
        <div className="mt-16 pt-8 border-t border-sage-200 flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-forest-600 text-ivory-50 text-sm font-medium rounded-full hover:bg-forest-700 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Início
          </Link>
          <Link
            to="/soutus"
            className="inline-flex items-center gap-2 px-6 py-3 border border-sage-300 text-slate-600 text-sm font-medium rounded-full hover:border-terra-400 hover:text-terra-600 transition-all duration-300"
          >
            Conhecer o Pilar Soutus
          </Link>
        </div>
      </main>
    </div>
  )
}

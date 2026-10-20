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
          Última atualização: 20 de outubro de 2026 — Padrão de Conformidade v3.0
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
            oferecidos de forma autônoma por <strong>An.Yue.Ning (Rebeca)</strong>.
          </p>

          <h3 className="font-semibold text-lg text-slate-800">1.2. Contato e Agendamentos</h3>
          <p>
            Os contatos, orçamentos e agendamentos realizados através dos botões de redirecionamento
            deste site (como WhatsApp e E-mail) são de inteira responsabilidade do usuário e da
            profissional prestadora do serviço. O site funciona exclusivamente como um canal de vitrine
            institucional e facilitação de comunicação.
          </p>

          <h3 className="font-semibold text-lg text-slate-800">
            1.3. Disclaimer de Saúde e Não-Substituição Médica
          </h3>
          <p>
            O conteúdo disponibilizado neste portal (incluindo textos, áudios, podcasts, estudos do
            Método Soutus e descrições terapêuticas) possui finalidade estritamente informativa,
            integrativa, complementar e educativa de bem-estar.{' '}
            <strong>
              Nenhuma informação ou prática integrativa apresentada neste site substitui diagnósticos,
              exames, prescrições farmacológicas ou acompanhamentos médicos, psiquiátricos ou
              psicológicos clínicos convencionais.
            </strong>{' '}
            Em caso de sintomas agudos ou emergências médicas/psiquiátricas, procure imediatamente
            assistência hospitalar especializada.
          </p>

          <h3 className="font-semibold text-lg text-slate-800">
            1.4. Isenção de Responsabilidade Técnica, Repositório Público e Cláusula de Indenização (Hold Harmless)
          </h3>
          <p>
            A arquitetura de software, interface visual e código-fonte desta plataforma foram
            desenvolvidos de forma independente sob o modelo <em>AS-IS</em> (&quot;no estado em que se
            encontra&quot;). Por razões de transparência tecnológica, auditoria de segurança da
            informação e portfólio de engenharia de software, o código-fonte de apresentação
            (front-end) pode estar hospedado em repositório público (GitHub), contendo exclusivamente
            marcação estrutural e metadados públicos de divulgação comercial expressamente autorizados
            pela Controladora. O engenheiro de software responsável pelo desenvolvimento não possui
            vínculo societário, empregatício ou de subordinação com a Controladora, não atua na
            triagem clínica ou atendimento de clientes, não possui acesso ou ingerência sobre mensagens
            trocadas após o redirecionamento externo e não detém responsabilidade solidária ou
            subsidiária (nos termos do Art. 42 da LGPD) por condutas terapêuticas, decisões de estilo
            de vida adotadas pelos usuários ou pelo tratamento de dados realizado de forma autônoma
            pela profissional em seus dispositivos privados.
          </p>

          <h3 className="font-semibold text-lg text-slate-800">
            1.5. Propriedade Intelectual e Reserva de Direitos em Repositório Público
          </h3>
          <p>
            A disponibilização pública do código-fonte para fins de transparência técnica e portfólio{' '}
            <strong>não concede licença de uso</strong> sobre a identidade visual, marca{' '}
            <strong>An.Yue.Ning</strong>, tese autoral do <strong>Método Soutus</strong>, fotografias
            pessoais, áudios ou textos autorais desta página, os quais permanecem protegidos pela Lei
            de Direitos Autorais (Lei nº 9.610/1998) e pela Lei da Propriedade Industrial (Lei nº
            9.279/1996). É vedada a clonagem comercial, reprodução indevida ou uso de imagem sem
            autorização expressa.
          </p>

          {/* === 2. POLÍTICA DE PRIVACIDADE === */}
          <h2 className="font-serif text-2xl text-forest-700 !mt-14 !mb-6">
            2. Política de Privacidade (LGPD)
          </h2>
          <p>
            Em conformidade com a Lei Geral de Proteção de Dados (Lei Federal nº 13.709/2018),
            detalhamos de forma transparente como as informações são tratadas:
          </p>

          <h3 className="font-semibold text-lg text-slate-800">
            2.1. Coleta Mínima e Processamento 100% Local (Client-Side)
          </h3>
          <p>
            Adotamos o princípio da minimização de dados (Art. 6º, III da LGPD). Toda a navegação e
            interação nesta página ocorrem exclusivamente na memória temporária do navegador do
            próprio usuário (<em>Client-Side</em>). Este site não possui banco de dados oculto e não
            armazena informações pessoais ou sensíveis em servidores intermediários. Ao acionar os
            botões de contato (WhatsApp), os dados fornecidos voluntariamente por você são transmitidos
            diretamente à Controladora <strong>An.Yue.Ning (Rebeca)</strong> sob a criptografia da
            própria plataforma de mensagens.
          </p>

          <h3 className="font-semibold text-lg text-slate-800">
            2.2. Finalidade e Bases Legais do Tratamento (Art. 7º e Art. 11 da LGPD)
          </h3>
          <p>
            O tratamento dos dados encaminhados voluntariamente pelo titular fundamenta-se nas
            seguintes hipóteses legais da LGPD:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>
              <strong>Procedimentos Preliminares e Execução de Contrato (Art. 7º, V):</strong>{' '}
              Responder a dúvidas, realizar triagem inicial de agendamento e prestar as sessões
              terapêuticas solicitadas;
            </li>
            <li>
              <strong>Consentimento Específico do Titular (Art. 7º, I e Art. 11, I):</strong> Para
              qualquer informação de bem-estar ou saúde compartilhada voluntariamente pelo paciente
              durante o contato direto com a profissional;
            </li>
            <li>
              <strong>Cumprimento de Obrigação Legal ou Regulatória (Art. 7º, II):</strong> Emissão de
              comprovantes e guarda de registros exigidos pela legislação aplicável.
            </li>
          </ul>

          <h3 className="font-semibold text-lg text-slate-800">
            2.3. Compartilhamento de Informações e Sigilo Terapêutico
          </h3>
          <p>
            Respeitamos o sigilo absoluto das informações de bem-estar compartilhadas pelos clientes.
            Não vendemos, alugamos ou comercializamos dados pessoais com terceiros para fins
            publicitários ou de marketing, exceto mediante obrigação legal ou determinação judicial.
          </p>

          <h3 className="font-semibold text-lg text-slate-800">
            2.4. Cookies, Armazenamento Técnico e Zero-Tracking
          </h3>
          <p>
            Esta aplicação prioriza a privacidade por padrão (<em>Privacy by Design</em>) e não utiliza
            cookies de rastreamento publicitário invasivo ou venda de perfil comportamental. Recursos
            técnicos do navegador e reprodutores de mídia integrados (como embeds oficiais do Spotify)
            operam sob suas respectivas políticas de segurança estritamente para viabilizar a
            reprodução de áudio solicitada pelo usuário.
          </p>

          <h3 className="font-semibold text-lg text-slate-800">
            2.5. Direitos do Titular dos Dados (Art. 18 da LGPD)
          </h3>
          <p>
            Nos termos do Art. 18 da LGPD, você tem o direito de solicitar à Controladora, a qualquer
            momento e mediante requisição gratuita:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>A confirmação da existência de tratamento e o acesso aos seus dados;</li>
            <li>A correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>
              A anonimização, bloqueio, portabilidade ou eliminação de dados desnecessários dos
              contatos comerciais;
            </li>
            <li>
              A revogação do consentimento (Art. 18, IX), com atendimento das solicitações no prazo
              legal de até 15 (quinze) dias (Art. 19, II da LGPD).
            </li>
          </ul>

          <h3 className="font-semibold text-lg text-slate-800">
            2.6. Proteção dos Dados Públicos da Profissional — Vedação de Scraping e Spam (Art. 7º, §§ 3º e 4º da LGPD)
          </h3>
          <p>
            Os dados de contato comercial, telefone/WhatsApp, nome e imagem disponibilizados
            publicamente nesta página e no código-fonte público têm como{' '}
            <strong>
              única e estrita finalidade permitir o contato por potenciais clientes interessados nos
              serviços terapêuticos descritos
            </strong>
            , observando a boa-fé e a finalidade original de sua disponibilização (Art. 7º, §§ 3º e
            4º da LGPD). É expressamente <strong>proibida a coleta automatizada</strong> (<em>web
            scraping</em>, <em>crawling</em>, mineração por bots), a inclusão em listas de distribuição
            comercial não solicitada (<em>spam</em>, telemarketing, disparos em massa via WhatsApp), a
            comercialização por <em>data brokers</em> ou o uso para treinamento de modelos de
            inteligência artificial sem autorização prévia e expressa da titular.
          </p>

          <h3 className="font-semibold text-lg text-slate-800">
            2.7. Contato da Controladora e Alerta Antifraude
          </h3>
          <p>
            Para exercer seus direitos previstos na LGPD ou esclarecer dúvidas sobre esta política,
            entre em contato exclusivamente pelo canal oficial abaixo:
          </p>
          <div className="bg-sage-50 border border-sage-200 rounded-xl p-6 space-y-2">
            <p><strong className="text-slate-800">Responsável / Controladora:</strong> An.Yue.Ning (Rebeca)</p>
            <p><strong className="text-slate-800">WhatsApp Oficial:</strong>{' '}
              <a href="https://wa.me/5511969187866" className="text-terra-500 hover:text-terra-600 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                +55 (11) 96918-7866
              </a>
            </p>
            <p className="text-xs text-slate-600 pt-2 border-t border-sage-200">
              <strong>Alerta de Segurança:</strong> A profissional atende exclusivamente pelo número
              oficial listado acima, jamais solicita códigos de verificação via SMS/WhatsApp e não
              autoriza cobranças ou transferências Pix em nome de terceiros desconhecidos.
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

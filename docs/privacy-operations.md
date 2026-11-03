# Procedimento interno de privacidade e tratamento de pedidos

> **Documento operacional interno — não publicar no website.**
>
> Este procedimento organiza as práticas actualmente previstas para a Onésimo Digital. Não constitui parecer jurídico nem certificação de conformidade com a Lei angolana. Os pontos assinalados como pendentes devem ser verificados antes do lançamento público.

**Responsável:** Onésimo Miguel, pessoa singular que exerce actividade independente sob o nome comercial Onésimo Digital.  
**Âmbito:** website, formulário de contacto, caixa de correio operacional e ferramentas de alojamento, envio de e-mail e análise de audiência.  
**Versão:** 1.0 — 3 de Novembro de 2026.

## 1. Dados e finalidade

O formulário de contacto pode recolher:
- nome;
- endereço de e-mail;
- empresa ou marca (opcional);
- telefone (opcional);
- serviço pretendido;
- prazo pretendido;
- descrição do projecto.

A finalidade é responder a pedidos de informação e orçamento, esclarecer requisitos e realizar diligências pré-contratuais solicitadas pelo próprio interessado. Não utilizar os dados do formulário para campanhas não solicitadas.

**Regra de minimização:** não pedir nem incentivar o envio de números de identificação, dados bancários, palavras-passe, dados de saúde ou outras categorias sensíveis. Se forem recebidos sem necessidade, restringir o acesso e avaliar a eliminação segura.

## 2. Fluxo e fornecedores conhecidos

| Etapa | Serviço | Tratamento conhecido | Verificação pendente |
| --- | --- | --- | --- |
| Website e API | Vercel | Alojamento e execução do formulário; podem existir registos técnicos | Região efectiva, prazos de logs, termos de tratamento/DPA e mecanismo de transferência internacional |
| Entrega de e-mail | Resend | Encaminhamento do pedido para a caixa operacional | Região, retenção de conteúdo/logs, DPA e mecanismo de transferência internacional |
| Caixa operacional | Gmail / Google | Recepção e conservação dos pedidos enviados pelo formulário | Configuração da conta, segurança, acessos, retenção e termos aplicáveis |
| Análise de audiência | Vercel Web Analytics | Estatísticas agregadas de utilização, conforme configuração do fornecedor | Confirmar configuração efectiva, dados recolhidos, região e documentação contratual |
| Análise opcional | Google Analytics 4 | Só deve carregar após escolha afirmativa do visitante; eventos não devem conter dados de contacto | Confirmar Measurement ID, Consent Mode, região, definições de retenção e transferências |

Não assumir que os fornecedores alojam ou tratam todos os dados em Angola. Antes do lançamento, consultar os termos, DPA, subcontratantes, localização/região e mecanismos aplicáveis a transferências internacionais de cada fornecedor. Registar a data e o resultado da verificação.

O formulário não deve ser descrito como uma base de dados: a implementação actual encaminha o pedido por e-mail e não o grava numa base de dados própria.

## 3. Acesso e segurança operacional

- O acesso aos pedidos deve ficar limitado ao responsável pela actividade e a pessoas expressamente autorizadas quando necessário.
- Proteger a conta de e-mail e as contas dos fornecedores com palavra-passe única e autenticação multifactor sempre que disponível.
- Não colocar dados pessoais em repositórios Git, issues públicas, ferramentas de analytics, screenshots ou ambientes de demonstração.
- Não copiar mensagens de clientes para ferramentas externas sem necessidade e base adequada.
- Não enviar chaves API, tokens ou credenciais por e-mail ou no código-fonte.
- Rever periodicamente os utilizadores, permissões, chaves e integrações com acesso aos dados.

## 4. Conservação e eliminação — pedidos não convertidos

A Política de Privacidade estabelece um prazo máximo de **12 meses após a última interacção relacionada com o pedido**, para pedidos que não resultem numa contratação, salvo obrigação legal ou necessidade de declaração, exercício ou defesa de direitos.

Procedimento operacional proposto:
1. A cada trimestre, rever a caixa de correio operacional e identificar pedidos que não avançaram para contratação.
2. Considerar como referência a data da última interacção substantiva, e não apenas a data de recepção inicial.
3. Eliminar ou anonimizar as conversas quando se completar o prazo de 12 meses, salvo excepção documentada.
4. Eliminar também cópias locais ou exportações desnecessárias. Verificar, quando disponível, a eliminação em ferramentas de terceiros e os respectivos prazos de retenção de cópias de segurança.
5. Registar apenas a execução da revisão (data, período revisto, quantidade aproximada e excepções), evitando duplicar o conteúdo dos pedidos nesse registo.

Pedidos que resultem em contrato devem ser separados do fluxo de pedidos não convertidos e conservados apenas durante os prazos legais e contratuais aplicáveis. Não inventar nem aplicar um prazo único sem avaliar o tipo de contrato e as obrigações relevantes.

**Limitação actual:** o prazo de 12 meses está descrito na Política de Privacidade, mas não existe evidência de uma rotina automatizada de eliminação. Até existir automação validada, a revisão trimestral é uma tarefa manual a executar e registar pelo responsável.

## 5. Pedidos dos titulares

Se alguém solicitar acesso, rectificação, actualização, eliminação ou oposição:
1. Registar a data de recepção e o canal utilizado.
2. Identificar a pessoa de forma proporcional ao risco. Não pedir cópia de documento de identificação por rotina.
3. Localizar os dados na caixa operacional e nos serviços relevantes, sem recolher dados de outras pessoas.
4. Avaliar o pedido e eventuais obrigações de conservação antes de alterar ou eliminar informação.
5. Responder pelo canal adequado e guardar um registo mínimo da decisão e da data de conclusão.
6. Se houver dúvida sobre prazo, fundamento ou âmbito, obter aconselhamento jurídico ou orientação da APD antes de assumir uma obrigação que não esteja confirmada.

## 6. Incidentes de segurança

Perante perda, divulgação, acesso não autorizado ou alteração indevida de dados:
1. Conter o incidente e proteger as contas/sistemas afectados.
2. Preservar os registos técnicos necessários à investigação, evitando cópias excessivas de dados pessoais.
3. Registar o que aconteceu, quando foi detectado, categorias e volume aproximado de dados, sistemas e fornecedores envolvidos, consequências prováveis e medidas tomadas.
4. Avaliar se é necessário contactar fornecedores, a APD ou os titulares, confirmando os deveres e prazos legais aplicáveis.
5. Documentar a decisão, as medidas correctivas e a prevenção de recorrência.

Este procedimento não fixa um prazo legal de notificação de incidentes. Essa obrigação deve ser confirmada com base na lei aplicável e nas circunstâncias concretas.

## 7. Registo de verificações antes do lançamento

| Verificação | Estado inicial | Evidência a guardar |
| --- | --- | --- |
| Identidade e endereço do responsável | Parcial — endereço de correspondência indicado como Luanda, Angola | Confirmar requisitos formais aplicáveis; não publicar endereço residencial sem decisão expressa |
| Notificação/registo junto da APD ou eventual dispensa | Pendente de esclarecimento | Resposta escrita da APD ou parecer jurídico |
| Transferências internacionais | Pendente | Regiões, DPA, subcontratantes e mecanismo jurídico por fornecedor |
| Retenção de Vercel, Resend e Gmail | Pendente | Configurações e documentação dos fornecedores |
| Rotina de revisão trimestral | A implementar | Registo de cada revisão e eliminação |
| Google Analytics 4 | Condicionado a consentimento e configuração | Teste técnico de rejeição/aceitação e verificação de eventos |
| Vercel Web Analytics | Configuração a confirmar | Documentação e teste do comportamento efectivo |
| Controlo de acesso e MFA | A verificar | Lista de contas autorizadas e confirmação de MFA |

## 8. Revisão deste procedimento

Rever este documento:
- trimestralmente, em conjunto com a revisão de conservação;
- quando for adicionado ou removido um fornecedor;
- quando o formulário, as categorias de dados ou as finalidades mudarem;
- quando houver orientação da APD, alteração legislativa ou incidente relevante.

**Não declarar o website “em conformidade” apenas por este documento existir.** A publicação depende também da confirmação dos requisitos legais aplicáveis, da verificação dos fornecedores e da execução real dos controlos descritos.

# Prompts assertivos

# Prompt ricos - modelo de perguntas

---

Me `[FUNÇÃO]` um `[TIPO DE TEXTO]` sobre `[assunto]` nesse `[estilo]`

FTAE

```bash
Função: (escreva/resuma/traduza/crie tópicos)
```

```bash
Tipo de texto: (roteiro/post para blog/artigo/poema/postagem para instagram)
```

```bash
assunto: (I.A, futebol, música, filme... etc)
```

```bash
estilo: (personalidade, escritor, filósofo)
```

> Me [crie tópicos] um [um artigo] sobre [macarrão]
> 
> 
> Me [escreva] um [TEXTO] sobre [INTELIGÊNCIA ARTIFICIAL]
> 

# Tom de voz

---

Escreva para quem aquela comunicação deve ser direcionada para calibrar o entendimento e naturalidade da resposta

```bash
Tom de voz: me explique como se fosse (para uma criança de 10 anos, de um jeito mais sênior
```

Exemplos:

Me escreva em formato de carrossel do instagram uma postagem sobre programação com os princpais me explicando o que é DOCKER em um estilo informal e descontraído como se tivesse sido postado por um influencer de tecnologia, `explique como se fosse para uma criança de 10 anos`

Me escreva em formato de carrossel do instagram uma postagem sobre programação com os princpais me explicando o que é DOCKER em um estilo informal e descontraído como se tivesse sido postado por um influencer de tecnologia, `explique com um tom de voz mais sênior`

ESCREVER NA LINHA DE BAIXO DO CHATGPT: `SHIFT + ENTER`

- `{}` Campos Semânticos
- `[]` Variáveis

### REGRA DOS 3R's

- PROMPT MODELO

Me `[FUNÇÃO]`
um `[TIPO DE TEXTO]`
sobre `[assunto]`
nesse `[estilo]`
com o `[TOM DE VOZ]`
. Agora use os itens em {RESUMO} para o {ROTEIRO} seguindo as {REGRAS}

---

- Exemplo:

Me escreva
um artigo, detalhado explicando sobre  os elementos de construção de uma pipiline no GitLab na prática.
Em tom de conversa com um desenvolvedor Júnior sem exeperiência real de mercado de trabalho.

Tome como base de partida, essa referência esse pipeline, onde foi mostrado alguns conceitos básicos
e com alguns comentários feitos durante a aula:

# Criando Jobs (Tarefas) - Passos de execução
# cada job possui um elemento obrigatório: script e dentro de um scrit podemos ter mais de um comando.

# $CI_COMMIT_BRANCH -> Guarda a branch que estamos trabalhando atualmente
workflow:
  rules:
    - if: $CI_COMMIT_BRANCH != "main"
      when: never
    - when: always

# Caso tenha algum erro, não irá dar continuidade na execução dos JOBS, pois precisa respeitar 
# a sequência das stages (ESTÁGIOS), definidas nas stages  de cada Job.
# Diferente de só ter JOBS - que ocorrem em paralelo (Ao mesmo tempo)
stages:
  - teste
  - build
  - deploy


# script: Permitem executar qualquer comando (no nosso caso do sistema linux que é o mais comum)
# - são executados de uma máquina virtual do gitlab
executar_teste:
  stage: teste
  before_script: # Irá executar antes de iniciar os scripts
    - echo "Preparando testes..."   
    - chmod +x ./script.sh # Dando permissão de execução para o script 
  script:
    - ./script.sh # Executar os comandos que estão definidos nesse arquivo

  after_script: # executar após finalizar os scripts
    - echo "Apagando arquivos temporários..."

# Criando Jobs que podem ser executados em paralelo (ao mesmo tempo)
executar_teste2:
  stage: teste
  script:
    - echo "Executando testes 2..."   


criar_imagens:
  stage: build
  script:
    - echo "Criando as imagens..."
# Caso ocorra um erro no gitlab irá mostrar onde está, em qual job e quais JOBS foram 
# puladas por causa do erro da JOB em si, pois está usando o conceito de STAGES/ESTÁGIOS e 
# deve-se respeitar a ordem de execução.
# - echo_erro "Criando as imagens..."

# REGRA: push_images só pode iniciar se criar_imagens estiver okay (Dependência entre jobs)
# needs: 
# - Podemos indicar mais de uma dependência entre os jobs
# - Não permite que outro job inicie se o que ele NECESSITA estiver com erro.
# ESPECIFICANDO A EXECUÇÃO DO JOB EM UMA DETERMINADA BRANCH:
# only: [Apenas] exceute esse JOB se for na branch main
#  - main
push_images:
  needs: # Podemos indicar mais de uma dependência entre os jobs
    - criar_imagens # Só inicie se o criar_imagens estiver okay
  stage: build
  script:
    - echo "Realizando upload das imagens..."


kubernetes:
  stage: deploy
  script:
    - echo "Executando deploy..."


Agora use os itens em {RESUMO} para o {ROTEIRO} seguindo as {REGRAS}

{RESUMO}
[Autoridade]: Uanderson, um desenvolvedor Backend Java em formação
[Avatar]: Desenvolvedores Júniors
[Problema]: Entender como implementar e entender os conceitos para a criação de uma pipeline no GitLab na prática para trabalhar em equipe e em projetos reais.

{ROTEIRO}
Olá eu sou [Autoridade] e vou ajudar o [Avatar]
Hoje vamos resolver o [Problema]

{REGRAS}
> Siga o {ROTEIRO} acima e substitua os elementos entre [] por aqueles listados em {RESUMO} acima.
> Mantenha o tom e ritmo, mas reescreva as palavras em {ROTEIRO} para que seja diferente do original, expandindo ou mudando conforme necessário.
> Use Analogias simples e hipérboles
> Utilize um tom de voz de um desenvolvedor Devops sênior com mais de 15 anos de experiência.






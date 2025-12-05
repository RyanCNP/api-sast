# API-SAST

API para atividades de Integração e Entrega Contínua (P2).

## Como rodar localmente
1. Copie `.env.example` para `.env` e ajuste.
2. `docker-compose up --build`
3. Acesse: `http://localhost:3000`
4. Swagger: `http://localhost:3000/api-docs`

## Endpoints principais
- `POST /denuncias` - criar denúncia
- `GET /denuncias` - listar
- `GET /denuncias/:id` - buscar
- `PUT /denuncias/:id` - atualizar
- `DELETE /denuncias/:id` - deletar

## CI/CD
- Configure os GitHub Secrets:
  - `DOCKERHUB_USERNAME`
  - `DOCKERHUB_TOKEN`
  - `DOCKERHUB_REPO`
  - `SONAR_TOKEN`
  - `RENDER_API_KEY`
  - `RENDER_SERVICE_ID`
- Workflow: `.github/workflows/ci-cd.yml` (checkout → install → tests → sonar → build → push → deploy)

## Observações
- Integre o repositório ao SonarCloud para receber o dashboard de vulnerabilidades.
- Adicione o usuário `festmedeiros` como colaborador (conforme instrução do docente).

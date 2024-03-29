# Responder enquete

[Read me in English (International)](./save-survey-result.md)

> ## Caso de sucesso:
1. ✅ Recebe uma requisição do tipo **PUT** na rota **/api/surveys/{survey_id}/results**
1. ✅ Valida se a requisição foi feita por um **usuário**
1. ✅ Valida o parâmetro **survey_id**
1. ✅ Valida se o campo **answer** é uma resposta válida
1. ✅ **Cria** um resultado de enquete com os dados fornecidos caso não tenha um registro
1. ✅ **Atualiza** um resultado de enquete com os dados fornecidos caso já tenha um registro
1. ✅ Retorna **200** com os dados do resultado da enquete

> ## Exceções:
1. ✅ Retorna erro **404** se a API não existir
1. ✅ Retorna erro **403** se não for um usuário
1. ✅ Retorna erro **403** se o survey_id passado na URL for inválido
1. ✅ Retorna erro **403** se a answer enviada pelo client for inválida
1. ✅ Retorna erro **500** se der erro ao tentar criar o resultado da enquete
1. ✅ Retorna erro **500** se der erro ao tentar atualizar o resultado da enquete
1. ✅ Retorna erro **500** se der erro ao tentar carregar a enquete
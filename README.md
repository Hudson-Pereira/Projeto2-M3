Este é o projeto 02 do Módulo 03 - Backend da Blue.
O projeto é uma API que guarda 3 listas, cada uma em uma rota diferente.
As listas possuem os seguintes parâmetros:
Paises: - nome (string) - população (number) - lingua mãe (string) - PIB (number)
{
"nome":,
"populacao":,
"linguaMae":,
"pib":
}

Estados: - nome (string) - região (string) - população (number) - valor salário mínimo (number)
{
"nome":
"regiao":
"populacao":
"valorSalMin":
}

Cidades: - nome (string) - quantidade de bairros (number) - população (number) - data de aniversário da cidade (date)
{
"nome":,
"qtdDeBairros":,
"populacao":,
"aniversarioCidade":
}

Cada uma das 3 rotas possuem as seguintes subrotas:

- /listall (para ver a lista completa)
- /listname (para ver itens da lista por nome)
- /add (para adicionar novas entradas)
- /update (para atualizar itens por id)
- /delete (para deletar itens por id)

O projeto foi feito por Hudson Pereira e Felipe Wrany

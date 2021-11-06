Este é o projeto 02 do Módulo 03 - Backend da Blue.
O projeto é uma API que guarda 3 listas, cada uma em uma rota diferente.
As listas possuem os seguintes parâmetros:
Paises:
     - nome (string)
     - população (number)
     - lingua mãe (string)
     - PIB (number)
Estados:
     - nome (string)
     - região (string)
     - população (number)
     - valor salário mínimo (number)
Cidades:
     - nome (string)
     - quantidade de bairros (number)
     - população (number)
     - data de aniversário da cidade (date)

Cada uma das 3 rotas possue as seguintes subrotas:
- /listall (para ver a lista completa)
- /listname (para ver itens da lista por nome)
- /add (para adicionar novas entradas)
- /update (para atualizar itens por id)
- /delete (para deletar itens por id)

O projeto foi feito por Hudson Pereira e Felipe Wrany
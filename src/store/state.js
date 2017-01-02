import alunos from './json'

export default {
  disciplina: 'Antropologia',
  semestre: '2015.1',
  metricas: {
    alunos
  },
  tabelasindicadores: [
    {
      dados: {
        'N': [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13
        ],
        Descricao: [
          'Quantidade de postagens do aluno em fóruns',
          'Quantidade de geral mensagens enviadas pelo aluno',
          'Quantidade de geral mensagens recebidas pelo aluno',
          'Média semanal de mensagens enviadas pelo aluno',
          'Média semanal de acessos do aluno ao ambiente',
          'Quantidade de atividades entregues pelo aluno no prazo',
          'uantidade de colegas diferentes para quem o aluno enviou mensagens',
          'Tempo médio semanal de utilização da plataforma pelo aluno',
          'Quantidade de acessos do aluno ao ambiente',
          'Quantidade de mensagens enviadas por aluno aos professores',
          'Quantidade de mensagens enviadas por aluno para colegas',
          'Quantidade de acessos do aluno aos fóruns',
          'Quantidade de postagens do aluno em fóruns em resposta a outros alunos'

        ]
      },
      selected: [
        false,
        false
      ]
    }
  ]
}

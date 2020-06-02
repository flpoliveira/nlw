import Knex from 'knex';

export async function seed(knex: Knex){
  await knex('items').insert([
    { title: 'Pilhas e baterias', image: 'baterias.svg'},
    { title: 'Lâmpadas', image: 'lampadas.svg'},
    { title: 'Papéis e Papelão', image: 'papeis-papelao.svg'},
    { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg'},
    { title: 'Óleo de Cozinha', image: 'oleo.svg'},
    { title: 'Orgânicos', image: 'organicos.svg'},
  ]);
}
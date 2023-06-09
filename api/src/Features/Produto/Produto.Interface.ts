// Inteface tabela Produto
interface Produto{
    codigo?: number,
    codigo_categoria?: number,
    nome?: string,
    descricao?: string,
    preco?: number,
    imagem?: string,
    data_atualizacao?: Date,
    data_criacao?: Date
}

// Exportação
export { Produto };
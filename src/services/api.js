export const fetchVerses = async (searchTerm = '') => {
    const regex = /^([A-Za-zÀ-ÖØ-öø-ÿ\s]+?)\s+(\d+)[\s:.]?\s*(\d+)$/;
    const result = searchTerm.match(regex);

    if (!result) {
        console.error("Formato inválido para a busca de versículo.");
        return [];
    }

    try {
        // Primeira tentativa com a tradução "almeida" (Especificamente para o livro Cânticos/Song of Solomon)
        let response = await fetch(`https://bible-api.com/${result[1].trim()}%20${result[2]}:${result[3]}?translation=almeida`);
        
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            // Segunda tentativa sem a tradução "almeida"
            console.warn("Tradução 'Almeida' não encontrada");
            response = await fetch(`https://bible-api.com/${result[1].trim()}%20${result[2]}:${result[3]}`);
            
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                console.error('Erro ao buscar versículo sem tradução:');
                return [];
            }
        }
    } catch (error) {
        console.error('Erro ao buscar versículos:', error);
        return [];
    }
};

export const fetchVerses = async (searchTerm = '') => {
    try {

        const regex = /^([A-Za-zÀ-ÖØ-öø-ÿ]+)\s*(\d+)[\s:.]?\s*(\d+)$/;

        const result = searchTerm.match(regex);

        if (!result) {
            console.error("Formato inválido para a busca de versículo.");
            return [];
        }
        
        const response = await fetch(`https://bible-api.com/${result[1]}%20${result[2]}:${result[3]}?translation=almeida`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar versículos:', error);
        return [];
    }
};

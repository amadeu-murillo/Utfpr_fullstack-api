export const fetchVerses = async () => {
    try {
        const response = await fetch(''); //-> pra buscar versiculos, preencher depois
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar versículos:', error);
        return [];
    }
};

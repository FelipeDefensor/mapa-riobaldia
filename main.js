const classToEstado = {
    'distrito-federal': 'Distrito Federal',
    'amazonas': 'Amazonas',
    'acre': 'Acre',
    'roraima': 'Roraima',
    'amapa': 'Amapa',
    'pará': 'Pará',
    'rondônia': 'Rondônia',
    'tocantins': 'Tocantins',
    'maranhão': 'Maranhão',
    'alagoas': 'Alagoas',
    'piauí': 'Piaú',
    'sergipe': 'Sergipe',
    'ceará': 'Ceará',
    'bahia': 'Bahia',
    'paraíba': 'Paraíba',
    'santa-catarina': 'Santa Catarina',
    'goiás': 'Goiás',
    'mato-grosso': 'Mato Grosso',
    'mato-grosso-do-sul': 'Mato Grosso do Sul',
    'são-paulo': 'São Paulo',
    'santa-catarina': 'Santa Catarina',
    'rio-grande-do-sul': 'Rio Grande do Sul',
    'minas-gerais': 'Minas Gerais',
    'espírito-santo': 'Espírito Santo',
    'paraná': 'Paraná',
    'rio-de-janeiro': 'Rio de Janeiro',
    'amapá': 'Amapá',
    'rio-grande-do-norte': 'Rio Grande do Norte',
    'pernambuco': 'Pernambuco',
}

document.addEventListener('DOMContentLoaded', (event) => { 
    document.querySelector('svg').addEventListener('click', (event) => {
        if(event.target.classList.contains('estado')){
            var estado = event.target.classList[1];
            alert('Aqui vão os eventos que aconteceram em ' + classToEstado[estado]);
        }
    })
})
    
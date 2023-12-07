function showLoading(timeout) {
    const section = document.createElement('section');
    section.classList.add('loading', 'centralize');

    const label = document.createElement('label');
    label.innerText = 'Carregando ...';
    section.appendChild(label);

    document.body.appendChild(section);

    setTimeout(() => hideLoading(), timeout);
}


function hideLoading() {
    const loadings = document.getElementsByClassName('loading');
    
    if (loadings.length) {
        loadings[0].remove();
    }
}




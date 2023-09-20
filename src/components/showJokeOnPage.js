const showJokeOnPage = (joke) => {
    // container
    const container = document.createElement('div');
    container.classList.add('container');
    
    // body
    const body = document.createElement('p');
    body.innerText = joke;
    
    container.append(body);
    return container;
    
    }
    
    export default showJokeOnPage;
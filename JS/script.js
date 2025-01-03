fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Configurações do perfil
        const nameParts = data.name.split(' ');
        const lastName = nameParts.pop();
        document.getElementById('name').innerHTML = `${nameParts.join(' ')} <strong>${lastName}</strong>`;
        document.getElementById('description').textContent = data.description;

        // Links
        const linksContainer = document.getElementById('links');
        data.links.slice(0, 5).forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.name;
            linksContainer.appendChild(linkElement);
        });

        // Redes Sociais
        const socialLinksContainer = document.getElementById('social-links');
        const socialIcons = {
            "LinkedIn": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/72px-LinkedIn_icon.svg.png",
            "Facebook": "https://img.freepik.com/free-psd/3d-facebook-icon-vibrant-blue-transparent-background_84443-30332.jpg?t=st=1735847394~exp=1735850994~hmac=8fb212f85fbe458edd98a049f61d576ec546c403a0aea2732592814fb2c488a9&w=740",
            "Instagram": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
        };

        for (const [network, url] of Object.entries(data.socialLinks)) {
            if (socialIcons[network]) {
                const socialLinkElement = document.createElement('a');
                socialLinkElement.href = url;
                const imgElement = document.createElement('img');
                imgElement.src = socialIcons[network];
                imgElement.alt = network;
                socialLinkElement.appendChild(imgElement);
                socialLinksContainer.appendChild(socialLinkElement);
            }
        }
    })
    .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

// Função para trocar de tema
function setTheme(theme) {
    document.body.className = theme;
}

// Dentro do seu arquivo sw.js:
const CACHE_NAME = 'lampfinance-v2'; // <--- Mude o número da versão aqui sempre que atualizar o design

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Deletando cache antigo...');
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Força o novo design a assumir o controle na hora
    );
});

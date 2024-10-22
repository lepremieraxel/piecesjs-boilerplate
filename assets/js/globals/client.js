class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  // Méthode générique pour effectuer des requêtes Fetch
  async request(endpoint, method = 'GET', body = null, headers = {}) {
    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
    };

    // Ajouter le corps de la requête s'il y en a
    if (body) {
      config.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, config);

      // Vérification si la réponse est réussie
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      // Retourner les données JSON ou rien si c'est une requête DELETE
      return method === 'DELETE' ? null : await response.json();

    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  // Méthode pour une requête GET
  get(endpoint, headers = {}) {
    return this.request(endpoint, 'GET', null, headers);
  }

  // Méthode pour une requête POST
  post(endpoint, body, headers = {}) {
    return this.request(endpoint, 'POST', body, headers);
  }

  // Méthode pour une requête PUT
  put(endpoint, body, headers = {}) {
    return this.request(endpoint, 'PUT', body, headers);
  }

  // Méthode pour une requête DELETE
  delete(endpoint, headers = {}) {
    return this.request(endpoint, 'DELETE', null, headers);
  }
}

// Utilisation du client pour faire des appels API
const apiClient = new ApiClient('https://randomuser.me/api');

// // Exemple d'utilisation :
// // 1. Récupérer des données (GET)
// apiClient.get('/?results=10')
//   .then(data => console.log('GET response:', data))
//   .catch(error => console.error('GET error:', error));

// // 2. Poster des données (POST)
// apiClient.post('/items', { name: 'New Item', description: 'Description of the new item' })
//   .then(data => console.log('POST response:', data))
//   .catch(error => console.error('POST error:', error));

// // 3. Mettre à jour des données (PUT)
// apiClient.put('/items/1', { name: 'Updated Item' })
//   .then(data => console.log('PUT response:', data))
//   .catch(error => console.error('PUT error:', error));

// // 4. Supprimer des données (DELETE)
// apiClient.delete('/items/1')
//   .then(() => console.log('DELETE success'))
//   .catch(error => console.error('DELETE error:', error));

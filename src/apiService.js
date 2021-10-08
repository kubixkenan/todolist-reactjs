class apiService {

    baseUrl = "https://localhost:44369/";

    post = function (url, data, callback) {
        fetch(this.baseUrl + "api/" + url, {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        })
            .catch(err => {

            })
            .then(response => {
                if (response && response.status !== 200) {                
                    return;
                }
                return response?.json();
            })
            .then(data => {
                if (callback) {
                    callback(data);
                }
            });
    }

    get = function (url, callback) {
        fetch(this.baseUrl + "api/" + url, {
            method: 'GET',
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .catch(err => {

            })
            .then(response => {
                if (response && response.status !== 200) {                                            
                    return;
                }
                return response?.json();
            })
            .then(data => {
                if (callback) {
                    callback(data);
                }
            });
    }    

    put = function (url, callback) {
        fetch(this.baseUrl + "api/" + url, {
            method: 'PUT',
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .catch(err => {

            })
            .then(response => {
                if (response && response.status !== 200) {                                            
                    return;
                }
                return null;//response?.json();
            })
            .then(data => {
                if (callback) {
                    callback(data);
                }
            });
    }    

    delete = function (url, callback) {
        fetch(this.baseUrl + "api/" + url, {
            method: 'DELETE',
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .catch(err => {

            })
            .then(response => {
                if (response && response.status !== 200) {                                            
                    return;
                }
                return null; //response?.json();
            })
            .then(data => {
                if (callback) {
                    callback(data);
                }
            });
    }    
}

export default apiService;
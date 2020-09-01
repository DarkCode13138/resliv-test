window.addEventListener('DOMContentLoaded',function(){

    let btnXhr = document.querySelector('.btn_xhr');
    btnXhr.addEventListener('click', XhrRequest);

    function XhrRequest() {

        const requestURL1 = `https://reqres.in/api/users?per_page=12`;
        const requestURL2 = `https://reqres.in/api/users?per_page=5`;
        const xhr = new XMLHttpRequest();
        const xhr2 = new XMLHttpRequest();

        let firstUsers = document.querySelector('.first-users');
        let secondUsers = document.querySelector('.second-users');

        function sendRequest(xhr, method, url) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()

                xhr.open(method, url)
                xhr.responseType = 'json'
                xhr.setRequestHeader('Content-Type', 'application/json')

                xhr.onload = () => {
                    if (xhr.status >= 400) {
                        reject(xhr.response)
                        return Promise.reject(new Error(xhr.response.statusText))
                    } else {
                        resolve(xhr.response)
                    }
                }

                xhr.onerror = () => {
                    reject(new Error("Network Error"));
                }

                xhr.send()

            })
        }

    let user={}
    let user2={}

        Promise.all([
                sendRequest(xhr, 'GET', requestURL1),
                sendRequest(xhr2, 'GET', requestURL2)
        ]).then(result => {
            user = result[0].data;
            user.forEach( (element) => {
                let div = document.createElement('div');
                div.textContent = element.first_name;
                firstUsers.appendChild(div);
            })
            return result
        }).then(result =>{
            user2 = result[1].data;
            user2.forEach( (element) => {
                let div = document.createElement('div');
                div.textContent = element.first_name;
                secondUsers.appendChild(div);
            })
        }).then(() => {
            console.log('Оба ответа получены')
        }).catch(()=> {
            console.log('что-то пошло не так')
        })

    }

})

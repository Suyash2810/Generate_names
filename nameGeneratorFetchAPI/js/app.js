//document.getElementById('generate-names').addEventListener('submit',loadNames);
//
//
//
//
//
//
//function loadNames(e){
//    e.preventDefault();
//
//
//    const origin = document.getElementById('country').value;
//    const genre = document.getElementById('genre').value;
//    const amount = document.getElementById('quantity').value;
//
//    let url = 'http://uinames.com/api/?';
//
//    if(origin !== ''){
//        url+=`region=${origin}&`;
//    }
//
//    if(genre !== ''){
//        url+=`gender=${genre}&`;
//    }
//
//    if(amount !== ''){
//        url+=`amount=${amount}&`;
//    }
//
//        console.log(`<pre>${url}</pre>`);
//        
//    var xhr = new XMLHttpRequest();
//
//    xhr.open('GET',url,true);
//
//    var Result = document.getElementById('result');
//    xhr.onload = function(){
//
//        if(this.status === 200){
//
//            var namesList = JSON.parse(this.responseText);
//
//            result = '<h2>Generated Names are:</h2>';
//            result +='<ul class="list">';
//
//            namesList.forEach(function(name){
//
//                result+=`<li>${name.name}</li>`;
//
//            });
//
//            result+='</ul>';
//
//            Result.innerHTML = result;
//        }
//    }
//
//    xhr.send();
//    
//}


document.getElementById('generate-names').addEventListener('submit', loadNames);

function loadNames(e) {
    e.preventDefault();


    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    let url = 'http://uinames.com/api/?';

    if (origin !== '') {
        url += `region=${origin}&`;
    }

    if (genre !== '') {
        url += `gender=${genre}&`;
    }

    if (amount !== '') {
        url += `amount=${amount}&`;
    }

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var Result = document.getElementById('result');
            let result = `<h2>Generated Names are:</h2>`;
            result += `<ul class="list">`;

            data.forEach(function (name) {
                result += `<li>${name.name}</li>`;
            });

            result += '</ul>';

            Result.innerHTML = result;

        })
        .catch(function (reject) {
            var Result = document.getElementById('result');
            Result.innerHTML = reject;
        });



}

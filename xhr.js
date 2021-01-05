function queryRequest(){
    var nReq = new XMLHttpRequest();
    nReq.open("GET","https://reqres.in/api/users?page=2");
    nReq.onreadystatechange = function(){
        if(this.status==200 && this.readyState==4){
            document.getElementById("showQuery").textContent = nReq.responseText;
            // let showDiv = document.getElementById("showQuery");
            // showDiv.removeChild();
            // let resp_data = nReq.responseText;
            // let json_data = JSON.parse(resp_data);
            // let table = document.createElement("table");

            // for(var i in json_data.data){
            //     let openTr = document.createElement("tr");
            //     table.appendChild(openTr);
            //     let openTd = document.createElement("td");
            //     openTr.appendChild(openTd);
            //     let profile = document.createElement("p");
            //     let tmp = document.createTextNode("id:"+json_data.data[i].id+"\n")
            //     openTd.appendChild(profile)
            // }
        }
    }
    nReq.send(null);
}

function insertRequest(){
    let req_name = document.getElementById("name").value;
    let req_job = document.getElementById("job").value;
    let data = {};
    if(req_name!='' && req_job!=''){
        data["name"]=req_name;
        data["job"]=req_job;
        console.log(data);
        var nReq = new XMLHttpRequest();
        nReq.onreadystatechange = function(){
            if(this.readyState==4 && this.status==201){
                let jsonString = nReq.responseText;
                document.getElementById("showInsert").textContent = jsonString;
            }
        }
        nReq.open("POST","https://reqres.in/api/users",true);
        nReq.setRequestHeader("Content-Type","application/json");
        //nReq.setRequestHeader("Origin","https://reqres.in");
        nReq.send(JSON.stringify(data));
    }else{
        alert('請全部填寫')
    }
    
}
var list = [
	{
		name: 'Xin việc ở Google',
		status: 'chua'
	},
	{
		name: 'Cưới vợ',
		status: 'xong'
	},
]

function islistContent(){
    if(localStorage.getItem('list') === null){
        localStorage.setItem('list', JSON.stringify(list));
        return true;
    }
    else{
        list = JSON.parse(localStorage.getItem('list'));
        return false;
    }
}

function rendertodoList(){
    var list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

    if (!islistContent()){
        document.getElementById('list').style.display = 'none';   
    }
    document.getElementById('list').style.display = 'block';

    var listContent='';
    list.forEach((work, index)=>{
        var workId = index;
        index++;
        listContent +=`
        <li class="${work.status}">
        <span class='span-work-name'>${work.name}</span>
        <span class='del' onclick='delWork(${workId})'><i class='fa fa-close'></i></span>
        <span class='check' onclick='Worked(${workId})'><i class='fa fa-check'></i></span>
        </li>`;
    })
    document.getElementById('list-work').innerHTML = listContent;
}

function addWork(){
    var name = document.getElementById('work-name').value;
    var list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
    list.push({
        name: name,
        status: 'chua'
    });
    name = '';
    localStorage.setItem('list',JSON.stringify(list));
    rendertodoList();
    resetWorkInput();
}

function delWork(index){
    if(confirm("Bạn muốn xóa công việc?")){
    var list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
    list.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(list));
    rendertodoList();
    }
}

function Worked(index){
    var list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
    list[index].status = 'xong';
    localStorage.setItem('list', JSON.stringify(list));
    rendertodoList();
}

function resetWorkInput()
{
    var element = document.getElementById('work-name');
    element.value = '';
}


const table = [
    {
        name:"Rusell Peters",
        age:"49",
        company:"Google",
        designation: "Android Engineer",
        skills:"Java, Kotlin"
    },
    {
        name:"Kenny Sebastian",
        age:"29",
        company:"Apple",
        designation: "IOS Developer",
        skills:"Swift/C#"
    },
    {
        name:"Tanmay Bhatt",
        age:"33",
        company:"Uber",
        designation: "Data Scientist",
        skills:"Python, Machine Learning, NLP"
    },
    {
        name:"Kushagra Jain",
        age:"25",
        company:"Freelancer",
        designation: "Software Developer",
        skills:"NodeJs, React, React Native, Javascript, Typescript, HTML, CSS, SCSS, Kotlin"
    },
    {
        name:"Biswa Kalyan Rath",
        age:"31",
        company:"Microsoft",
        designation: "Sr. Software Engineer",
        skills:"Ruby on Rails, C++, Rust"
    },
    {
        name:"Samay Raina",
        age:"22",
        company:"Amazon",
        designation: "Product Designer",
        skills:"UX/UI, Figma, Canva, Photoshop"
    },
    {
        name:"Akash Gupta",
        age:"27",
        company:"Netflix",
        designation: "Product Manager Marketing",
        skills:"Mailchimp, Google Analytics"
    }
]

const tableHeader = Object.keys(table[0]);


const search = document.querySelector('.filter-input');
const output = document.querySelector('.output');

window.addEventListener('DOMContentLoaded', loadTable);
search.addEventListener('input', filter);


function loadTable(){
    // let temp = `<table><tr>`;
    // tableHeader.forEach(header => temp+=`<th>${header.toUpperCase()}</th>`)
    // temp+=`</tr>`
    // table.forEach(row =>{
    //     temp += `
    //     <tr>
    //         <td>${row.name}</td>
    //         <td>${row.age}</td>
    //         <td>${row.company}</td>
    //         <td>${row.designation}</td>
    //         <td>${row.skills}</td>
    //     </tr>
    //     `
    // })

    // temp += `</table>`;

    let temp = display(table);
    output.innerHTML = temp;
}

function filter(e){
    let results;
    let temp = '';

    results = table.filter(item => 
        
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.age.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.company.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.designation.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.skills.toLowerCase().includes(e.target.value.toLowerCase())
        );

    if(results.length > 0){
        // temp = `<table><tr>`;
        // tableHeader.forEach(header => temp+=`<th>${header.toUpperCase()}</th>`)
        // temp+=`</tr>`
        // results.forEach(row =>{
        //     temp += `
        //     <tr>
        //         <td>${row.name}</td>
        //         <td>${row.age}</td>
        //         <td>${row.company}</td>
        //         <td>${row.designation}</td>
        //         <td>${row.skills}</td>
        //     </tr>
        //     `
        // })
        // temp += `</table>`;

        temp = display(results);
    }
    else{
        temp = `<div class="no-item">Item Not Found</div>`
    }

    output.innerHTML = temp;
}

function display(iteratorObject){
    let temp2 = `<table><tr>`;
    tableHeader.forEach(header => temp2+=`<th>${header.toUpperCase()}</th>`)
    temp2+=`</tr>`
    iteratorObject.forEach(row =>{
        temp2 += `
        <tr>
            <td>${row.name}</td>
            <td>${row.age}</td>
            <td>${row.company}</td>
            <td>${row.designation}</td>
            <td>${row.skills}</td>
        </tr>
        `
    })
    temp2 += `</table>`;

    return temp2;

}
const tabs = document.querySelectorAll(".tab-btn");
const all_content = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');

    var line = document.querySelector(".line");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    all_content.forEach(content=>{content.classList.remove('active')})
    all_content[index].classList.add('active')
  })
})

document.querySelector('.tab_box').addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains("tab_btn")) {
        show(e);
    }
});

function show(e) {
    if (e.target && e.target.id === "tru") {
        document.querySelectorAll('.trustees').forEach(trustee => {
            trustee.style.display = "block";
        });
        document.querySelectorAll('.teams').forEach(team => {
            team.style.display = "none";
        });
    } else if (e.target && e.target.id === "tea") {
        document.querySelectorAll('.teams').forEach(team => {
            team.style.display = "block";
        });
        document.querySelectorAll('.trustees').forEach(trustee => {
            trustee.style.display = "none";
        });
    }
}

document.querySelector('.department').addEventListener('click', (x) => {
    if (e.target && e.target.classList.contains("data")) {
        create(x);
    }
});

function create(x){
    if (x.target && x.target.id === "leadership") {
        document.querySelectorAll('.leadership_photos').forEach(leadership_photos => {
            leadership_photos.style.display = "block";
            leadership.style.backgroundColor = "#ba0c2f";
        });
        document.querySelectorAll('.procurement_photos').forEach(procurement_photos => {
            procurement_photos.style.display = "none";
            procurement.style.backgroundColor = "white";
        });
    } else if (x.target && x.target.id === "procurement") {
        document.querySelectorAll('.procurement_photos').forEach(procurement_photos => {
            procurement_photos.style.display = "block";
            procurement.style.backgroundColor = "#ba0c2f";
        });
        document.querySelectorAll('.leadership_photos').forEach(leadership_photos => {
            leadership_photos.style.display = "none";
            leadership.style.backgroundColor = "white";
        });
    }
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry=>{
     if(entry.isIntersecting){
        entry.target.classList.add("show")
     }else{
      entry.target.classList.remove("show")
     }
    })
})
const element = document.querySelectorAll('.hidden');
  element.forEach((el)=> observer.observe(el));
  
  const menuBar = document.querySelector('.animated_menu_bar');
  const navLinks = document.querySelector('.top__links');

   function hideLinks(e){
      if(navLinks.classList.contains('showMenu') && e.target.className== 'link'){
         navLinks.classList.toggle("showMenu");
      }
   }


   function show(){
   menuBar.classList.toggle("active");
   navLinks.classList.toggle("showMenu");
}
  menuBar.addEventListener("click",show)
  navLinks.addEventListener("click", (e)=>{
   hideLinks(e)
  })
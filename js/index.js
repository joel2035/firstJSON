 var data;


 fetch('http://localhost:8000/js/data.json')

   .then(function(response) {
     return response.json();
   })
   .then(function(response) {
     data = response
     salut();
   });


 function salut() {
   /* title */
   title.innerHTML = data["page0"].text;
   title2.innerHTML = data["page1"].text;
   title3.innerHTML = data["page2"].text;
   title4.innerHTML = data["page3"].text;
   title5.innerHTML = data["page4"].text;
   title6.innerHTML = data["page5"].text;
   audio1.play();


   text.innerHTML = data["page1"].text1;
   /* images */

   image1.src = data["page1"].hero;
   image2.src = data["page1"].conseiller;
   image3.src = data["page2"].img;
   image4.src = data["page4"].img;
   image5.src = data["page5"].img;

   btn4.addEventListener('click', function() {
     shwocase3.style.animationName = 'fadeOutUp';
     shwocase3.style.animationDuration = '4s';
   })
   btn3.addEventListener('click', function() {
     shwocase3.style.animationName = 'fadeOutUp';
     shwocase3.style.animationDuration = '4s';
   })


   btn4.addEventListener('click', function() {
     setTimeout(function() {
       shwocase3.style.display = "none";
       showcase4.style.display = "block";
     }, 2000)

   });

   btn1.addEventListener('click', function() {
     shwocase.style.animationName = 'fadeOutUp';
     shwocase.style.animationDuration = '4s';
   })

   btn.addEventListener('click', function() {
     header.style.animationName = 'fadeOutUp';
     header.style.animationDuration = '4s';

   })

   btn2.addEventListener('click', function() {
     shwocase.style.animationName = 'fadeOutUp';
     shwocase.style.animationDuration = '4s';

   })
   choice1.addEventListener('click', function() {
     shwocase2.style.animationName = 'fadeOutUp';
     shwocase2.style.animationDuration = '4s';

   })
   choice2.addEventListener('click', function() {
     shwocase2.style.animationName = 'fadeOutUp';
     shwocase2.style.animationDuration = '4s';

   })



   image.src = data["page0"].img
   btn1.addEventListener('click', function() {
     setTimeout(function() {
       shwocase.style.display = 'none';
       shwocase2.style.display = 'block';


     }, 2000)

   });
   btn2.addEventListener('click', function() {
     setTimeout(function() {
       shwocase.style.display = 'none';
       shwocase6.style.display = 'block';
       audio2.play();
       audio3.pause();

     }, 2000)

   });


   btn3.addEventListener('click', function() {
     setTimeout(function() {
       shwocase3.style.display = 'none';
       shwocase5.style.display = 'block';
     }, 2000)

   });


   setTimeout(function() {

     box.classList.remove('hidden');
   }, 500);
   setTimeout(function() {
     btn.style.display = "block";
     btn.style.top = "50%";
   }, 3000);
   btn.addEventListener("click", function() {
     setTimeout(function() {
       header.style.display = 'none';
       shwocase.style.display = 'block';
       audio1.pause();
       audio3.play();
     }, 2000)

   });
   choice1.addEventListener('click', function() {
     setTimeout(function() {
       shwocase2.style.display = 'none';;
       shwocase3.style.display = 'block';
     }, 2000)


   });
   choice2.addEventListener('click', function() {
     setTimeout(function() {
       shwocase2.style.display = 'none';
       shwocase6.style.display = 'block';
       audio2.play();
       audio3.pause();
     }, 2000)

   });

 }
let nav=document.querySelector('nav');
            window.addEventListener('scroll',()=>{
                nav.classList.toggle('nav-scroll',window.scrollY>0);
            });
            let AllNavlinks=document.querySelectorAll('.nav-links li a');
            AllNavlinks.forEach(item=>{
                item.addEventListener('clicl',()=>{
                    removeActive();
                    item.classList.add('active');
                })
            });
            const removeActive=()=>AllNavlinkA.forEach(item=>{
                item.classList.remove('active')
            });
            let menuBars=document.querySelector('nav button');
            let Navlinks=document.querySelector('.nav-links');
            menuBars.addEventListener('clicks',()=>{
                Navlinks.classList.toggle('.nav-link-block');

            })